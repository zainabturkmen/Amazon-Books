import React, { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value >= 1) {
      document.title = `New Message (${value})`
    }
    console.log('hehehhe');
  }, [])

  const reset = () => {
    setValue(0)
  }

  return (
    <>
      <div className="counter">
        <h2>Start Counting</h2>
        <h1>{value}</h1>
        <button className="count-btn" onClick={() => setValue(value - 1)}>decrease</button>
        <button className="count-btn" onClick={reset}>reset</button>
        <button className="count-btn" onClick={() => setValue(value + 1)}>increase</button>
      </div>
    </>
  )
};

export default Counter;