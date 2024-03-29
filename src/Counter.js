import React from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  return(
    <>
    <section className="counter">
      <h2>Start Counting</h2>
      <h1>{value}</h1>
      <button className="count-btn" onClick={() => setValue(value - 1)}>decrease</button>
      <button className="count-btn" onClick={reset}>reset</button>
      <button className="count-btn" onClick={() => setValue(value + 1)}>increase</button>
    </section>
    </>
  )
};

export default Counter;