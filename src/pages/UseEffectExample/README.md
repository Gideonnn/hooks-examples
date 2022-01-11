# useEffect

This hook is used to run side effects after rendering. It is comparable to `componentDidMount` lifecycle method of class-based components.

## Usage

To run a side effect after rendering, you can use `useEffect` hook like follows:

```ts
useEffect(() => {
  // ...
});
```

The second argument of `useEffect` is an array of dependencies. If you want to run a side effect only when the component is mounted, you can pass an empty array:

```ts
useEffect(() => {
  // ...
}, []);
```

If you want to run a side effect only when the component is updated (props/state change), you can pass an array with the dependencies:

```ts
useEffect(() => {
  // ...
}, [foo, bar]);
```

The `useEffect` hook returns a function that can be used to clean up the effect. This function will be called when the component is unmounted. In the case of adding a listener, you can use `useEffect` like this:

```ts
useEffect(() => {
  // add event listener
  return () => {
    // remove event listener
  };
}, [foo, bar]);
```
