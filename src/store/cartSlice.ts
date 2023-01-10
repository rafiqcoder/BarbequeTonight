import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: [],
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find((p) => p._id === action.payload._id);
      if (product) {
        product.quantity++;
        product.totalPrice = product.quantity * product.price;
        state.grandTotal = state.cart.reduce(
          (total: any, product: { totalPrice: any }) =>
            total + product.totalPrice,
          0
        );
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 5,
          totalPrice: action.payload.price * 5,
        });
        state.grandTotal = state.cart.reduce(
          (total: number, product: { totalPrice: number }) =>
            total + product.totalPrice,
          0
        );
        fetch("http://localhost:5000/addToCartDb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state.cart),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("added to Cart Db ");
            }
          })
          .catch((error) => console.log(error));
      }
    },
    reduceQuantity: (state, action) => {
      const product = state.cart.find((p) => p._id === action.payload._id);
      if (product.quantity > 5) {
        console.log(product.quantity);
        product.quantity--;
        product.totalPrice = product.quantity * product.price;
        state.grandTotal = state.cart.reduce(
          (total: number, product: { totalPrice: number }) =>
            total + product.totalPrice,
          0
        );
      } else {
        state.cart = state.cart.filter((p) => p._id !== action.payload._id);
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
