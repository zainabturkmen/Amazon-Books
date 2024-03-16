import React from "react";
import ReactDOM from "react-dom";
 

const Greeting = () => {
  return React.createElement("h1", {}, "hello world")
}

ReactDOM.render(<Greeting/>, document.getElementById("root"))