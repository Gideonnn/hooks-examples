import { useState } from 'react';

export const UseStateExample = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="pt-12 mx-auto prose text-center">
      <h1>useState</h1>
      <div className="flex justify-center gap-4">
        <button onClick={handleDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};
