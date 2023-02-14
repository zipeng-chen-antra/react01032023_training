import React from 'react'
import { useSelector } from "react-redux";
export default function Counter2() {
  
  const value = useSelector(state=>state.counter)

  return (
    <div>
      <h1>Counter2</h1>
      <div>Value: {value}</div>
    </div>
  )
}
