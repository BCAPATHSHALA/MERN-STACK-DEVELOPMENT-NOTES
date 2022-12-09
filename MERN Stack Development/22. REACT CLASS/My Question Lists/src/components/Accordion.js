import React, { useState } from "react";
import { questions } from "./API";
import MyAccordion from "./MyAccordion";
import "./style.css";

function Accordion() {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1>My Question Answer List</h1>
        <hr />
        {data.map((curElement) => {
          const { id, question, answer } = curElement;
          return <MyAccordion key={id} {...curElement} />;
        })}
      </section>
    </>
  );
}

export default Accordion;
