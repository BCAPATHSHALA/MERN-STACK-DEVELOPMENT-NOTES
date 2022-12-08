import React, { useState } from "react";

function Fruits() {
  const [fruit, setFruit] = useState("Apple");
  const [inputText, setInputText] = useState("");

  const updateFruit = () => {
    setFruit(inputText);
  };

  function updateInputText(event) {
    const curInputValue = event.target.value;
    setInputText(curInputValue);
  }

  return (
    <>
      <p>The value of Fruit is: {fruit}</p>
      <input type="text" onChange={updateInputText} />
      <button onClick={() => updateFruit()}>Update</button>
    </>
  );
}

export default Fruits;
