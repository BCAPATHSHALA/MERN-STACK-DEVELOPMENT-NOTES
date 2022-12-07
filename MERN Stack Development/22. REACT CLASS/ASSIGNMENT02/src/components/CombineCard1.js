import React from "react";
// CARD:01 text component
const TextCard1 = () => {
  return (
    <div className="card1-text">
      <h2>Your user research Swiss Army knife</h2>
    </div>
  );
};

// CARD:01 button component
const BtnCard1 = () => {
  return (
    <div className="primaryBtn">
      <a href="#">See all features</a>
    </div>
  );
};

// CARD:01 combine component
const CombineCard1 = () => {
  return (
    <div className="combineCard1">
      <TextCard1 />
      <BtnCard1 />
    </div>
  );
};

export default CombineCard1;
