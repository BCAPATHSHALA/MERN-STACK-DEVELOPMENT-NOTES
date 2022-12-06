import React from "react";
import Avatar from "./Avatar";

/* =============== REACT Components and Props: User define functional component =============== */
function Card({name,email, image}){

    const cardStyle = {
      padding: '10px',
      border: '2px solid black',
      margin: '20px',
      boxShadow: '2px 2px 2px gray'
    }
    return(
      <div style={cardStyle}>
        <Avatar image={image} name={name}/>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
  

  export default Card;