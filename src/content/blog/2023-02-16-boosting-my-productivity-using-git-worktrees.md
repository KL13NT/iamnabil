---
title: Using Git Worktrees to Boost My Productivity
external: false
date: 2023-02-16
cover:
  path: https://unsplash.com/photos/uj3hvdfQujI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cm9ja2V0fGVufDB8fHx8MTcyNjA0OTQ3OHww&force=true&auto=format&fit=crop
  credit: SpaceX
description: 'Git Worktrees are a way to manage multiple git working trees at
  the same time without the hassle of git stash. '
---

I usually work on multiple features in parallel due to my multi-tasking brain. This forces me to stash a lot of changes, work on unrelated features, and completely forget about my stashed changes in the process. I tried to set a reminder using git hooks but they were too much of a hassle. And tried using terminal aliases that remind me to check my stashes but my brain would just dismiss the reminders altogether. I had to look for an alternative.

## Git in a nutshell

Git stores information as a list of _snapshots_. A _snapshot_ is a stored version of the repository at a given point in time. Each commit represents a snapshot in the git world.

The working tree is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify. This is the place in which you do your work before staging and committing.

## Git Work Trees

Git Worktrees are a way to manage multiple git working trees at the same time without the hassle of git stash. They allow us to work on branches as sub-directories to a repository, completely alleviating the pain of stashing changes when an urgent, unrelated change is required.

The _worktree_ module allows you to checkout multiple versions of the project in separate sub-directories in the same root directory of the repository. Take the following diagram for example on the traditional approach:

![Branches based approach](@/assets/images/branches_approach.png)

In this example I have two stashed changes (which could be hundreds of lines of code) and 3 branches, _feature-1_, _feature-2_, and _fix-1_. By the time I finish working on the _fix-1_ branch and push it my brain would've jumped to the next task and completely forgot about the previous features until I'm reminded of them again.

Instead, with worktrees, it looks like this:

![Worktree based approach](@/assets/images/worktree_approach.png)

With worktrees the directory structure contains each worktree (branch) in a separate directory. This allows me to seamlessly switch from a branch to another simply by changing the directory I'm currently working in. My usual workflow with this approach consists of the following:

1. Open a terminal in the project's directory
2. Create a worktree with a branch name
3. `code .` to open VSCode in the worktree directory

When I want to switch from a worktree to another all I have to do is either create a different worktree using the same steps if I don't have it created already, or simply open a different directory with VSCode and start hacking away immediately.

## Creating a worktree

Creating a worktree is as simple as running `git worktree add directory-name branch-name` for existing branches or `git worktree add directory-name -b branch-name` to create a new branch.

## Deleting a worktree

After you're done working on a branch you can safely remove the worktree to stop polluting your directory structure. Simply run `git worktree remove directory-name`. This doesn't delete the underlying branches so you can safely check them out again later.

## Gotchas

Worktrees are checkouts of repository branches, therefore untracked files are not copied. Files like `.env` won't be copied, so make sure to copy them after creating a worktree and install dependencies if any exist.

Also note that the directories created for the worktrees will show up in `git status` logs when executed in the root repository directory. These gotchas are nothing to me compared to forgetting hours of work though.
