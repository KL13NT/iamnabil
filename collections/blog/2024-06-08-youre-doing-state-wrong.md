---
title: You're doing state wrong
external: false
date: 2023-03-08
cover:
  path: https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  credit: Namroud Gorguis on Unsplash
description: 'Boolean state variables are not the answer.'
---

Implementing component state as a combination of booleans may seem like the
easiest way to do it, but let's do something different.

## Consider a music player

That can play, pause, and stop. Developers are often tempted to represent
each state in a separate boolean:

```typescript
const isStopped = createState(true)
const isPlaying = createState(false)
const isPaused = createState(false)
```

If you think about this for a moment, each of those boolean states can be either
true or false. Counting all possibilities yields 8 possible state variations, when our
component only has 3 actual states. Which means we have 5 **impossible states** in
our tiny component.

**Impossible states** are states that the component is **never** meant to be in,
usually indicating a logic error. The music player can't be playing and stopped
at the same time. It also can't be paused and playing at the same time. And so on.

Guard statements usually accompany boolean states for this reason:

```typescript
if (isStopped && !isPlaying && !isPaused) {
	// display stopped UI
} else if (!isStopped && isPlaying && !isPaused) {
	// display playing UI
} else if (!isStopped && !isPlaying && isPaused) {
	// display paused UI
}
```

And state updates turn into a repetitive set of instructions:

```typescript
// To play
setIsPlaying(true)
setIsPaused(false)
setIsStopped(false)

// To stop
setIsPlaying(false)
setIsPaused(false)
setIsStopped(true)
```

Each addition and modification later to the component needs to respect these 3
valid states, and to guard against those 5 **impossible states**.

## Hello, state machines!

Every program can be simplified into a state machine. A state machine is a
mathematical model of computation, an abstract machine that can be in exactly
one of a finite number of states at any given time.

It has a list of transitions between its defined states, and may execute
**effects** as a result of a transition.

If we convert our media player states into a state machine we end up with a
machine containing exactly 3 states (stopped, playing, and paused), and 5 transitions.

![Media player finite state machine](/images/music-player-state.jpg)

Now we can represent our simple machine in a single state that can be anything,
from a Union Type to an Enum:

```typescript
type State = 'stopped' | 'playing' | 'paused'

enum State {
	STOPPED,
	PLAYING,
	PAUSED
}
```

Now state updates can be a single, consistent instruction:

```typescript
setState('stopped')
// or
setState(State.STOPPED)
```

With this approach we completely eliminate **impossible states**, make our state
easier to control, and improve the component's readability.

## What about effects?

Remember when I said a finite machine can execute **effects** as a result of a
transition? An **effect** is anything secondary to the component's
functionality, like loading the track, submitting a form's data, etc.

Let's consider forms. A form is usually found in one of four states: idle,
submitting, success, and error. If we use boolean states we end up with 4
booleans, 16 possible combinations, and 12 **impossible states**.

Instead, let's make it a state machine too!

![Form finite state machine](/images/form-state.jpg)

The code behind this machine can be as simple as another method on the
component:

```typescript
enum State {
	IDLE /* default state */,
	SUBMITTING,
	ERROR,
	SUCCESS
}

const submit = (formData: FormData) => {
	setState(State.SUBMITTING)

	postFormUtility(formData)
		.then(() => {
			setState(State.SUCCESS)
		})
		.catch(() => {
			setState(State.ERROR)
		})
}
```

## Wrap up

Thinking of components as state machines has helped me simplify a lot of
codebases. It's effect on the overall accessibility of a codebase is truly
immense. Try it and tell me what you think! 👀
