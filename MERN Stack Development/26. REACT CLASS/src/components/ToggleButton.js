import React, { useState } from "react";

function ToggleButton() {
  const [myName, setMyname] = useState("Coding Shuttle");
  const changeName = () => {
    const name = myName;
    if (name === "Coding Shuttle") {
      setMyname("BCA PATHSHALA");
    } else {
      setMyname("Coding Shuttle");
    }
  };
  return (
    <>
      <h1>TOGGLE BUTTON</h1>
      <h1>{myName}</h1>
      <button onClick={changeName}>button</button>
    </>
  );
}

export default ToggleButton;
