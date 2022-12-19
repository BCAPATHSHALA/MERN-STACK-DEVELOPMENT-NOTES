import { configureStore } from "@reduxjs/toolkit";
import grocessarySlice from "./slices/grocessrySlice";

export default configureStore({
  reducer: {
    grocReducer: grocessarySlice,
  },
});
