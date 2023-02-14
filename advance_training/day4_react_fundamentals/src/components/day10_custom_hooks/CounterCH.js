import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export default function CounterCH() {

    const [count,methods] = useCounter();
    // const {reset,addByAmount,count} = useCounter();

  return (
    <div>
      <h1>Counter With Custom Hook</h1>
      <div>
        Count: {count}
      </div>

      <button onClick={methods.reset}>reset</button>
      <button onClick={()=>methods.addByAmount(5)}>Add by 5</button>
    </div>
  )
}
