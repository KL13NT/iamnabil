---
title: NextJS to Astro Migration
date: 2025-08-23
---

I just pushed the final commit in my Next -> Astro migration, and let me tell you: Astro is light-years ahead of Next.

Some context: My site, [nabiltharwat.com], was initially built with Next, React, and manual logic to parse and render Markdown into HTML blog pages.

The process was tedious and unmaintainable, even with MDX. And it isn't better with Next 14/15.

Now comes in Astro with the Content Collections API, allowing me to define my markdown blog schema (with Zod!) and where those files live, and voila!

I get a full pipeline of extensible rehype-remark automatically parsing my entire content collection and optimising images referenced in my markdown files. Supports MDX super seamlessly as well.

And the cherry on top is that it gives me complete type safety and beautifully built content querying APIs.

Also, JSX? What's that? It's all native HTML, baby! (With JSX-style loops and conditional rendering as well!)

Not to mention the _much_ smaller bundle size.

Honestly, this is the most complete setup out of the box I've worked with. It perfectly connects the dots between OG static generators, Gatsby's approach, and Next's APIs. Try it out!

[nabiltharwat.com]: https://nabiltharwat.com
