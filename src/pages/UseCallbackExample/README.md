# useCallback

The `useCallback` hook is similar to `useMemo`, but instead of caching values it caches the function itself. This is mostly useful for functions that are passed to components via props.

This is probably not worth the performance gain most of the time, because code complexity also has its cost. Keep this in mind when you want to use `useCallback`.
