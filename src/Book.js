import books from "./Books"
import { useState } from "react";


const Book = () => {
  const [myBooks, setMyBooks] = useState(books);

  const removBooks = (id) => {
    let newPeople = myBooks.filter((book) => book.id !== id)
    setMyBooks(newPeople);
  };
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
            <button className="btn" onClick={() => removBooks(id)}>remove books</button>
          </article>
        )
      })}
    </>
  )
};

export default Book