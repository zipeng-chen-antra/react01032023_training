import React, { useEffect } from "react";
import { useState } from "react";
import useLog from "../../hooks/useLog";
import Child2 from "./Child2";

function Child1({ count }) {
    useLog("Child1");
    
    return (
        <div>
      <h1>Child 1</h1>
      <div>Count: {count}</div>
      <Child2 />
    </div>
  );
}

//prevent uncessary rerendering when props and states don't change
export default React.memo(Child1);


