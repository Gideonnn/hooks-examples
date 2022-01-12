# useLayoutEffect

The `useLayoutEffect` hook is similar to `useEffect` but is executed _during_ rendering, while `useEffect` is executed _after_ rendering. To be more specific; `useEffectLayout` is executed right after all DOM mutations, but before the browser has a chance to paint.

One other important difference between `useEffect` and `useLayoutEffect` is that `useLayoutEffect` is executed synchronously, which means you block rending while executing.
