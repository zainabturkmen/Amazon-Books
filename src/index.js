import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

// Css
import styleCss from "./index.css"
import books from "./Books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
    <Title />
    <section className="booklist">
      <Book />
    </section>
    <Counter />
    </>
  )
};


const Title = () => {
  return(
    <div>
      <h1 className="title">Amazon Books</h1>
    </div>
  )
};

const Counter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  return(
    <>
    <section className="counter">
      <h2>Start Counting</h2>
      <h1>{value}</h1>
      <button className="count-btn" onClick={() => setValue(value - 1)}>decrease</button>
      <button className="count-btn" onClick={reset}>reset</button>
      <button className="count-btn" onClick={() => setValue(value + 1)}>increase</button>
    </section>
    </>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"))
 

