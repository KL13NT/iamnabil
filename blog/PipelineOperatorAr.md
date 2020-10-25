---
path: pipeline-operator-ar
date: 2019-09-26
title: 'Pipeline Operator'
description: 'شكل الـ function calls لما بيكونوا جوا بعض وحش, النهاردة هنخلص من الشكل ده ونخلي شكلة جميل جداً'
image: pipeline.jpg
lang: 'ar'
tags: ['Babel', 'JavaScript', 'ESNext', 'Arabic']
---

تعالوا نبدأ الاول بالكود البسيط ده و من غير مقدمات:

<div dir="ltr">

```javascript
const sampleInteger = 5

const add = (x, y) => x + y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y

let result = divide(multiply(add(sampleInteger, 10), sampleInteger), 5) //15
```

</div>

كل اللي احنا بنعمله هنا اننا عندنا 3 دوال, واحدة بتجمع و واحدة بتضرب و واحدة بتقسم. كلهم بيشتغلوا على 2 parameters دايماً بيكونوا من نوع 'number'. و عندنا برضه متغير result و ثابت sampleInteger.

النتيجة result بتبقى نتيجة جمع sampleInteger زائد 10 ثم ضرب الناتج في sampleInteger ثم قسمة الناتج من العمليتين دول على 5. لو الواحد بص على سطر الكود ده هيدوخ بسبب الاقواس, انا نفسي دايخ وانا بكتبه. طيب لو حاولنا نبسطة شوية؟

<div dir="ltr">

```javascript
const sampleInteger = 5

const add = (x, y) => x + y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y

let result = divide(multiply(add(sampleInteger, 10), sampleInteger), 5) //15
```

</div>

ماشي, بقت ابسط شوية في القراية. ممكن كمان نزودها اوي و نستخدم 3 متغيرات زيادة او نعمل فنكشن رابعة:

<div dir="ltr">

```javascript
const sampleInteger = 5

const add = (x, y) => x + y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y

const generateResult = () => {
	const added = add(sampleInteger, 10)
	const multiplied = multiply(added, sampleInteger)
	const divided = divide(multiplied, 5)
	return divided
}

let result = generateResult() //15
```

</div>

طب مش كتير كده؟ هل في طريقة افضل من كده؟ اكيد في طرق تانية بس انضف طريقة انا شوفتها و بستخدمها بنفسي تقريباً في كل حاجه هي حاجه اسمها Pipeline Operator و اللي بيكون بالشكل ده:

<div dir="ltr">

```javascript
const sampleInteger = 5;

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let result =
  add(sampleInteger, 10)
  |> multiply(#, sampleInteger)
  |> divide(#, 5)

//result = 15
```

</div>

ببساطة كل اللي بيحصل هنا اننا بندخل الـreturned value من فنكشن و بنقوم معديينها في ماسورة للفنكشن اللي بعدها, فا هنا احنا بنجمع الاول بعد كده بنقوم مدخلين ناتج الجمع في ماسورة يقوم ظاهر في دالة الضرب في شكل ال # و بعد كده بناخد حاصل الضرب ندخله لدالة القسمه في شكل ال # برضه. فا ممكن هنا نعتبر ان المتغير اللي بيعدي في الماسورة اسمه # و قيمته بتتغير كل مره بيخش في فنكشن جديدة.

طيب دلوقتي ال pipeline operator مش موجود في اللغه لسه, و لسه اصلاً stage-1 يعني مش هينزل قريب خالص, فا الطريقة الوحيدة حالياً اننا نستعمله عن طريق [@babel/plugin-proposal-pipeline-operator](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator). هتلاقوا كمان في الصفحة 3 انواع منه (حالياً موجود 2 و واحد الdevelopment بتاعته اتسحبت). انا في الامثلة بستخدم `smart` لكن انتوا تقدروا تستخدموا اللي انتو عايزينه.

## ملاحظات اخيرة

لو عجبتكم المقالة انشروها و لو عايزيني اكتب عن حاجه معينه مش فاهمينها قولولي على [تويتر](https://twitter.com/Nabil_Tharwat16) او [Valarium](https://discord.gg/xrGAnTg)

## مصادر

- [صفحة موزيلا نيتورك عن الموضوع](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator)

- [نوع الـ F#](https://github.com/valtech-nyc/proposal-fsharp-pipelines/blob/master/README.md)

- [نوع Smart](https://github.com/js-choi/proposal-smart-pipelines/blob/master/readme.md)

- [صفحة Babel عشان تعرفوا ازاي تشغلوه](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator)

- [عرض تقديم الاقتراح على لجنة الـTC39](https://docs.google.com/presentation/d/1eFFRK1wLIazIuK0F6fY974OIDvvWXS890XAMB59PUBA/edit#slide=id.g34fe3d0ed9_0_12)

- [شرح تفاصيل الموضوع بالانجليزية](https://itnext.io/how-to-try-the-javascript-pipeline-operator-today-e3f75eb12cf1)
