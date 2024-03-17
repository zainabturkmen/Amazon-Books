import React from "react";
import ReactDOM from "react-dom";
 
// css
import "./index.css"

// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg",
  title: "I Love You To The Moon And Back",
  Author: "Amelia Hepworth"
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81959ym88cL._AC_UL600_SR600,400_.jpg",
  title: "Llama Llama Easter Egg",
  Author: "Anna Dewdney"
};

function BookList(){
  return(
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.Author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.Author} />
    </section>
  )
};

const Book = (props) => {
  console.log(props);
  return (
  <article className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
      <p>{props.number}</p>
  </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"));