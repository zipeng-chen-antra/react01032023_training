import { useState } from "react";
import Fetch from "./components/Fetch";
import Inputs from "./components/Inputs";
import List from "./components/List";
import Money from "./components/Money";
import PersonC from "./components/PersonC";
import PersonF from "./components/PersonF";
import SetStateIsAsync from "./components/SetStateIsAsync";
import ShowCounts from "./components/ShowCounts";

function App() {
  const [bool,toggle] = useState(true);
  const [money,setMoney] = useState(0);

  return (
    <div className="App">
      <div>
        <div>bool: {bool ? "true" : "false"}</div>
        <button onClick={()=>{
            toggle(prev=>!prev);
            // console.log("to false");
            // setTimeout(()=>{
            //   toggle(prev=>!prev);
            //   console.log("back to true");
            // },1500)
        }}>toggle app bool</button>
        <button onClick={()=>{
          setMoney(money+100)
        }}>Give $100</button>
      </div>
      {
        // bool ? <PersonC name="Jack" money={money} /> : null
        bool ? <PersonF name="Jack" money={money} /> : null
      }
        {/* same props give same output */}
      <br/>
      <br/>
      <br/>
        {/* <Inputs /> */}
        {/* <List /> */}

        {/* <SetStateIsAsync /> */}
        {/* <Fetch /> */}
        <ShowCounts />
    </div>
  );
}



export default App;
