import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {decrement, increment, incrementByAmount, reset} from "../store/slices/counterSlice";

export default function Counter() {
  
  const amountRef = useRef(0);
  const count = useSelector(state=>state.counter);

  const dispatch = useDispatch();
    
  function handleAdd(){
    dispatch(increment())
  }

  function handleMinus(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleAddByAmount(){
    const amount = +amountRef.current.value;
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>count: {count}</div>
      <input type="number" ref={amountRef} defaultValue={5}/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleAddByAmount}>add by amount</button>
   
    </div>
  )
}
