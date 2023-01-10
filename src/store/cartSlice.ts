import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { fetchCartDbThunk } from "./actions/getData";

// const data = async () => {
//  const value = await fetch("http://localhost:5000/addToCartDb")
//   const res = await value.json()
//  
//   return res.cartData;

// }

// const Cartdata = data()
// console.log(Cartdata[0]);

const initialState = {
  cart: [],
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find(
        (p) => p._id === action.payload.product._id
      );
      if (product) {
        product.quantity++;
        product.totalPrice = product.quantity * product.price;
        console.log(product.totalPrice);
        
        state.grandTotal = state.cart.reduce(
          (total, product) =>
            total + product.totalPrice,
          0
        );
      } else {
        state.cart.push({
          ...action.payload.product,
          quantity: 5,
          totalPrice: action.payload.product.price * 5,
        });
        state.grandTotal = state.cart.reduce(
          (total, product) =>
            total + product.totalPrice,
          0
        );
      }
      const Cartdata = state.cart;
      const email = action.payload.userEmail;
      console.log(email);

      fetch(`http://localhost:5000/addToCartDb?email=${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Cartdata),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("added to Cart Db ");
          }
        })
        .catch((error) => console.log(error));
      console.log(state.cart);
    },
    reduceQuantity: (state, action) => {
      const product = state.cart.find((p) => p._id === action.payload._id);
      if (product.quantity > 5) {
        console.log(product.quantity);
        product.quantity--;
        product.totalPrice = product.quantity * product.price;
        state.grandTotal = state.cart.reduce(
          (total, product) =>
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
  extraReducers: (builder) => {
    builder.addCase(fetchCartDbThunk.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.grandTotal = state.cart.reduce(
        (total, product) => total + product.totalPrice,
        0
      );
      console.log(state.grandTotal);
      
    });
  },
});
export const { addToCart, reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;
