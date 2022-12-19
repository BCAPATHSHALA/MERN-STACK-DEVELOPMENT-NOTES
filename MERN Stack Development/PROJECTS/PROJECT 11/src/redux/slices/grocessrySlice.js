import { createSlice } from "@reduxjs/toolkit";

const grocessarySlice = createSlice({
  name: "grocessarySlice",
  initialState: {
    arrayItemList: [
      // {
      //   item: "Apple",
      //   id: "1",
      //   quenty: 0,
      //   price: 0,
      // },
    ],
  },
  reducers: {
    createItemList: (state, action) => {
      state.arrayItemList.push(action.payload);
    },
    deleteItemList: (state, action) => {
      state.arrayItemList = state.arrayItemList.filter(
        (note) => note.id !== action.payload
      );
    },
    incBtnCount: (state, action) => {
      state.arrayItemList[action.payload].quenty += 1;
    },
    decBtnCount: (state, action) => {
      if (state.arrayItemList[action.payload].quenty !== 0) {
        state.arrayItemList[action.payload].quenty -= 1;
      } else {
        alert("Quenty is 0");
      }
    },
  },
});

export default grocessarySlice.reducer;

export const { createItemList, deleteItemList, incBtnCount, decBtnCount } =
  grocessarySlice.actions;
