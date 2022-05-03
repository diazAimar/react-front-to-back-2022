import { useState, useEffect, useRef, useMemo } from 'react';

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const renders = useRef(1);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        className="form-control w-25"
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick} className="btn-btn-primary">
        ReRender
      </button>
      <h1>Renders: {renders.current}</h1>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log('Expensive function called');
  return Math.sqrt(n);
}
