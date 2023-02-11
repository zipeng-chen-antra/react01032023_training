import React, { useRef, useState } from "react";

export default function Ref() {
//   const [count, setCount] = useState(0);
//   const ref = useRef(0);

    const inputRef = useRef("");
    // const [input,setInput] = useState("");


  return (
    <div>
        <input ref={inputRef} />
        <button onClick={()=>{
            inputRef.current.focus();
            console.log(inputRef.current.value);
        }}>button</button>
    </div>
    
    // <div>
    //     <h1>State count</h1>
    //   <div>count: {count}</div>
    //   <button
    //     onClick={() => {
    //       setCount((prev) => prev + 1);
    //     }}
    //   >
    //     ADD state count
    //   </button>

    //   <h1>Ref count</h1>
    //   <div>count: {ref.current}</div>
    //   <button
    //     onClick={() => {
    //       ref.current += 1;
    //       console.log(ref.current)
    //     }}
    //   >
    //     ADD ref
    //   </button>
    // </div>
  );
}
