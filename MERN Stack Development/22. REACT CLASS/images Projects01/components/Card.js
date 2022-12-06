import React from "react";

// image Component
const Img = (props) => {
  return (
    <div className="card-img">
      <img src={props.source} alt="img" />
    </div>
  );
};

// Title Component
const Title = (props) => {
  return (
    <div className="text-content">
      <h1>{props.videoTitle}</h1>
      <span>{props.views}k views</span> <span>{props.day} days ago</span>
    </div>
  );
};

// Combining All Into a Card
function Card(props) {
  return (
    <div className="card">
      <Img source={props.dynamicImage} />
      <Title
        videoTitle={props.dynamicTitle}
        views={props.dynamicViews}
        day={props.dynamicDay}
      />
    </div>
  );
}

export default Card;