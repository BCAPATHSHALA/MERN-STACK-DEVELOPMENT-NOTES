import React, { useState } from "react";

function ToDoList() {
  const bioData = [
    {
      id: 0,
      name: "Manoj Kumar",
      Age: 23,
    },
    {
      id: 1,
      name: "Amit Kumar",
      Age: 24,
    },
  ];
  const [myArray, setMyArray] = useState(bioData);

  const clearArray = () => {
    setMyArray([]);
  };

  const removeElem = (id) => {
    const newArray = myArray.filter((curElem) => {
      return curElem.id != id;
    });
    setMyArray(newArray);
  };

  return (
    <>
      {myArray.map((curElem) => {
        return (
          <h1>
            Name: {curElem.name} & Age: {curElem.age}
            <button onClick={() => removeElem(curElem.id)}>remove</button>
          </h1>
        );
      })}
      <button onClick={clearArray}>button</button>
    </>
  );
}

export default ToDoList;
