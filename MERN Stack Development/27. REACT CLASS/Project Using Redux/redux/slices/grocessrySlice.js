import { createSlice } from "@reduxjs/toolkit";

const grocessarySlice = createSlice({
  name: "grocessarySlice",
  initialState: {
    arrayItemList: [],
    count: 0,
    total: [],
    quenty: 0,
  },
  reducers: {
    createItemList: (state, action) => {
      // state.notes = [...state.notes, action.payload];
      state.arrayItemList.push(action.payload);
    },
    deleteItemList: (state, action) => {
      state.arrayItemList = state.arrayItemList.filter(
        (note) => note.id !== action.payload
      );
    },
    incBtnCount: (state, action) => {
      state.count = action.payload;
    },
    setTotal: (state, action) => {
      state.total.push(action.payload);
    },
  },
});

export default grocessarySlice.reducer;

export const { createItemList, setTotal, incBtnCount, deleteItemList } =
  grocessarySlice.actions;
