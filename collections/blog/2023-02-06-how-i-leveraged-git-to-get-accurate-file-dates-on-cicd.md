---
title: How I Leveraged Git to Get Accurate File Dates on CI/CD
cover:
  path: https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFRpbWV8ZW58MHx8MHx8&auto=format&fit=crop
  credit: Djim Loic
  thumb: https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFRpbWV8ZW58MHx8MHx8&auto=format&fit=crop
date: 2023-02-06
description: 'Git does not store filesystem metadata which causes Hive to lose file dates.'
external: false
---

Hive is a courseware management tool I developed a couple weeks back with the intention of [streamlining courseware production and publishing](https://github.com/KL13NT/courseware-as-code-action). 

## Background

Each lecture in Hive has created_at and last_updated date values. These values were initially hard-written in the lecture metadata by courseware maintainers but were removed from metadata and acquired through the node fs.stat API for easier maintenance. 

The point of the stat method is to read filesystem metadata for specified files, including the mentioned date values. It *worked™* until it didn’t.

## The problem

Hive uses GitHub Actions (CI/CD) to redeploy output assets whenever lectures course content changes. This is where the problem showed up.

I **had previously tested the fs.stat API locally with files that were old and then updated in a more recent date and it worked. But things are different in a CI/CD throwaway virtual machine world.

When a build is started the contents of a course’s repository are checked out using Git on a virtual machine, and that's exactly the problem. 

Git does not preserve filesystem metadata to minimize the repository storage footprint and keep things fast. It generates that metadata on checkout, and dates are set to the current timestamp. Created, last updated, and last access time are all set to the same timestamp at the moment of checkout, which is problematic for Hive.

## The solution

I came up with the idea of using the git commit log as my metadata source of truth. The created_at date would be the timestamp of the first commit of a file, and the last_updated would be the last commit with changes in said file. 

But this comes with its own set of challenges. Reading, formatting, and mapping a git log to a suitable representation for each file could take an exponential amount of time the bigger the log gets since string operations are slow in JavaScript. Therefore executing the git log command by hand in a subprocesss using its output wasn't really feasible. 

I decided to use something native and discovered nodegit. nodegit is an npm package with native bindings for libgit2, a pure C implementation of core Git methods that powers GitLab, GitHub, and a number of other popular solutions. It executes git commands directly as functions which leverage super fast native data structures and libraries.  

This allowed me to easily traverse the git log for each file with almost no processing overhead and provides an easy to maintain interface. It now works like a charm thanks to the awesome effort the nodegit and libgit2 team have put into these libraries. 

You can find the fix in this [revision](https://github.com/KL13NT/courseware-as-code-template/blob/1e406ef3c670ad0d1cca41af43a3a3db874a412d/src/lib/api.ts#L27).

I have another challenge I'm facing but that's a story for another blog.
