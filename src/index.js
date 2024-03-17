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

function BookList(){
  return(
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22}/>
    </section>
  )
};

const Book = (props) => {
  console.log(props);
  return (
  <article className="book">
      <img src={image} />
      <h1>{title}</h1>
      <h4>{Author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
  </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"));