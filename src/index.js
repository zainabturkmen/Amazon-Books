import React from "react";
import ReactDOM from "react-dom";
 

function Greeting(){
  return (
    <div>
      <h1>Helo world</h1>
      <ul>
        <li>
          <a href="#">Hey there</a>
        </li>
      </ul>
    </div>
  )
};


// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello world"));
// };


ReactDOM.render(<Greeting/>, document.getElementById("root"));