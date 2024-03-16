import React from "react";
import ReactDOM from "react-dom";
 

function Greeting(){
  return (<>
    <Heading1 />
    <Link />
    <Input />
  </>);
};

const Heading1 = () => {
  return (
   <h1 className="Hehe">hello world</h1>
  )
}

const Link = () => {
  return (
    <a href="#">ding sing</a>
  )
}

const Input = () => {
  return (
    <input placeholder="heheheh"/>
  )
}



// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello world"));
// };


ReactDOM.render(<Greeting/>, document.getElementById("root"));