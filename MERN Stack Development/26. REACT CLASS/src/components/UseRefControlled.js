import React, { useRef, useState } from "react";

function UseRefControlled() {
  const [show, setShow] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const refVariable = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    const name = refVariable.current.value;
    setNameInput(name);
    name == "" ? alert("plz fill the name") : setShow(true);
  }

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="name">NAME➡️</label>
        <input type="text" ref={refVariable} />
        <button>Submit</button>
      </form>
      {show ? <h1>Your Name is➡️: {nameInput}</h1> : ""}
    </div>
  );
}

export default UseRefControlled;
