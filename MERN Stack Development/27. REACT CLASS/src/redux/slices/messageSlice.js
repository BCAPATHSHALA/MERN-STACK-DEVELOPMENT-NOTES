import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageSlice" /* name of slice */,
  initialState: {
    message: "a" /* initial value of messageSclice is empty */,
  },
  reducers: {
    /*Reducer is used to update the previous state on the bases of action*/
    setMessage: (state, action) => {
      state.message = action.payload; // this action setMessage is to update the message state
    },
    resetMessage: (state, action) => {
      state.message = ""; // thi action resetMessage is to reste the message state
    },
  },
});

export default messageSlice.reducer; // this line is used to combine the actions setMessage and resetMesage in one object

export const { setMessage, resetMessage } = messageSlice.actions; // this line is used to dispatch the actions  setMessage and resetMesage to the components
 