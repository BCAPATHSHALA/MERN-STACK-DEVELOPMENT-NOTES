import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
 