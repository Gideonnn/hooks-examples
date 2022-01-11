import { useRef, useState } from 'react';

export const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrementRef = () => {
    countRef.current++;
  };

  const handleDecrementRef = () => {
    if (count > 0) {
      countRef.current--;
    }
  };

  return (
    <div className="pt-12 mx-auto prose text-center">
      <h1>useRef</h1>
      <p>Below you can see the difference between useState and useRef.</p>
      <h2>useState</h2>
      <div className="flex justify-center gap-4">
        <button onClick={handleDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <h2>useRef</h2>
      <div className="flex justify-center gap-4">
        <button onClick={handleDecrementRef}>-</button>
        <p>{countRef.current}</p>
        <button onClick={handleIncrementRef}>+</button>
      </div>
    </div>
  );
};
