import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));


/* =============== External CSS Styling in JSX: CSS Stylesheet =============== */
const myVar = (
  <div>
    <h1 className="heading">Hello I am in JSX {4+4}</h1> 
    <p className="subheading">Hello I'm subheading</p>
  </div>
);
// root.render(myVar);


/* =============== Updating the rendered element ============== */
function myClock(){
  root.render(
    <div>
      <p>{new Date().toLocaleTimeString()}</p>
      <p>This will not get re-rendered</p>
    </div>
  );
  setTimeout(myClock,100);
}

myClock();
// OUTPUT: 1:50:05 




















/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
