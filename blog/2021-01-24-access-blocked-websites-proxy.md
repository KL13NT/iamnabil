---
title: كيفية الدخول على المواقع المحجوبة
path: access-blocked-websites-proxy
date: 2021-01-24
description: ناس كتير (من ضمنهم انا) بيشتكوا من موضوع ان مواقع زي Medium مقفوله
  فبلادهم, المقالة دي فيها حل ممكن.
lang: ar
category: tutorial
---
صباح الفل 😀

ناس كتير (من ضمنهم انا) بيشتكوا من موضوع ان مواقع زي Medium مقفوله فبلادهم, وكان في هاك في الاول اننا نحط نقطة في اخر الـ domain وكان بيفتح. الطريقة دي معادتش بتشتغل معايا, ويمكن بتشتغل مع DNS محددين فقط. 

لقيت طريقة تانية خفيفه كده وسهلة في التعامل بتفتح الموقع اوتوماتيك. الطريقة دي هي الـ site-based proxy. 

# ايه هو الـ Proxy؟

للي ميعرفش, الـ proxy عموماً ده بيبقى جهاز\سيرفر في بلد تانية بدل ما تروح للموقع الاساسي على طول بتقوم رايح على البروكسي وتديله البيانات اللي انت عايزها وهو بيعمل forward للريكويست. بمعنى انك لو في مصر وحاولت تخش على Medium من خلال proxy في المانيا مثلاً الحكومة هتشوف انك بتكونكت على حاجة في المانيا وبالتالي مش هيمنعوا الريكويست من انها تعدي. وكذلك Medium هيشوفوا انك جاي من المانيا. (شرح مبسط جداً والحقيقة معقدة اكتر شوية)

# FoxyProxy Standard
الطريقة بقى عن طريق addon للمتصفحات اسمها FoxyProxy Standard, الاكستنشن دي بقالها في السوق سنين طويلة, وناس كتير بيشكروا فيها. 
