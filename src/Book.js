import books from "./Books"
import { useState } from "react";


const Book = () => {
  const [myBooks, setMyBooks] = useState(books);
  return(
    <>
    {
      myBooks.map((book) => {
        const{id, img, title, author}
      })
    }
    </>
  )
};

export default Book