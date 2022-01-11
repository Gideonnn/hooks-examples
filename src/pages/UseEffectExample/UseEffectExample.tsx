import { useEffect } from 'react';

export interface UseEffectExampleProps {
  count?: number;
}

export const UseEffectExample = ({ count = 0 }: UseEffectExampleProps) => {
  useEffect(() => {
    console.log('This runs right after every rerender');
  });

  useEffect(() => {
    console.log('This runs only once when the component is mounted');
  }, []);

  useEffect(() => {
    console.log('This runs only when count is changed');
  }, [count]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log('This runs when the window is resized');
    });

    return () => {
      window.removeEventListener('resize', () => {
        console.log('This runs when the component is unmounted');
      });
    };
  });

  return (
    <div className="pt-12 mx-auto prose text-center">
      <h1>useEffect</h1>
      <p>Please check the console for results.</p>
    </div>
  );
};
