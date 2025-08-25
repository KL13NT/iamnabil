---
date: 2022-12-02
cover:
  path: https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&fp-y=0
  thumb: https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&fp-x=0.5
  credit: Guillaume TECHER
external: false
title: Making a Build System Using NPM Scripts
description: Explore how npm scripts can be used in various ways to achieve complex build systems.
---

> This article was written on my phone. Do not expect these scripts to actually
> work except for the last set.

npm scripts are a way to execute multiple npm modules and system commands
through npm. You may already be familiar with `npm run`, which is
the interface we use with npm to execute those commands, and the interface we'll
use to run our build system by the end of this article.

From my [Release Management for Modern Software Development][1] article:

> A build system is a set of transformations that transform a source into an
> artefact. It may be a simple command that starts up a compiler, a script to
> generate pdf from text files, or even a GUI solution that builds your project
> and generates a binary.

Our build system will be composed of the following steps:

- Linting
- Type-checking
- Unit testing
- Snapshot testing
- E2E testing
- Building
- Generating static content from build
- Pushing built assets to a live deployment

# The Basics

npm scripts are stored in the `package.json` under "scripts". Each key in the
"scripts" object corresponds to a script that can execute multiple commands.
They allow us to execute system commands, user executables, and executable
nodejs command-line scripts.

The following is a simple `package.json` with a single command that prints
"Hello, world!" to the terminal.

```json
{
	"scripts": {
		"echo": "echo \"Hello, world!\""
	}
}
```

Notice I escaped the quotation marks. This is to avoid operating system
differences. Windows handles chunks of text using double quotes, while most
Linux distributions can handle them using single quotes.

Running `npm run echo` in a terminal window should execute the `echo` command I
specified then print "Hello, world!" to that terminal window.

# Exit Codes

Running processes return a code to the parent process or operating system known
as "exit code" or "return code" upon termination. This code generally helps the
operating system and other scripts decide what to do.

For example, on POSIX systems a process exit code `0` is a graceful termination.
Meanwhile, an exit code between 1 to 255 would mean the process terminated
unexpectedly. In case a code is not returned the code of the previous command is
used.

# Common Chaining Operators

Terminal commands allow us to use several special operators to do more than run a
single command. The `&&` (and) operator allows us to execute multiple commands
in series provided they all return exit code 0 or nothing at all. The `||` (or)
operator allows us to run multiple commands in series conditionally, running
only each command iff the preceding command fails (returns exit code other than
0).

For example, `echo \"hello\" && play` will execute the `echo` and if that
succeeds will execute the `play`. If the `echo` fails then the whole script will
terminate and the initiating process will terminate with code other than 0.

On the other hand, `invalid_command || echo "\hello"\` will execute the echo iff
the `invalid_command` command fails.

There are tons of operators we can use in our npm scripts but I won’t go through
them for the sake of simplicity. I will however use a utility called npm-run-all
that will help us make our build system with simpler commands.

# Initial Build Scripts

The simplest version of our build system is a collection of commands that
execute in series using the `&&` operator. We'll also depend on executing npm
scripts through other npm scripts. Let's assume these commands actually work.

```json
{
	"build": "npm run checks && npm run test && npm run transpile && npm run css && npm run generate && npm run deploy",
	"transpile": "babel",
	"css": "postcss",
	"test": "npm run unit && npm run snap && npm run e2e",
	"checks": "npm run lint && npm run typecheck",
	"typecheck": "tsc --noEmit",
	"lint": "eslint",
	"generate": "node scripts/generate.js",
	"deploy": "node scripts/deploy.js",
	"e2e": "cypress",
	"unit": "jest",
	"snap": "jest"
}
```

In this example, we assume we have a few JS script files in the `/scripts`
directory. Our `build` script runs all the checks and build steps we need. If any
of these commands fails the whole chain fails and the build is terminated.

To execute this build system we would need to either create a script that
combines multiple commands `npm run checks && npm run test && npm run build && npm run generate && npm run deploy` like I did in `build` or run this whole line by hand
every time. Maybe save it as an alias. This is difficult to read and requires a
lot of repeatedly nested `npm run`. We can change that with `npm-run-all` though!

# npm-run-all

```diff
{
- "build": "npm run checks && npm run test && npm run transpile && npm run css && npm run generate && npm run deploy",
+ "build": "run-s --print-name checks test transpile css generate deploy",
- "test": "npm run unit && npm run snap && npm run e2e",
+ "test": "run-s --print-name unit snap e2e",
- "checks": "npm run lint && npm run typecheck",
+ "checks": "run-s --print-name lint typecheck",
  "transpile": "babel",
  "css": "postcss",
  "typecheck": "tsc --noEmit",
  "lint": "eslint",
  "generate": "node scripts/generate.js",
  "deploy": "node scripts/deploy.js",
  "e2e": "cypress",
  "unit": "jest",
  "snap": "jest"
  "typecheck": "tsc --noEmit",
  "lint": "eslint",
  "generate": "node scripts/generate.js",
  "deploy": "node scripts/deploy.js",
  "e2e": "cypress",
  "unit": "jest",
  "snap": "jest",
}
```

In this example, we utilise the helper binary `run-s` from npm-run-all to
execute multiple commands in series without the `npm run` spam. This is much
easier to read and provides more fine-grained control over our scripts. The
`--print-name` flag prints the name of the script before it’s run so we can
differentiate the output logs better. Its shorthand is `-n`.

# Parallelised Scripts

`run-p` is another utility which, as you might have already guessed, executes
scripts in parallel. Each script in its own child-process. `run-p` is useful for
development scenarios where you want to run multiple servers with a single
command (e.g., local dev database and a nodejs dev server), and can used to
parallelise testing and pre-build checks to improve our build times. So, let’s
parallelise our testing scripts!

```diff
{
- "test": "run-s -n unit snap e2e",
+ "test": "run-p -n --aggregate-output unit snap e2e",
}
```

I supplied the `--aggregate-output` flag to avoid interleaving the output of
every parallel command. This delays the printing of each command’s output until
it has finished so we can have comprehensible logs.

# Pre And Post Scripts

pre- and post- scripts are npm scripts that execute before and after another
script with a matching name. They allow us to simplify our commands and give
them more semantic meaning. Npm executes these scripts on its own once we
execute a command with matching pre- and post- scripts. You can have either or
both at the same time, npm won't mind. This example from the npm docs sums it up
pretty well:

```json
{
	"scripts": {
		"precompress": "{{ executes BEFORE the `compress` script }}",
		"compress": "{{ run command to compress files }}",
		"postcompress": "{{ executes AFTER `compress` script }}"
	}
}
```

Applying this to the build scripts we end up with the following:

```diff
{
+ "prebuild": "run-s -n checks test",
- "build": "run-s -n checks test transpile css generate deploy",
+ "build": "run-s -n babel & css",
+ "postbuild": "run-s -n generate deploy",
}
```

We can take this build system one step further and utilise glob-like execution.

# npm-run-all glob-like execution

We can use [glob][2]-like patterns to specify npm-scripts. The difference is
one; the separator is `:` instead of `/`. We call scripts with the `:` separator
subcommands. A `test:e2e` script can be referred to as subcommand `e2e` of
`test`. `npm-run-all` can execute all subcommands of a given command through the
`*` glob operator. For example, `run-s test:*` executes all subcommands of
`test` which may include `test:e2e` and `test:unit`.

We’ll use it to structure our commands into a neater flow:

```diff
{
- "prebuild": "run-s -n checks test",
+ "prebuild": "run-s -n check:* && run-p -n --aggregate-output test:*",
  "build": "run-s transpile css",
  "postbuild": "run-s -n generate deploy",
- "test": "run-p -n --aggregate-output unit snap e2e",
- "checks": "run-s -n lint typecheck",
- "typecheck": "tsc --noEmit",
  "transpile": "babel",
  "css": "postcss",
+ "check:types": "tsc --noEmit",
- "lint": "eslint",
+ "check:lint": "eslint",
- "e2e": "cypress",
- "unit": "jest",
- "snap": "jest",
+ "test:e2e": "cypress",
+ "test:unit": "jest",
+ "test:snap": "jest",
  "generate": "node scripts/generate.js",
  "deploy": "node scripts/deploy.js",
}
```

I’ve created a simple, executable set of these scripts that you can run on your
system without having to install any dependencies. All these commands do is
output their names, but this should be enough to give you a general idea of how
a real build system like this will work at runtime. Just make sure to initialize
a new project with npm and add these scripts to the `package.json`.

```json
"scripts": {
	"prebuild": "run-s -n check:* && run-p -n --aggregate-output test:*",
	"build": "run-s transpile css",
	"transpile": "echo transpile",
	"css": "echo css",
	"postbuild": "run-s -n generate deploy",
	"check:types": "echo tsc",
	"check:lint": "echo eslint",
	"test:e2e": "echo e2e",
	"test:unit": "echo unit",
	"test:snap": "echo snap",
	"generate": "echo generate",
	"deploy": "echo deploy"
}
```

The following is the output on my Windows 10 machine. By default, npm prints
each running command before executing it. You can hide these npm logs using the
`-s` or `--silent` flag to ignore some of the spam that may be output.

```bash
λ npm run build

> project@0.1.0 prebuild
> run-s -n -s check:* && run-p -n --aggregate-output -s test:*

> project@0.1.0 check:types C:\Workspace\Projects\project\package.json
> echo tsc

tsc

> project@0.1.0 check:lint C:\Workspace\Projects\project\package.json
> echo eslint

eslint

> project@0.1.0 test:e2e C:\Workspace\Projects\project\package.json
> echo e2e

e2e

> project@0.1.0 test:snap C:\Workspace\Projects\project\package.json
> echo snap

snap

> project@0.1.0 test:unit C:\Workspace\Projects\project\package.json
> echo unit

unit

> project@0.1.0 build
> run-s -n -s transpile css

build

> project@0.1.0 transpile C:\Workspace\Projects\project\package.json
> echo transpile

transpile

> project@0.1.0 css C:\Workspace\Projects\project\package.json
> echo css

css

> project@0.1.0 postbuild
> run-s -n -s generate deploy

> project@0.1.0 generate C:\Workspace\Projects\project\package.json
> echo generate

generate

> project@0.1.0 deploy C:\Workspace\Projects\project\package.json
> echo deploy

deploy
```

# Conclusion

This is just one way of doing things. You can go crazy with this kind of stuff,
it’s literally a bunch of terminal commands! But for anything more complicated I
resort to (and recommend) task runners, bundlers, and toolsets. They allow a lot
more flexibility, options, and plugins, and can integrate much better with tools
that don’t have CLIs.

You’ve reached the end! What a journey, amirite? Thanks for reading!

![amiright
gif](https://media4.giphy.com/media/wM4dxCgSptsVWMwFZm/giphy.gif?cid=ecf05e47nmaruvnrinj59h1xabp6wtj5ehe83ddx2847nffy&rid=giphy.gif&ct=g)

[1]: https://www.freecodecamp.org/news/release-management-modern-software-development/
[2]: https://en.wikipedia.org/wiki/Glob_(programming)
