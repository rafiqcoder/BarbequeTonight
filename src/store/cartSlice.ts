import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity++;
        product.totalPrice = product.quantity * product.price;
        state.grandTotal = state.cart.reduce(
          (total, product) => total + product.totalPrice,
          0
        );
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 5,
          totalPrice: action.payload.price * 5,
        });
        state.grandTotal = state.cart.reduce(
          (total, product) => total + product.totalPrice,
          0
        );
      }
    },
    reduceQuantity: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload.id);
      if (product.quantity > 5) {
        console.log(product.quantity);
        product.quantity--;
        product.totalPrice = product.quantity * product.price;
        state.grandTotal = state.cart.reduce(
          (total, product) => total + product.totalPrice,
          0
        );
      } else {
        state.cart = state.cart.filter((p) => p.id !== action.payload.id);
        state.grandTotal = state.cart.reduce(
          (total, product) => total + product.totalPrice,
          0
        );
      }
    },
  },
});
export const { addToCart, reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;
