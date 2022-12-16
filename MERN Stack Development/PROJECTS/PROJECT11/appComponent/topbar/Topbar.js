import React from "react";
import "./topbar.css";
import { useSelector } from "react-redux";

function Topbar() {
  // const [totalQuenty, setTotalQuenty] = useState(0);
  const total = useSelector((state) => state.grocReducer.total);
  const arrayItemList = useSelector((state) => state.grocReducer.arrayItemList);
  const lenItemList = arrayItemList.length;
  console.log(lenItemList);

  return (
    <div className="topbar" id="topbar">
      <i className="fa-brands fa-angellist"></i>
      <p>
        <i className="fa-solid fa-layer-group"></i>Total quantity:{" "}
        {(total.length - 2) * lenItemList}
      </p>
      <p>
        <i className="fa-solid fa-receipt"></i>Total amount:{" "}
        {((total.length - 2) * 10)*lenItemList}
      </p>
    </div>
  );
}

export default Topbar;
