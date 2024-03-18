import React from "react";
import ReactDOM from "react-dom";
 
// css
import "./index.css"

// setup vars
const books = [

    {
    img: "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg",
    title: "I Love You To The Moon And Back",
    Author: "Amelia Hepworth"
  },
  
    {
    img: "https://images-na.ssl-images-amazon.com/images/I/81959ym88cL._AC_UL600_SR600,400_.jpg",
    title: "Llama Llama Easter Egg",
    Author: "Anna Dewdney"
  }

];

function BookList(){
  return(
    <section className="booklist">
   
    </section>
  )
};

const Book = ({img, title, author, children}) => {
  // const {img, title, author} = props
  return (
  <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
  </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"));