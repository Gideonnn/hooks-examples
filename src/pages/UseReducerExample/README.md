# useReducer

The `useReducer` hook is a state management pattern that allows you to manage the state of a component. It is similar to the `useState` hook, but it allows you to manage deep nested state more easily. So `useReducer` allows us to store complex data objects without needing multiple useState hooks.

If you know Redux you pretty much already know how to use the `useReducer` hook. The `useReducer` functions expects two arguments, the reducer function and the initial state. The reducer function is a function that takes the previous state and an action and returns the next state. The initial state is the state that the component will start with.

Another benefit of using `useReducer` is that the `dispatch` function can be passed down to other components. The `dispatch` function is a memoized function, so just like `useMemo` and `useCallback`, it will only be created once and not cause re-renders in child components.
