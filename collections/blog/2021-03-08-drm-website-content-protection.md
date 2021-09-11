---
title: كيفية حماية المحتويات المدفوعة للمواقع
path: drm-website-content-protection
date: 2021-03-08
description: حماية الوسائط المتعددة على منصات البث زي Netflix حكاية روشة, تعالوا
  نشوف بتتعمل ازاي. 👀
lang: ar
translation: https://dev.to/kl13nt/how-to-protect-website-copyrighted-content-pck
category: امن المعلومات
---

_البوست ده كان اجابة على سؤال على احدى جروبات فيسبوك_. السؤال الاصلي كان "هل يوجد اى طريقة لحماية فيديو على موقع ويب؟".

_This article is available in English on [dev.to](https://dev.to/kl13nt/how-to-protect-website-copyrighted-content-pck)_.

> الحقيقة ان مهما دورنا على اننا نخلي المحتوى ده authenticated بس او نحط scripts على الصفحات تمنع المستخدم انه يعمل بيها حاجة الا ان كل الطرق دي وحتى الطرق اللي هذكرها هنا مش فعّالة 100%, لكن الهدف في العموم مش بيكون المنع 100%, وانما تقليل نسبة السرقة لنسبة تقدر تتعامل معاها يدوياً.

الحاجات اللي هتكلم عليهم النهاردة هما الـ _DRM_ والـ _Forensic Watermarking_.

## Digital Rights Management (DRM)

دي بتبقى عبارة عن تشفير لحماية _حقوق النشر_. بتشفر الملفات اللي عايز تحميها وبيبقى في مفتاح للتشفير ده. الملفات لوحدها وهي متشفرة مفيش حد يقدر يفكها, بينما لو المستخدم authorized بتقدر تبعتله المفتاح ده والمتصفح بيقوم بعملية فك التشفير عن طريق API اسمه Encrypted Media Extensions API.

يعني م الاخر لو معاكش license اللي هو ترخيص من الشركة باستعمال داتا دي (وبيتمثل الترخيص في مفتاح فك التشفير) يسمحلك تشغل الفيديو مش هتقدر تشغله. الموضوع ده بيستخدمه Netflix و Spotify وغيرهم. لكن الموضوع مش بالسهولة دي لإن كل platform وكل browser بيدعم نوع معين من الـ DRM. وبالتالي انت محتاج تعمل كذا نسخة من الفيديو الاصلي, نسخة لكل نوع DRM المتصفحات اللي انت بتدعمها بيستعملوه.

> In general, Widevine is supported by Firefox, Chrome, and Opera, PlayReady is supported by IE/Edge, and FairPlay is supported by Safari.

ولكن برضه بمجرد ان المستخدم يبقى ليه حق الوصول للداتا دي هيقدر يعيد نشرها من غير التشفير عادي لإن فك التشفير بيحصل على جهاز المستخدم, وبالتالي بيقدر يوصل للفيديو بعد التشفير من غير مشاكل. عشان كده بنستعمل معاه حاجة اسمها Forensic Watermarking.

## Watermarking

الـ Watermarking في العموم بيبقى عبارة عن اضافة معلومات معينة (او اخفائها) في الملفات. زي مثلاً اني اضيف اسم الشركة اللي عملت الفيديو وهكذا. النوع الاقوى والادق في الحالة بتاعتنا اسمه Forensic Watermarking.

## Forensic Watermarking

دي بتبقى عبارة عن اضافة بيانات المستخدم للفيديو نفسه. يعني لو انا دخلت على موقع زي Spotify وسمعت اغنية, الاغنية دي هيبقى متضاف للـ binary data بتاعتها شوية تفاصيل عنّي زي اسمي واسم المستخدم بتاعي وهكذا.

وبالتالي لو المستخدم ده خد الفيديو او الاغنية مثلاً بعد الفك وراح نشره ف موقع تاني بتقدر تاخد الفيديو اللي اتنشر ده وتشوف المعلومات بتاعت المستخدم ده بحيث تعرف مين بالظبط اللي نشر الفيديو, وبناء عليه وتقدر يا اما تقفل اكونت المستخدم ده او تاخد اجراءات قانونية ضده.

وبعد ده كله في الاخر برضه مش هتقدر تمنع 100% من المستخدمين. المستخدم يقدر يسجل الشاشة مثلاً وهو بيتفرج, وانت مستحيل تعرف حاجة زي دي. ولو عملت برنامج client يتحمل بيراقب المستخدم والبرامج اللي بيفتحها (ودي حاجة محدش هيقبل بيها) فساعتها هيبقى في طرق تانية المستخدم يقدر يتحايل بيها على القانون برضه.

الموضوع عموماً مُعقد شوية وبيدخل في امن المعلومات اكتر ما هو ويب ديفلوبمنت. لو استفادتوا من البوست الصغير ده متنسوش الشير عشان غيركوا يستفيد, ولو عندكوا اقتراحات تقدروا تبعتوهالي ف اي مكان 😄

متنسوش كمان تشوفوا الـ community بتاعتنا [Valarium](https://valarium.netlify.app). 👀

مصادر:

- [How Netflix Protect Their Content](https://medium.com/pallycon/how-netflix-protects-contents-part-1-a40508ed0001)
- [Encrypted Media Extensions API](https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API)
- [DRM and authentication](https://developer.mozilla.org/en-US/docs/Plugins/Flash_to_HTML5/Video/DRM_and_authentication)
- [DRM (wiki)](https://en.wikipedia.org/wiki/Digital_rights_management)
