import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';

interface MemoComponentProps {
  getItems: () => string[];
}

const ChildComponent = ({ getItems }: MemoComponentProps) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    console.log('ChildComponent: useEffect');
    setItems(getItems());
  }, [getItems]);

  return (
    <>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  // const getItems = () => ['item1', 'item2', 'item3'];
  const getItems = useCallback(() => ['item1', 'item2', 'item3'], []);

  return (
    <div className="pt-12 mx-auto prose text-center">
      <h1>useCallback</h1>
      <ChildComponent getItems={getItems} />
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};
