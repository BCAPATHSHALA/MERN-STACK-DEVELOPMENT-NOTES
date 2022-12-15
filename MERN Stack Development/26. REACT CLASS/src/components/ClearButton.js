import React, { useState } from "react";

function ClearButton() {
  const bioData = [
    {
      id: 1,
      name: "Manoj Kumar",
      Age: 23,
    },
    {
      id: 2,
      name: "Amit Kumar",
      Age: 24,
    },
  ];
  const [myArray, setMyArray] = useState(bioData);

  const clearArray = () => {
    setMyArray([]);
  };

  return (
    <>
      <h1>CLEAR BUTTON</h1>
      {myArray.map((element, index) => {
        return (
          <>
            <h1 key={index}>
              Age: {element.Age} Name: {element.name}
            </h1>
          </>
        );
      })}
      <button onClick={clearArray}>button</button>
    </>
  );
}

export default ClearButton;
