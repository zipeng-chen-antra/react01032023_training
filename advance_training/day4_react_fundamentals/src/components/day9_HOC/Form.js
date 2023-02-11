import React, { useState } from 'react'
import wait from '../../util/wait';


function slowValidateInput(){
    return wait(2000);
}

export default function Form() {
    const [isLoading,setIsloading] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        setIsloading(true);
        slowValidateInput().then(()=>{
            setIsloading(false)
        })
    }
  return (
    <form onClick={handleSubmit}>
        <input />
        <button disabled={isLoading}>Submit</button>
    </form>
  )
}
