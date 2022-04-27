import { useRef } from 'react';

export default function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = 'Hello';
    inputRef.current.style.backgroundColor = 'red';
    paraRef.current.innerText = 'Goodbye';
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col w-1/6">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          placeholder="Type here"
          className="input w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}
