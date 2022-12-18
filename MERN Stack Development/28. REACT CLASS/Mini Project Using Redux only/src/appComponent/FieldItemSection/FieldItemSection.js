import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./fieldItemSection.css";
import { useDispatch } from "react-redux";
import { setTotal, deleteItemList } from "../../redux/slices/grocessrySlice";

function FieldItemSection() {
  const [increment, setIncrement] = useState(0);
  const [rate, setRate] = useState(0);

  const arrayItemList = useSelector((state) => state.grocReducer.arrayItemList);
  const lenItemList = arrayItemList.length;
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(rate);
    dispatch(setTotal(rate));
    return () => {};
  }, [rate]);

  return (
    <>
      {arrayItemList.map((element, index) => {
        return (
          <div className="itemList" key={index}>
            <div className="operation-item">
              <p>{element.item}</p>
            </div>
            <div className="btn-box">
              <p
                className="clickBTN"
                onClick={() => {
                  setIncrement(increment + 1);
                  if (increment >= 0) {
                    setRate(1 + increment);
                  } else {
                    setRate("0");
                  }
                }}
              >
                ➕
              </p>
              <p className="quenty">{increment >= 0 ? increment : "0"}</p>
              <p
                className="clickBTN"
                onClick={() => {
                  setIncrement(increment - 1);
                  if (increment <= 0) {
                    setRate("0");
                  } else {
                    setRate(increment - 1);
                  }
                }}
              >
                ➖
              </p>
            </div>
            <p className="result">Rs. {rate * 10}</p>
            <button
              className="deleteBtn"
              onClick={() => dispatch(deleteItemList(element.id))}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        );
      })}
    </>
  );
}

export default FieldItemSection;
