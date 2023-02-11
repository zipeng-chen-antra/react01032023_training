import React, { useEffect, useState } from "react";

export default function ShowCounts() {
  const [count, setCount] = useState(0);
  const [isTimeout, setIsTimeout] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    console.log("count", count);
    setIsDisabled(false);
  }, [isTimeout]);

  function showCount() {
    setIsDisabled(true);
    setTimeout(() => {
        // console.log(count);
      setIsTimeout((prev) => !prev);
    }, 2000);
  }

  return (
    <div>
        <div>count: {count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add 1
      </button>
      {/* disable the button during the setTimeout */}
      <button disabled={isDisabled} onClick={showCount}>
        show count
      </button>
    </div>
  );
}
