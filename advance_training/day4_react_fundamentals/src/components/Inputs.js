import React, { useEffect, useState } from 'react'

export default function Inputs() {
    return <div>
      <Checkbox/>
    </div>
}

function TextInput(){
  const [input,setInput] = useState("ooo")
  function handleChange(event){
      console.log(event.target.value);
      setInput(event.target.value)
  }

return (
  <div>
      <input value={input} onChange={handleChange}/>
  </div>
)
}


function Checkbox(){
  const [isChecked,setIsChecked] = useState(true);
  
  function handleChange(e){
    console.log(e.target.checked)
    setIsChecked(e.target.checked)
  }

  return <div>
    <input type="checkbox" checked={isChecked} onChange={handleChange}/>
  </div>
}


