App.js😜
=========
import React from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

function App() {
  return (
    <div>
      <Child1/>
      <Child2/>
    </div>
  )
}

export default App

MessageSlice.js😜
=================
import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageSlice" /* name of slice */,
  initialState: {
    message: "a" /* initial value of messageSclice is empty */,
  },
  reducers: {
    /*Reducer is used to update the previous state on the bases of action*/
    setMessage: (state, action) => {
      state.message = action.payload; // this action setMessage is to update the message state
    },
    resetMessage: (state, action) => {
      state.message = ""; // thi action resetMessage is to reste the message state
    },
  },
});

export default messageSlice.reducer; // this line is used to combine the actions setMessage and resetMesage in one object

export const { setMessage, resetMessage } = messageSlice.actions; // this line is used to dispatch the actions  setMessage and resetMesage to the components

store.js😜
==========
import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";

export default configureStore({
  reducer: {
    messageReducer: messageSlice, // all reducers of messageSlice are defined in the reducer messageReducer
  },
});

index.js😜
===========
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; // this line is used to provide the our store.js into the index.js which provide store.js to the whole app.js
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

Child1.js😜
============
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


Child2.js😜
============
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

