import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(<BookList />, document.getElementById("root"))
 

