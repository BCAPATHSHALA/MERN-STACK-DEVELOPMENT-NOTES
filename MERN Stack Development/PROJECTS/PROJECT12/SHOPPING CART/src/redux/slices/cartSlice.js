import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addTocart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity += 1;
        return;
      } else {
        state.cart.push({
          quantity: 1,
          id: action.payload.id,
          image: action.payload.images[0],
          price: action.payload.price,
          title: action.payload.title,
        });
      }
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    deleteItemList: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity = 0;
        if (cartItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addTocart, removeFromCart, deleteItemList } = cartSlice.actions;

/*
Cart Structure
{
    quentity: 1
    id: 121
}
*/
