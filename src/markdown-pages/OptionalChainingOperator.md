---
path: "/blog/optional-chaining-operator/"
date: "2019-08-31"
title: "Optional Chaining Operator: How and Why"
description: "In this post I'll talk about the Optional Chaining Operator and how to get rid of complex object property lookups"
image: OptionalChainingOperator.png
author: "Nabil Tharwat"
length: 880
lang: "en"
ogImageName: "OptionalChainingOperator"
ogImageExtension: "png"
tags: ["JavaScript", "Babel", "ESNext"]
---

المقالة دي موجودة باللغة العربية: [ازاي و ليه تستخدم الـ Optional Chaining Operator](/blog/optional-chaining-operator-ar/)

Have you ever expected a deeply nested property of an object to be there but was shocked when you received `Uncaught TypeError: Can't get blabla of undefined`? Worry no more! With the Optional Chaining Operator you'll never have to worry about that again.


## Chaining Issues
Let's imagine 3 deeply nested objects in each other in the following form, our goal is to get the length of the string `mystring`:

```js
const obj = {
  foo: {
    bar: {
      mystring: '',
    },
  },
};

const mystringLength = obj.foo.bar.mystring.length;
```


The problem is that sometimes we may not always know that `mystring`, `bar`, `foo`, or even `obj` actually exist. That's why we would settle for an `if` condition that may look like the following:


```js
let mystringLength;
if (object && object.foo && object.foo.bar && object.foo.bar.mystring)
  mystringLength = object.foo.bar.mystring.length;
```
or even a ternary one!

```js
const mystringLength =
  (obj
      ? (obj.foo
        ? (obj.foo.bar
          ? (obj.foo.bar.mystring
            ? obj.foo.bar.mystring.length
            : undefined)
          : undefined)
        : undefined)
      : undefined);
```

But let's study this closely. If `mystring` is an empty string, meaning that its length is `0`, putting such value in a condition will result in it being `coerced` into `false`, which will make our tiny script return `undefined` instead of actually `0`. This could be problematic in so many ways. The solution to it would be either to check for type using `typeof` or some other one. Point is: it'll be more complicated than just an `if` conditional.

## ECMAScript TC39 Proposals
`JavaScript` is an *implementation* of *ECMAScript*, the standard that *Ecma International* is responsible for. Browsers take that standard and work on it, implementing it in whatever way they want.

Each new feature of the standard goes through 5 stages:
1. Stage-0 (Strawperson)
2. Stage-1 (Proposal)
3. Stage-2 (Draft)
4. Stage-3 (Candidate)
5. Stage-4 (Finished)

You can read the full documentation for each stage in the [TC39 Process Document](https://tc39.es/process-document/).

> <span>TC39 is the committee responsible for the development of ECMAScript features.</span>

## Optional Chaining Operator
This is a new proposal for the language that's currently at Stage-3, meaning it's to be expected in modern browsers soon enough. This is what it looks like:

```js
const length = obj?.foo?.bar?.mystring?.length;
```
It works by checking the validity of the preceding expression. If it encounters a `falsy/undefined` expression it evaluates to `undefined` gracefully, saving your script from crashing because of an `Uncaught TypeError: cannot read property # of undefined`. This makes it more robust than an `if` condition.

It can also be used dynamically or with optional method calls!

```js
//Dynamic property names
const mystring = 'someObjectProperty';
const optionLength = obj?.foo?.bar?.preferences?.[optionName];

//Optional method calls
const returnedValueFromMethodCall = obj?.foo?.someMethod?.()
```

Note that in the method calls, the `()` brackets come after the `?.` operator because the operator checks the value of the expression before it.



## How to start using the Optional Chaining Operator
Currently, the operator is not yet supported in the language as it's only Stage-3. But thanks to *Babel* you can enable it in your projects and start using it right away!

First, you'll need to setup *Babel* if you haven't done so yet. Full documentation on how to set it up with different bundlers and tools here: [Babel Setup Page](https://babeljs.io/setup)

After that, you'll need to install the *Babel* operator plugin and add it to the config file:
```js
npm install --save-dev @babel/plugin-proposal-optional-chaining

OR

yarn add -D @babel/plugin-proposal-optional-chaining
```

Then in your `.babelrc` config file:

```js
{
  "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```
Read the full documentation for the plugin here: [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)


## TL;DR
You can use the `@babel/plugin-proposal-optional-chaining` plugin to use the new *Optional Chaining Operator* currently at Stage-3 to access object properties that you're unsure about their actual existence in the following way:
```js
const length = obj?.foo?.bar?.mystring?.length;
//Dynamic property names
const mystring = 'someObjectProperty';
const optionLength = obj?.foo?.bar?.preferences?.[optionName];

//Optional method calls
const returnedValueFromMethodCall = obj?.foo?.someMethod?.()
```

## Read More
Full ECMAScript 262 documentation go here: [Ecma International: Ecma-262 Standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm).

Features they're working on: [TC39 ECMAScript Proposals GitHub Tracket](https://github.com/tc39/proposals) or [TC39 Website](https://tc39.es/)

V8 official blog post: [Optional Chaining](https://v8.dev/features/optional-chaining)