import React from "react";
import ReactDOM from "react-dom";
 
// css
import "./index.css"

const Author = "Amelia Hepworth";
const title = "I Love You To The Moon And Back"
const image = 
"https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg";


function BookList(){
  return(
    <section className="booklist">
      <Book />
    </section>
  )
};

const Book = () => {
  return (
  <article className="book">
      <img src={image} />
      <h1>{title}</h1>
      <h4>{Author}</h4>
  </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"));