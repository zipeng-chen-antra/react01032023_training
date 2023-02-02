// import React from "react";
// import ReactDOM from "react-dom/client";
import React from "./react/react";
import ReactDOM from "./react/react-dom";



const element = (
  <div a="a" b="b">
    <div className="title-container">
      <h1>title</h1>
      <p>lorem ipsum</p>
    </div>
    <div>1+1+1+1</div>
  </div>
);
console.log(element);

// {
//   key: null,
//   props: {
//     children: array or element
//   },
//   ref: null
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);