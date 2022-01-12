import { useEffect, useLayoutEffect, useRef } from 'react';

export const UseLayoutEffectExample = () => {
  const blueBoxRef = useRef<HTMLDivElement>(null);
  const redBoxRef = useRef<HTMLDivElement>(null);

  const boxStyle: React.CSSProperties = {
    height: '100px',
    width: '100px',
    position: 'absolute',
    top: '200px',
  };

  const blueBoxStyle: React.CSSProperties = {
    ...boxStyle,
    backgroundColor: 'blue',
    left: '100px',
  };

  const redBoxStyle: React.CSSProperties = {
    ...boxStyle,
    backgroundColor: 'red',
    left: '300px',
  };

  useLayoutEffect(() => {
    if (blueBoxRef.current) {
      blueBoxRef.current.style.left = '200px';
    }
  });

  useEffect(() => {
    if (redBoxRef.current) {
      redBoxRef.current.style.left = '400px';
    }
  });

  return (
    <div className="relative pt-12 mx-auto prose text-center">
      <h1>useLayoutEffect</h1>
      <p>Can you see one of the boxes flicker after refresh?</p>

      <div ref={blueBoxRef} style={blueBoxStyle}></div>
      <div ref={redBoxRef} style={redBoxStyle}></div>
    </div>
  );
};
