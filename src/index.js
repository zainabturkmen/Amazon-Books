import React from "react";
import ReactDOM from "react-dom";
 

function Greeting(){
  return (<>
   <h1 className="Hehe">hello world</h1>
   <a href="#">Hey all</a>
    <input/>
  </>);
};


// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello world"));
// };


ReactDOM.render(<Greeting/>, document.getElementById("root"));