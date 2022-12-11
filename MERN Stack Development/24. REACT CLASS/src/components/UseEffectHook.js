import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);

  // this function is used to cleanup the work done
  function callThisOnUnmount() {
    console.log("Component is unmounted!");
  }

  useEffect(() => {
    console.log(counter, "counter updated");
    return callThisOnUnmount;
  }, [counter]);

  useEffect(() => {
    console.log("first time mounted");
  }, []);

  useEffect(() => {
    console.log("re-rendring happened");
  });

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
