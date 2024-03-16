import React from "react";
import ReactDOM from "react-dom";
 

function BookList(){
  return(
    <section>
      <Book />
    </section>
  )
};


const Book = () => {
  return <article>
    <Image />
  </article>
}

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg" />
  )
};

const Title = () => {
  return(
    <h1>I Love You To The Moon And Back</h1>
  )
};
ReactDOM.render(<BookList />, document.getElementById("root"));