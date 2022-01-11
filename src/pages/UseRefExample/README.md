# useRef

useRef returns an object whose `.current` property is initialized to the passed argument. The returned object will persist for the full lifetime of the component.

A typical use case is to associate a value with a DOM node. Initial value can be `null` and the value can be set by using `ref={refName}` in the component.

```tsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

Besides targeting a DOM node, useRef can also be used to store values. This can be used for performance optimization because changing `.current` does not trigger a re-render. An example of this can be found in the `UseRefExample.tsx` file.
