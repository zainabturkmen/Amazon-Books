import React from "react";
import ReactDOM from "react-dom";
 
// css
import "./index.css"

// setup vars
const books = [

    {
      id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg",
    title: "I Love You To The Moon And Back",
    author: "Amelia Hepworth"
  },
  
    {
      id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81959ym88cL._AC_UL600_SR600,400_.jpg",
    title: "Llama Llama Easter Egg",
    author: "Anna Dewdney"
  },
    {
      id:3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81QkbRlPEEL._AC_UL600_SR600,400_.jpg",
    title: "Bluey: Easter",
    author: "Penguin Young Readers Licenses"
  }

];


function BookList(){
  return(
    <section className="booklist">
      {books.map((book)=> {
        return <Book  key = {book.id} {...book}></Book>
      })}
    </section>
  )
};


const Book = ({img, title, author}) => {
  // Attributr, eventHandler
  // onClick, onMouseOver
  const clickHandler = () =>{

  }

  return (
  <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>hehahu</button>
  </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"));