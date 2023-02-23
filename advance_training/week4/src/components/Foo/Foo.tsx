import React, { useState } from 'react'

export default function Foo({name,color,handleClick}:any) {
    const [count,setCount] = useState(0);
  return (
    <div className={color}>
        <h1 role="title">FOO</h1>
        <div >name: {name}</div>
        <button role="button" onClick={handleClick}>click</button>
    </div>
  )
}
