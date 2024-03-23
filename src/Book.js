import books from "./Books"

// const onContextMenu = (event) => {
//   event.preventDefault();
//   const btn = document.querySelector(".btn");
//   btn.style.display = "block"
//   const clientRect = btn.getBoundingClientRect();

//   clientRect.x = `${event.x}px`;  
//   clientRect.y = `${event.y}px`; 

//   btn.style.left = `${clientRect.x}px`;  
//   btn.style.top = `${clientRect.y}px`;  
// }


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