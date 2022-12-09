import React from "react";

function File2(props) {
  return (
    <div className="flexBox">
      <i
        onClick={() => {
          props.onSelectFun(props.id);
        }}
        className="fa-solid fa-trash"
        arial-hidden="ture"
      ></i>
      <li>{props.anyData}</li>
    </div>
  );
}

export default File2;