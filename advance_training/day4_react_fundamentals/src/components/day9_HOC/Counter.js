import React, { useState } from "react";
import withCounter from "../../HOC/withCounter";

function Counter({ count, add, minus, reset, addByAmount, amount, handleAmountChange }) {
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={minus}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={add}>+</button>
      <input value={amount} onChange={handleAmountChange}/>
      <button
        onClick={addByAmount}
      >
        add by
      </button>
    </div>
  );
}

// const NewCounter = withCounter(Counter);
// export default NewCounter;

export default withCounter(Counter,{initCount:100});
