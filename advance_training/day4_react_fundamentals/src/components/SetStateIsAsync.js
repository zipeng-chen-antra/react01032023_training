import React, { useEffect, useRef, useState } from "react";

export default function SetStateIsAsync() {
  const [count, setCounter] = useState(0);

//   not really cuz setState is async, but rather due to closure
    function handleAdd(){
        setCounter(prev=>prev+1);
    }
    
    useEffect(()=>{
        console.log("count");
    },[count])

  return <div>
    <h1>Simple Counter</h1>
    <div>{count}</div>
    <div>
        <button onClick={handleAdd}>ADD</button>
    </div>
  </div>;
}
