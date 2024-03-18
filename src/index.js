import React from "react";
import ReactDOM from "react-dom";

// Css
import styleCss from "./index.css"
import books from "./Books";
import Book from "./Book";

const BookList = () => {
  return (
    <section className="booklist">{books.map((book) => {
      return <Book book = {book}/>
    })}</section>
  )
};

ReactDOM.render(<BookList />, document.getElementById("root"))
 


