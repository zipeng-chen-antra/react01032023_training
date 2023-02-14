import { useState } from "react";

export function useCounter(initValue = 0) {
  const [count, setCount] = useState(initValue);

  function add() {
    setCount((prev) => prev + 1);
  }
  function minus() {
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(initValue);
  }

  function addByAmount(amount) {
    setCount((prev) => prev + amount);
  }

  return [count, { add, minus, reset, addByAmount }];
  // return {count,add,minus,reset,addByAmount}
}
