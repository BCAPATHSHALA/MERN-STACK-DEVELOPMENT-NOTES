import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";
import notesSlice from "./slices/notesSlice";
import grocessarySlice from "./slices/grocessrySlice";

export default configureStore({
  reducer: {
    messageReducer: messageSlice, // all reducers of messageSlice are defined in the reducer messageReducer
    notesReducer: notesSlice,
    grocReducer: grocessarySlice,
  },
});
