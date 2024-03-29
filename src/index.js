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

const counter = () => {
  const [value, setValue] = useState(0)

  return(
    <>
    </>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"))
 

