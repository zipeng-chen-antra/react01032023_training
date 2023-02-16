import { useEffect, useState } from "react";
import Child1 from "./components/day12 performance/Child1";
import ClassChild from "./components/day12 performance/ClassChild";
import Hook from "./components/day12 performance/Hook";
import useLog from "./hooks/useLog";



function App() {
  const [bool,toggle] = useState(true);
  const [count,setCount] = useState(0);
  // useLog("App")

  function update(){
    toggle(prev=>!prev);
  }

  function updateChildProp(){
    setCount(prev=>prev+1);
  }

  return (
    <div className="App">
      <button onClick={update}>Rerender App</button>
      <button onClick={updateChildProp}>Update Child Prop</button>
      {/* <Child1 count={count} a="a" b="b"/> */}
      <Hook />
      {/* <ClassChild count={count} b="b"/> */}
    </div>
  );
}

export default App;
