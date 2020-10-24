---
path: javascript-promises
date: 2019-07-15
title: 'JavaScript Promises'
description: "JavaScript Promises is one of the most difficult objects to understand. I'll explain them in an easy manner."
introduction: "Promises can cause a lot of confusion for newbies, just like it did to me when I first encountered them. Their names may not be the most descriptive but let's get over that. "
image: Promises.png
lang: 'en'
tags: ['JavaScript', 'Babel', 'Async']
---

Promises can cause a lot of confusion for newbies, just like it did to me when I first encountered them. Their names may not be the most descriptive but let's get over that.

## Definition

A promise is an asynchronous object that has three states:

1.  pending
2.  fulfilled
3.  rejected

Each of these states represent a condition that the promise takes. It'll take on _pending_ if it's neither fulfilled nor rejected, will take _fulfilled_ when a positive value has been returned or _rejected_ when an error occurred.

Let's think of promises as messenger pigeons: you tie a message to their feet and send them to their destination. This is the _pending_ state in which the asynchronous code has been started on another thread and your program continues normally just like you would continue your chores after sending the pigeon.

Then the pigeon arrives with a response message tied to its feet, if that message is positive or allowing you to do something then it's purpose has been _fulfilled_ and you can easily _then_ handle the _resolved_ (returned) message. If the message is negative though, then it's purpose is not fulfilled but rather _rejected_ in which case there will be some kind of error that you will have to _catch_ and handle.

## Example code

Consider the following snippet

```Javascript
new Promise((resolve, reject)=>{
	setTimeout(()=>reject("Pigeon message: We're no go!"), 2000)
})
  .then(resolved=>console.log("Pigeon has come back!", resolved))
  .catch(rejection=>console.log(rejection))

console.log('Do your daily chores')

|-> "Do your daily chores"
|-> "Pigeon message: We're no go!"
```

The daily chores string got logged before the rejection message because the rejection message is _asynchronous_, meaning that while it happens code after it can run normally. In that case the _catch_ statement worked because a rejection means error that needs to be caught as I said previously.

Now consider the following instead:

```javascript
new Promise((resolve, reject)=>{
	setTimeout(()=>resolve("Pigeon message: We're good to go!"), 2000)
})
  .then(resolved=>console.log("Pigeon has come back!", resolved))
  .catch(rejection=>console.log(rejection))

console.log('Do your daily chores')

|-> "Do your daily chores"
|-> "Pigeon has come back! Pigeon message: We're good to go!"
```

This one worked and got _fulfilled_ with the resolved message "We're good to go!".

What if we don't use `then` and `catch` at all?

## Rejection without `catch`

```js
let pro = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("Pigeon message: We're no go!"), 2000)
})
console.log('Do your daily chores')

|-> "Do your daily chores"
|-> "Unhandled promise rejection Pigeon message: We're no go!"
```

In case of a rejection without a catch block the browser will throw an `Unhandled promise rejection` error. If you're developing on a _NodeJS_ environment then you really **should** use a `catch` block because NodeJS will throw an the same error with a deprecation warning telling you that in future releases of NodeJS the whole process will be stopped with exit code that's not `0`, which could be problematic if you're working on a web server.

## TL;DR

Promises are messenger pigeons, send them with a message (request) in which it'll be `pending` while you do your chores (async code doesn't block the main thread) and when it comes back the response will either be a `rejection` error for you to `catch` or a `fulfilled` request which you handle with `then`.
