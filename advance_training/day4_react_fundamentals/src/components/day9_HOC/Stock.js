import React, { useState } from "react";
import withCounter from "../../HOC/withCounter";

function Stock(props) {
  const {
    count: shares,
    add: handleBuy,
    minus: handleSell,
    amount,
    handleAmountChange,
    addByAmount: buyByAmount
  } = props;
  return (
    <div>
      <div>Stock shares: {shares}</div>
      <button onClick={handleSell}>Sell</button>
      <button onClick={handleBuy}>Buy</button>
      <input value={amount} onChange={handleAmountChange}/>
      <button
        onClick={buyByAmount}
      >
        add by
      </button>
    </div>
  );
}

export default withCounter(Stock);
