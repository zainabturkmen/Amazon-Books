import books from "./Books"


const Book = (props) => {
  const {img, title, author} = props.book
  return (
    <article className="book">
      <img src={img}/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
};

export default Book