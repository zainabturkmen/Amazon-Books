import books from "./Books"

const Book = (props) => {
  const {img, title, author} = props.book
  return (
    <article className="book">
        <a href="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518/ref=zg_bs_g_books_d_sccl_15/145-6832180-9057112?psc=1">
           <img src={img}/>
        </a>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default Book