import books from "./Books"


const Book = () => {
  const [books, setBooks] = React.useState(books)
  return (
    <article className="book">
      {
        books.map((book) => {
          const {id, img, title, authoe} = book;
        })
      }
    </article>
  )
};

export default Book