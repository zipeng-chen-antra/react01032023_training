import React, { useEffect, useRef, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

export default function AntiPattern() {
  const [count, setCount] = useState(0);
    const inputRef = useRef(0);
  return (
    <div>
      <h1>Anti Pattern</h1>
      {/* <div>Parent Count: {count}</div> */}
      <input type="number" ref={inputRef}/>
      <button
        onClick={() => {
          setCount(+inputRef.current.value)
        }}
      >
        reset all children state
      </button>
      <Child count={count} />
      <Child count={count} />
      <Child count={count} />
    </div>
  );
}

function Child({ count }) {
  const [childCount, setChildCount] = useState(0);

  // console.log("run")
  //   useEffect(() => {
  //     console.log("child is updating");
  //     console.log("child count", count);
  //   });

  useEffect(() => {
    setChildCount(count);
  }, [count]);

  return (
    <div>
      <div>child count: {childCount}</div>
      <button
        onClick={() => {
          setChildCount((prev) => prev + 1);
        }}
      >
        add
      </button>
    </div>
  );
}
