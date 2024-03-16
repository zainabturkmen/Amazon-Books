import React from "react";
import ReactDOM from "react-dom";
 

function BookList(){
  return(
    <section>
      this a BookList
    </section>
  )
};


// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello world"));
// };


ReactDOM.render(<BookList />, document.getElementById("root"));