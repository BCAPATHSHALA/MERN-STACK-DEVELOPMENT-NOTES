import React, { useState } from "react";

function UpdateButton() {
  const objectList = {
    myName: "Manoj Kumar",
    myAge: 23,
    myDegree: "BCA",
    myCollege: "RBS COLLEGE AGRA",
  };

  const [myObj, setMyObj] = useState(objectList);

  const updateMethod = () => {
    setMyObj({ ...myObj, myName: "Devendra Nishad" });
  };

  return (
    <>
      <h1>
        Name: {myObj.myName} & College: {myObj.myCollege}{" "}
      </h1>
      <button onClick={updateMethod}>Update</button>
    </>
  );
}

export default UpdateButton;
