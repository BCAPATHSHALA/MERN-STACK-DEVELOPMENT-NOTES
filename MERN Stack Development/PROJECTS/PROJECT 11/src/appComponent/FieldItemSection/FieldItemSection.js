import React from "react";
import "./fieldItemSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decBtnCount,
  deleteItemList,
  incBtnCount,
} from "../../redux/slices/grocessrySlice";

function FieldItemSection() {
  const dispatch = useDispatch();
  const arrayItemList = useSelector((state) => state.grocReducer.arrayItemList);
  console.log(arrayItemList);

  return (
    <>
      {arrayItemList.map((arrayItemList, index) => {
        return (
          <div className="itemList" key={arrayItemList.id}>
            <div className="operation-item">
              <p>{arrayItemList.item}</p>
            </div>
            <div className="btn-box">
              <p
                className="clickBTN"
                onClick={() => {
                  dispatch(incBtnCount(index));
                }}
              >
                ➕
              </p>
              <p className="quenty">{arrayItemList.quenty}</p>
              <p
                className="clickBTN"
                onClick={() => {
                  dispatch(decBtnCount(index));
                }}
              >
                ➖
              </p>
            </div>
            <p className="result">Rs. {arrayItemList.quenty * 10}</p>
            <button
              className="deleteBtn"
              onClick={() => dispatch(deleteItemList(arrayItemList.id))}
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
