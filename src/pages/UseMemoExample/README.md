# useMemo

This hook is comparable to `useEffect`, but it is executed as a different point in the lifecycle. The `useMemo` hook is executed _during_ rendering, and `useEffect` _after_ rendering. That's why `useEffect` is used for side effects (stuff that happens after render) and `useMemo` is used for performance optimization.

In `UseMemoExample.tsx` the following code is used:

```tsx
const double = useMemo(() => slowFn(count, 1000), [count]);
```

This will only be executed if `count` changes. If count stays the same, `slowFn` will not be re-evaluated and the result will be returned from cache.

So in the example if the component is re-rendered (by clicking the re-render button), the `slowFn` does not have to be re-evaluated because `count` did not change.
