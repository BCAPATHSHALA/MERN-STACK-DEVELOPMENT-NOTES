import React, { useRef, useState } from "react";

function UserForm() {
  const [fruit, setFruit] = useState("");
  const fruitSelectRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const fruitValue = fruitSelectRef.current.value;
    alert(fruitValue);
  }

  function handleChange(e) {
    console.log(e.target.value);
    setFruit(e.target.value);
  }

  return (
    <form>
      <select onChange={handleChange} ref={fruitSelectRef}>
        <option value="apple">Apple</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default UserForm;
