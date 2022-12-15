import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/slices/messageSlice";

function Child1() {
  const inputRef = useRef(null);

  const dispatch = useDispatch(); // dispatch hook is defined first and then we have to use for dispatching the action with the specific slices

  function handleSubmit(e) {
    e.preventDefault();

    const inputTextValue = inputRef.current.value;
    dispatch(setMessage(inputTextValue)); // this line dispatch the action setMessage from messageSlice.js when click on the button
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Child1;
