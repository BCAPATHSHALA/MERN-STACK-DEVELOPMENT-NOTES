import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  // let countState= useState(0);
  // let count = countState[0];
  // let setCount = countState[1];

  function updateCount() {
    setCount(count + 1);
    console.log("Count is: " + count);
  }
  return (
    <>
      <p>The value of count is: {count}</p>
      <button onClick={updateCount}>Increment</button>
    </>
  );
}

export default Counter;
