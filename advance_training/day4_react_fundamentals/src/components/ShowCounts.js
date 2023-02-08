import React, { useState } from "react";

export default function ShowCounts() {
  const [count, setCount] = useState(0);

  function showCount() {
    setTimeout(()=>{
        //how to show the latest count
        console.log(count);
    },2000)
  }

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add 1
      </button>
      {/* disable the button during the setTimeout */}
      <button onClick={showCount}>show count</button>
    </div>
  );
}
