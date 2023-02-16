---
title: Boosting My Productivity Using Git Worktrees
external: false
date: 2023-02-16
cover:
  path: https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop
  credit: Jeremy Bishop
description: "Git Worktrees are a way to manage multiple git working trees at
  the same time without the hassle of git stash. "
---
I usuaully work on multiple features in parallel due to my multi-tasking brain. This forces me to stash a lot of changes, work on unrelated features, and completely forget about my stashed changes in the process. I tried to set a reminder using git hooks but they were too much of a hassle. And tried using terminal aliases that remind me to check my stashes but my brain would just dismiss the reminders altogether. I had to look for an alternative. 

## Git in a nutshell

Git stores information as a list of *snapshots*. A *snapshot* is a stored version of the repository at a given point in time. Each commit represents a snapshot in the git world. 

The working tree is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify. This is the place in which you do your work before staging and committing.

## Git Work Trees

Git Worktrees are a way to manage multiple git working trees at the same time without the hassle of git stash. They allow us to work on branches as sub-directories to a repository, completely alleviating the pain of stashing changes when an urgent, unrelated change is required.

The _worktree_ module allows you to checkout multiple versions of the project in separate sub-directories in the same root directory of the repository. 

## Creating a worktree

Creating a worktree is as simple as running `git worktree add <directory-name> <branch-name>` for existing branches or `git worktree add <directory-name> -b <branch-name>` to create a new branch.