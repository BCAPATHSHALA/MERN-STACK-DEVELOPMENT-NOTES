import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  // this line read the data from the child1 via store reducer with the help of hook useSelector() which is return the whole object
  const messageValue = useSelector((state) => state.messageReducer.message);

  return (
    <div>
      <h1>The data from Child1 is: {messageValue}</h1>
    </div>
  );
}

export default Child2;
