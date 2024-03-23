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
    <RightClickFunctionality />
    <section className="booklist">
      {books.map((book) => {
      return <Book key={book.id} book={book}/>
    })}

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


const RightClickFunctionality = () => {
  return(
    <div className="right-click-popup">
      <button type="button" className="btn">Delete book</button>
    </div>
  )
};


ReactDOM.render(<BookList />, document.getElementById("root"))
 


