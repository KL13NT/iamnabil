/// <reference lib="deno.ns" />

import { decodeBase64 } from "https://deno.land/std@0.216.0/encoding/base64.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ??
  "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const MODE = Deno.env.get("MODE") ?? "";

const h = String.raw;

const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": MODE === "dev"
    ? "*"
    : "https://nabiltharwat.com",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function ips(req: Request) {
  const clientIps = req.headers.get("x-forwarded-for")?.split(/\s*,\s*/) || [];

  return clientIps.length >= 1 ? clientIps[0] : null;
}

async function sendEmail(name: string, url?: string) {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "rendezvous@nabiltharwat.com",
        to: "nabil.tharwat@outlook.com",
        subject: "New rendezvous voicemail!",
        html: h`
				<p>You have a new voicemail from ${name}</p>
				<p>Give it a listen at <a href="${url}">${url}</a>. This URL is only available for  24 hours.</p>
				<audio src="${url}" controls></audio>
			`,
      }),
    });

    if (res.ok) return true;
  } catch (error) {
    console.error(error);
  }

  return false;
}

async function turnstileVerify(token: string, req: Request) {
  const turnstileBody = new FormData();
  turnstileBody.append("secret", TURNSTILE_SECRET_KEY);
  turnstileBody.append("response", token);
  const ip = ips(req);

  if (ip) {
    turnstileBody.append("remoteip", ip);
  }

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    body: turnstileBody,
    method: "POST",
  });

  const outcome = await result.json();

  return outcome.success;
}

function badRequest(reason = "Bad input", status?: number) {
  return new Response(JSON.stringify({ error: reason }), {
    headers: {
      ...HEADERS,
    },
    status: status ?? 400,
  });
}

function okRequest() {
  return new Response(undefined, {
    headers: {
      ...HEADERS,
    },
    status: 200,
  });
}

function serverError(reason = "Something went wrong") {
  return new Response(JSON.stringify({ error: reason }), {
    headers: {
      ...HEADERS,
    },
    status: 500,
  });
}

const illegalRe = /[\/\?<>\\:\*\|"]/g;
// deno-lint-ignore no-control-regex
const controlRe = /[\x00-\x1f\x80-\x9f]/g;
const reservedRe = /^\.+$/;
const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
const windowsTrailingRe = /[\. ]+$/;

function sanitize(input: string) {
  if (typeof input !== "string") {
    throw new Error("Input must be string");
  }

  const sanitized = input
    .replace(illegalRe, "")
    .replace(controlRe, "")
    .replace(reservedRe, "")
    .replace(windowsReservedRe, "")
    .replace(windowsTrailingRe, "");

  return sanitized;
}

function extractBase64(input: string) {
  try {
    const split = input.split("data:audio/ogg; codecs=opus;base64,");

    if (split.length < 2) {
      return false;
    }

    const content = split[1];
    const decoded = decodeBase64(content);
    return decoded;
  } catch {
    return false;
  }
}

function extractName(input: string) {
  if (input?.length > 0 && input?.length < 50) {
    return sanitize(input);
  } else {
    return false;
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return okRequest();
  }

  if (req.method !== "POST") {
    return badRequest(undefined, 405);
  }

  try {
    const body = await req.json();
    const { base64 } = body;
    const token = body["cf-turnstile-response"];
    const valid = await turnstileVerify(token, req);
    const content = extractBase64(base64);
    const name = extractName(body.name);
    const timestamp = Date.now();

    if (valid && content && name) {
      const supabaseClient = createClient(
        SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY,
      );

      const { error: uploadError, data: uploadData } = await supabaseClient
        .storage
        .from("recordings")
        .upload(`${name}-${timestamp}.ogg`, content.buffer, {
          contentType: "audio/ogg",
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error(uploadError);

        return serverError("Something went wrong");
      }

      const { data: signedUrlData, error: signedUrlError } =
        await supabaseClient.storage
          .from("recordings")
          .createSignedUrl(uploadData.path, 60 * 60 * 24);

      if (signedUrlError) {
        console.error("Failed to create signed url", { signedUrlError });
      }

      await sendEmail(name, signedUrlData?.signedUrl);
      return okRequest();
    } else {
      return badRequest("Form verification failed");
    }
  } catch (error) {
    console.error(error);

    return serverError();
  }
});
