import React from "react";
import "./topbar.css";
import { useSelector } from "react-redux";

function Topbar() {
  const arrayItemList = useSelector((state) => state.grocReducer.arrayItemList);
  let ammount = 0;
  let quenty = 0;

  arrayItemList.forEach((element) => {
    quenty += element.quenty;
  });

  return (
    <div className="topbar" id="topbar">
      <i className="fa-brands fa-angellist"></i>
      <p>
        <i className="fa-solid fa-layer-group"></i>Total quantity:{quenty}
      </p>
      <p>
        <i className="fa-solid fa-receipt"></i>Total amount:
        {quenty === 0 ? ammount : quenty * 10}
      </p>
    </div>
  );
}

export default Topbar;
