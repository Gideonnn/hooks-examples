import { useMemo, useState } from 'react';

const slowFn = (num: number, timeout: number) => {
  const start = Date.now();
  let now = start;
  while (now - start < timeout) {
    now = Date.now();
  }
  return num * 2;
};

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [rerender, setRerender] = useState(0);

  // This is an artificially slow function that will be called every time the component renders,
  // even if the value of count hasn't changed.
  // const double = slowFn(count, 1000);

  // This is a memoized version of the above function. It will only execute if the value of count
  // has changed. If the value of count hasn't changed, the useMemo function will return the result
  // of the previous call.
  const double = useMemo(() => slowFn(count, 1000), [count]);

  return (
    <div className="pt-12 mx-auto prose text-center">
      <h1>useMemo</h1>
      <p>
        Try to click the Re-render button and notice the fast re-render. The plus and minus button
        do change state, so rendering is really slow.
      </p>

      <h2>Slow count:</h2>
      <div className="flex justify-center gap-4">
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{double}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setRerender(rerender + 1)}>Re-render</button>
      </div>
    </div>
  );
};
