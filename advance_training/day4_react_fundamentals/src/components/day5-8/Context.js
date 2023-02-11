import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export default function Context() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <CounterContext.Provider value={{
        count,
        handleClick
    }}>
      <div>
        <h4>Root Parent</h4>
        <div>Count: {count}</div>
        <button onClick={handleClick}>ADD</button>
        <A />
      </div>
    </CounterContext.Provider>
  );
}

function A() {
  return (
    <div>
      <h4>This is A</h4>
      <B />
    </div>
  );
}
function B() {
    return (
        <div>
      <h4>B</h4>
      <button>modify context value</button>
      <C />
    </div>
  );
}
function C() {
    const {count,handleClick} = useContext(CounterContext);
    // const value = useContext(CounterContext);
    return (
        <div>
      <h4>C</h4>
      <button onClick={handleClick}>update count from component C</button>
    </div>
  );
}
