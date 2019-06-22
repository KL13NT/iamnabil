---
path: "/post/algorithm-complexity-big-bang/"
date: "2019-06-17"
title: "Algorithm complexity and the Big Bang(n)"
description: "Ever wondered what O(n) means? I'll take you through a tiny journey to learn more about algorithm complexity and the Big O Notation."
image: bigONotation.jpg
author: "Nabil Tharwat"
length: 2700
lang: "en"
ogImageName: "bigONotation"
ogImageExtension: "jpg"
---

Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm. I'll cover some complexities that are widely seen.

## O(1) CONSTANT 
This type of algorithms will always execute in the same time (or space) regardless of the size of the input data set. For instance `if(x % 2 === 1) return 'odd';`. 

> <span>This is not always the case though.  </span>

## O(n) LINEAR 
Describes an algorithm whose time required will grow linearly and in direct proportion to the size of the input data set. An example is finding the largest item on an unsorted array. The function will always need to go over all elements before it returns for sure that an element is the largest. 

## O(n<sup>2</sup>) QUADRATIC
Represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(n^3), O(n^4) etc. An example is finding a duplicated element in an array. Bubble Sort is also an example since it involves nested loops.

## O(2<sup>n</sup>) EXPONENTIAL 
Denotes that an algorithm calculations double with each additon to the input data set. For example, finding the "Power Set" of [a, b] yields [ , a, b, ab]. Now use [a, b, c]. This will yield the power set of [a, b] and the power set of [a, b] with c appended at the end which is P[a, b] * c = [ , a, b, c, ab, ac, bc, abc]. Meaning that the length of the resulting set is doubled every time you add 1 to the input length. 

## O(log n) LOGARITHMIC 
This is one of the most efficient algorithms to exist. An example of it is "Binary Search". 

> <span>In computer science, binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.<br></span>&#151 Wikipedia

## O(n log n) LINEARITHMIC 
This one is slightly slower than linear O(N) but is more efficient than O(n^2). An example of it is "Merge Sort". Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

![GIF illustrating merge sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)<span class="image-description">A simple illustration of Merge Sort</span>

## O(n!) FACTORIAL 
You want to stay away from this. Imagine a normal mathematical factorial of 5!. 
```
5! = 120 
6! = 720
7! = 5040
8! = 40320 
9! = 362880
10! = 3,628,800
```

That grew a lot! Factorial algorithms output data that **grows** with a very steep upwards curve at tiny changes in its input. 

## O(n<sup>c</sup>) where c > 1; POLYNOMIAL 
This one is basically any algorithm that involves a running time bigger than O(n^1) such as O(n^2) QUADRATIC.

## Final notes
This was a quick peek at the different types of algorithm complexities. Those values are not static. Every algorithm could either range between different complexities or take a single one. Visiting the Wikipedia page for each of those you'll find some more info about that algorithm complexity.