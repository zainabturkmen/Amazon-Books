import books from "./Books"
import { useState } from "react";


const Book = () => {
  const [book, setBooks] = useState(books);
  return (
    <>
    {
      book.map((myBook) => {
        const {id, img, title, author} = myBook;
         return (
           <article className="book" key={id} >
            <img src={img} />
            <h1>{title}</h1>
            <h4>{author}</h4>
          </article>
         )
        })
      }
    </>
  )
};

export default Book