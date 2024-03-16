import React from "react";
import ReactDOM from "react-dom";
 
function Greeting(){
  return (
    <div>
      <h1>Helo world</h1>
    </div>
  )
};

const Greeting = () => {
  return React.createElement("h1", {}, "hello world")
}

ReactDOM.render(<Greeting/>, document.getElementById("root"))