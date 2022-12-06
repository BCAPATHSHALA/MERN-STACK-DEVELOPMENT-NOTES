import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* =============== Single JSX Syntax =============== */
// const myVar = <h1>Hello I am in JSX</h1>;
// root.render(myVar);

//====================================================
// OUTPUT: Hello I am in JSX
//====================================================

/* =============== TOP Level Element Single JSX Syntax =============== */
// const myVar =<div><h1>Hello I am in JSX</h1><p>Hello i am top level element</p></div>;
// root.render(myVar);

//====================================================
/*OUTPUT: 
Hello I am in JSX
Hello i am top level element
*/
//====================================================

/* =============== Large Block JSX Syntax =============== */
// const myVar = (
//   <div>
//     <h1>Hello I am in JSX</h1> 
//     <p>Hello i am top level element</p>
//   </div>
// );
// root.render(myVar);

//====================================================
/*OUTPUT: 
Hello I am in JSX
Hello i am top level element
*/
//====================================================

/* =============== Expression in JSX {3+5} =============== */
// const myVar = (
//   <div>
//     <h1>Hello I am in JSX {4+4}</h1> 
//     <p>Hello i am top level element</p>
//   </div>
// );
// root.render(myVar);

//====================================================
/*OUTPUT: 
Hello I am in JSX 8
Hello i am top level element
*/
//====================================================

/* =============== The Class Attribute: className instead of class =============== */
// const myVar = (
//   <div>
//     <h1 className="heading">Hello I am in JSX {4+4}</h1> 
//     <p>Hello i am top level element</p>
//   </div>
// );
// root.render(myVar);

//====================================================
/*OUTPUT: 
Hello I am in JSX 8
Hello i am top level element
*/
//====================================================

/* =============== CSS Styling in JSX: inline css styling =============== */
const paragraphStyling = {
  backgroundColor: 'green',
  color: '#fff',
  fontWeight: '900'
}
const myVar = (
  <div>
    <h1 style={{backgroundColor: 'red'}} className="heading">Hello I am in JSX {4+4}</h1> 
    <p style={paragraphStyling}>Hello i am top level element</p>
  </div>
);
root.render(myVar);

//====================================================
/*OUTPUT: 
Hello I am in JSX 8
Hello i am top level element
*/
//====================================================



















/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
