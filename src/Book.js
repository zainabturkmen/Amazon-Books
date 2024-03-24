import books from "./Books"
import { useState } from "react";


const Book = () => {
  const [myBooks, setMyBooks] = useState(books);
  return(
    <>
    {
      myBooks.map((book) => {
        const{id, img, title, author} = book;
        return (
          <article className="book" key={id}>
            <img src={img} />
            <h1>{title}</h1>
            <h4>{author}</h4>
          </article>
        )
      })
    }
    <button></button>
    </>
  )
};

export default Book