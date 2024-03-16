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
    this is a book
  </article>
}

ReactDOM.render(<BookList />, document.getElementById("root"));