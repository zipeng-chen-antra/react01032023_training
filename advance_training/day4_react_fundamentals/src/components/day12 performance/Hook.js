import React, { useMemo, useState } from "react";
import useLog from "../../hooks/useLog";

export default function Hook() {
    const [input,setInput] = useState(0);
    useLog("Hook");
    // const value = expensiveFunc(input);
    // const value = useMemo(()=>{
    //    return expensiveFunc(input);
    // },[input])
    const obj = useMemo(()=>{
        return createObj(input)
    },[input])
  return <div>
    <h1>Hook</h1>
    <input type="number" value={input} onChange={(e)=>{
        setInput(+e.target.value)
    }}/>
    <div>Value: {obj.num}</div>
    <Child obj={obj}/>
  </div>;
}

function Childd({obj}) {
  useLog("Child");
  return <div>child</div>;
}

const Child = React.memo(Childd);

function createObj(num){
    return {num}
}

function expensiveFunc(num) {

  let i = 0;
//   console.log("expensive is run")
//   while (i < 3000000000) {
//     i++;
//   }
  return num;
}
