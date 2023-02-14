import React from "react";
import { useCounter } from "../../hooks/useCounter";

export default function StockCH() {
  const [shares, { add: buy, minus: sell }] = useCounter(0);

  // const {add:buy,minus:sell } = methods;

  return (
    <div>
      <div>Stock shares: {shares}</div>
      <button onClick={sell}>Sell</button>
      <button onClick={buy}>Buy</button>
    </div>
  );
}
