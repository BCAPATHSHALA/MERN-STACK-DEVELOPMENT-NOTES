import React from "react";
// CARD:02 image component
const ImgCard2 = (props) => {
  return (
    <div className="img-card2">
      <img src={props.source} alt="img" />
    </div>
  );
};

// CARD:02 text content component
const TextCard2 = (props) => {
  return (
    <div className="text-card2">
      <h1>{props.cardHeading}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

// CARD:02 button component
const BtnCard2 = () => {
  return (
    <div className="primaryBtn">
      <a href="#">Learn more</a>
    </div>
  );
};

// CARD:02 combine component
function CombineCard2({ dynamicImage, dynamicHeading, dynamicDesc }) {
  return (
    <div className="combineCard2">
      <ImgCard2 source={dynamicImage} />
      <TextCard2 cardHeading={dynamicHeading} desc={dynamicDesc} />
      <BtnCard2 />
    </div>
  );
}

export default CombineCard2;
