---
path: "/blog/optional-chaining-operator-ar/"
date: "2019-08-31"
title: "ازاي و ليه تستخدم الـ Optional Chaining Operator"
description: "النهاردة هنتعلم ازاي نستخدم الـ optional chaining operator عشان نتخلص من ايرورز الابوجكتس و الif الطويلة."
introduction: "عمرك حاولت تجيب قيمة من اعماق اوبجكت بس اتفاجئت ان الكود بيديلك ايرور بسبب ان قيمة في النص بتطلع Undefined؟ في المقالة دي هنتعلم ازاي منقعش في الغلط ده باستخدام الـ optional chaining operator."
image: OptionalChainingOperator.png
author: "نبيل ثروت"
length: 880
lang: "ar"
ogImageName: "OptionalChainingOperator"
ogImageExtension: "png"
tags: ["JavaScript", "Babel", "ESNext", "Arabic"]
---

عمرك حاولت تجيب قيمة من اعماق اوبجكت بس اتفاجئت ان الكود بيديلك ايرور بسبب ان قيمة في النص بتطلع Undefined؟ متقلقش تاني, في المقالة دي هنتعلم ازاي منقعش في الغلط ده باستخدام الـ optional chaining operator. قبل ما نخش في شرحة عايزين نشرح يعني ايه chaining اصلاً و ازاي بيتعمل في الجافاسكربت.

## Chaining | التسلسل
تخيل معايا ان معانا `Object` جواه `Object` جواه `Object`. يعني 3 مستويات من العمق. احنا عايزين نجيب القيمة اللي اسمها `value` من جوا اعمق اوبجكت من دول. الحل الطبيعي ان عندنا طريقتين
<div dir="ltr" align="left">

```js
const obj = {
  foo: {
    bar: {
      value: 42,
    },
  },
};

const value = obj.foo.bar.value;
```

</div>

طيب ولنفرض دلوقتي ان `foo` مش موجود اصلاً. اللي هيحصل ان البرنامج هيعمل ايرور و هيقفل في وشنا, و احنا طبعاً مش عايزين حاجه زي دي تحصل لما الكود يبقى شغال على جهاز المستخدم في الـ`production`. طيب ايه الحل؟ الحل حالياً اننا نعمل if كتير عشان نتأكد ان كل عنصر من دول موجود:

<div dir="ltr" align="left">

```js
const obj = {
  foo: {
    bar: {
      value: '',
    },
  },
};

const length =
  (obj
      ? (obj.foo
        ? (obj.foo.bar
          ? (obj.foo.bar.value
            ? obj.foo.bar.value.length
            : undefined)
          : undefined)
        : undefined)
      : undefined);

او عن طريق ال if العادية

let value;

if(obj && obj.foo && obj.foo.bar && obj.foo.bar.value)
  value = obj.foo.bar.value.length;

```
</div>

طيب ماشي احنا كده اتأكدنا اذا كانت القيمة موجودة اصلاً ولا لا. بس في مشكلة كمان: احنا دلوقتي بنجيب طول `string` اللي هي `value`. طيب لو طولها اصلاً ب `0`؟ هيحصل مشكلة ان جافاسكربت هتحول القيمة الصفرية السالبة دي الى `false` و بالتالي حتى مع وجود القيمة هيفضل دايماً شرط ال`if` ميتحققش لان كده هيرجعله `false` من `obj.foo.bar.value` اللي هتكون قيمتها ب `''` و بتتحول ل `false`. وبالتالي لازم نعمل مثلاً فنكشن تتأكد اذا كان المتغير ده `string` او لا و طولها و هكذا. او ع الاقل الشرط هيبقى معقد اكتر و احنا مش عايزين كده. طريق نعمل ايه؟


## ECMAScript TC39 Proposals | اقتراحات لجنة تطوير ايكماسكربت
جافاسكربت اللي موجودة في المتصفحات مش بتبقى لوحدها كده و كل متصفح بيعمل اللي عايزه, لا. جافاسكربت نفسها عبارة عن تطبيق عملي ل`standard` معروف باسم `ECMAScript` و ده اللي بيتحكم في اللغه و تطويرها. المتحكم في ال `standard` ده هي منظمة `Ecma International` و اللي بدورها بتقوم بحماية و تطوير لغات كتيرة تانية. ايكماسكربت معروفة كا كود باسم `ecma-262` واللي تقدروا تقروه من خلال اللينك ده: [Ecma International: Ecma-262 Standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm) وتقدروا تعرفوا الاضافات اللي هما شغالين عليها من هنا: [TC39.es](https://tc39.es/)

كل اضافة جديدة للغة بتعدي على مراحل:
1. Stage-0 (Strawperson): دي بيكونوا لسه مبصوش في الاقتراح
2. Stage-1 (Proposal): بدأوا يفكروا في الاضافة و بيتناقشوا مع الناس في ازاي ممكن نعمل الاضافة دي
3. Stage-2 (Draft): هنا بيبدأوا تطوير الاضافة و بيكون من المتوقع انها تضاف للغة في وقت قصير
4. Stage-3 (Candidate): وصلت مرحلة من التطوير اللي فيها نقدر نشتغل بيها بس محتاجه شوية تعديلات صغيرة و لازم قبل اي خطوه تانية يتم تجربة الاضافة دي و عمل اختبارات عليها
5. Stage-4 (Finished): و هنا بتكون الاضافة خلصت و من المتوقع ان المتصفحات تبدأ في دعم الاضافة دي في اقرب وقت.

طيب بعد ما عرفنا كل ده, نبدأ نعرف بقى ايه هو معامل التسلسل الاختياري.
## Optional Chaining Operator | معامل التسلسل الاختياري (?.)
معامل التسلسل ده طريقة جديدة مقترحه هتسهل علينا مشكلة اننا نجيب قيمة من اعماق اوبجكت كبير زي اللي شوفناه فوق ده. الاقتراح ده حالياً في المرحلة التالتة (Stage-3) يعني من المتوقع انه هتنزل للمتصفحات في المستقبل. شكلة عامل ازاي؟ كده:

<div dir="ltr" align="left">

```js
//بيعمل تشيك الاول على القيمة قبل ما ياخدها في كل مرحلة
const length = obj?.foo?.bar?.value?.length;
```

</div>

طيب هو كده بيشتغل ازاي؟ بعد ما بتضيف علامة الاستفهام بعد اسم القيمة, محرك الجافاسكربت بيشوف هل القيمة اللي قبل العلامة موجوده ولا لا. لو موجوده هيخش على اللي بعدها, لو مش موجوده هيرجع `undefined` بدل ما يرجعلك ايرور `Uncaught TypeError: cannot read property # of undefined`. و بالتالي البرنامج هيفضل شغال عادي و بدل ال`if` الغريبه و المعقدة اللي شوفناها فوق دي, التحقق بتاعنا و الشرط هيبقى على حاجه واحدة بس:
<div dir="ltr" align="left">

```js
//بيعمل تشيك الاول على القيمة قبل ما ياخدها في كل مرحلة
const length = obj?.foo?.bar?.value?.length;
if(length !== undefined) //do something
```
</div>

وبالتالي سهلنا على نفسنا معاناة كبيرة جداً.

## ازاي تضيف معامل التسلسل الاختياري الى المشروع بتاعك
اولاً هتحتاج [*Babel*](https://babeljs.io/) الغني عن التعريف و طبعاً [*NPM*](https://www.npmjs.com/) او [*Yarn*](https://yarnpkg.com/).

الاول هتحتاج تسطب *Babel*:
<div dir="ltr" align="left">

```js
npm install --save-dev @babel/core @babel/cli

او

yarn add -D @babel/core @babel/cli
```
</div>

بعد كده هتحتاج تسطب المعامل نفسه:
<div dir="ltr" align="left">

```js
npm install --save-dev @babel/plugin-proposal-optional-chaining

او

yarn add -D @babel/plugin-proposal-optional-chaining
```
</div>

بعد كده تقدر تظبط المشروع بتاعك انه يستخدم *Babel* عن طريق انك تعمل فايل اسمه `.babelrc` و تكتب جواه:

<div dir="ltr" align="left">

```js
{
  "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```
</div>

طريق التسطيب المختلفة لـ *Babel* هتلاقوها هنا: [Babel Setup](https://babeljs.io/setup) و طرق تسطيب المعامل و معلومات اكتر عنه من هنا: [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)