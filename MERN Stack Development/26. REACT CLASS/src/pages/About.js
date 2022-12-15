import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const { myKey } = location.state;
  console.log(myKey);

  return (
    <>
      <h1>About: {myKey}</h1>
    </>
  );
}

export default About;
