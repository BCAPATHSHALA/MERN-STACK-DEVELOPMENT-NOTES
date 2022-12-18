import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addItemSection.css";
import { createItemList } from "../../redux/slices/grocessrySlice";
import FieldItemSection from "../FieldItemSection/FieldItemSection";
import { nanoid } from "@reduxjs/toolkit";

function AddItemSection() {
  const [item, setItem] = useState("");

  const arrayItemList = useSelector((state) => state.grocReducer.arrayItemList);
  const lenItemList = arrayItemList.length;
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (item === "") {
      alert("Please fill the item");
    } else {
      dispatch(
        createItemList({
          item,
          id: nanoid(10),
        })
      );
    }
  }

  useEffect(() => {
    setItem("");
  }, [lenItemList]);

  return (
    <div className="addItemSection" id="addItemSection">
      <form onSubmit={handleSubmit}>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="Add Item"
        />
        <button onClick={handleSubmit}>Add Item</button>
      </form>

      <div className="fieldItemSection" id="fieldItemSection">
        <div className="hero-div">
          <FieldItemSection />
        </div>
      </div>
    </div>
  );
}

export default AddItemSection;
