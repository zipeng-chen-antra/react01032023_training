import React, { useEffect, useState } from "react";

export default function PersonF({ name, money, cb }) {
  const [age, setAge] = useState(0);

    useEffect(() => {
      console.log("code")
      const intervalID = setInterval(()=>{
        console.log("tic toc");
      },1000)
    
      return () => {
        console.log("cleanup")
        clearInterval(intervalID);
      }
    }, [age])
    


  //   useEffect(() => {
  //     console.log("component mounts for the first time");
  //   },[]);

  //   useEffect(() => {
  //     console.log("aged well");
  //   },[age]);

  //   useEffect(() => {
  //     console.log("made money");
  //   },[money]);

  function handleClick() {
    setAge((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Person Function</h1>
      <div>{name}</div>
      <div>Age: {age}</div>
      <div>Money: {money}</div>
      <button onClick={handleClick}>Grow 1 year</button>
    </div>
  );
}
