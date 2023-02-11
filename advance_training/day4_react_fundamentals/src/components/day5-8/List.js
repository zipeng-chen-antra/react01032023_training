import React, { useState } from "react";


export default function List() {
  const [numbers, setNumbers] = useState([1,2,3]);

  return (
    <div>
      <button
        onClick={() => {
            setNumbers(prev=>{
                return prev.map(num=>num+1);
            })
        }}
      >
        add
      </button>
      <div>
        {numbers.map((num,index) => {
          return <div key={index}>number: {num}</div>;
        })}
      </div>
    </div>
  );
}
