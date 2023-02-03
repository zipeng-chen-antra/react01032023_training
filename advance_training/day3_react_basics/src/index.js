// import React from "react";
// import ReactDOM from "react-dom/client";
import React from "./react/react";
import ReactDOM from "./react/react-dom";

const element = (
  <div className="todo">
    <div>
      <div>
        <h1 style={ {color:"red", backgroundColor: "blue"} }>111</h1>
      </div>
      <div>
        <input placeholder="placeholder"/>
      </div>
      <button onClick={()=>{console.log("clicked")}}>button</button>
    </div>
  </div>
);

class AppC extends React.Component{


  render(){
    return <div>
      Class App
    </div>
  }
}

function AppF(){
  return <div>
    function app
  </div>
}

// console.log(<App/>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
  <AppC/>
  <AppF/>
</div>);
