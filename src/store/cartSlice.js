import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { fetchCartDbThunk } from "./actions/getData";
import { Base_url } from "./utils";

const initialState = {
  cart: [],
  grandTotal: 0,
  userEmail: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setActiveUser: (state,action) => {
      state.userEmail = action.payload;
      // const oldCartData = JSON.parse(localStorage.getItem("cart") || "[]")
      // if (state.userEmail !== undefined) {
      //   console.log(state.userEmail);
      //   fetch(`${Base_url}/addToCartDb?email=${state.userEmail}`)
      //     .then((res) => res.json())
      //     .then((data) => {
      //       if (data.acknowledged) {
      //         state.cart = data;
      //         state.grandTotal = state.cart.reduce(
      //           (total,product) => total + product.totalPrice,
      //           0
      //         )
      //       }
      //     });
      // if (oldCartData) {
      //   state.cart = oldCartData;
      //   state.grandTotal = state.cart.reduce(
      //     (total,product) => total + product.totalPrice,
      //     0)
      // }
    },


    addToCart: (state,action) => {
      const product = state.cart.find(
        (p) => p._id === action.payload.product._id
      );
      if (product) {
        product.quantity++;
        product.totalPrice = product.quantity * product.price;
        state.grandTotal = state.cart.reduce(
          (total,product) => total + product.totalPrice,
          0
        );
      } else {
        state.cart.push({
          ...action.payload.product,
          quantity: 5,
          totalPrice: action.payload.product.price * 5,
        });
        state.grandTotal = state.cart.reduce(
          (total,product) => total + product.totalPrice,
          0
        );
      }
      const Cartdata = state.cart;
      const email = action.payload.userEmail;

      if (email) {
        fetch(`${Base_url}/addToCartDb?email=${email}`,{
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
      }
      // const oldData = JSON.parse(localStorage.getItem("cart") || "[]");
      // if (oldData.length > 0) {
      //   const newData = [...oldData,...Cartdata];
      //   localStorage.setItem("cart",JSON.stringify(newData));
      // }
      // localStorage.setItem("cart",JSON.stringify(Cartdata));
    },
    bbqAddToCart: (state,action) => {
      const email = action.payload.userEmail;
      const quantity = action.payload.quantity;
      console.log(action.payload.product);
      state.cart.push({
        ...action.payload.product,
        quantity: quantity,
        totalPrice: action.payload.product.price * quantity,
      });
      state.grandTotal = state.cart.reduce(
        (total,product) => total + product.totalPrice,
        0
      );

      const Cartdata = state.cart;

      if (email) {
        fetch(`${Base_url}/addToCartDb?email=${email}`,{
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
      }
      // const oldData = JSON.parse(localStorage.getItem("cart") || "[]");
      // if (oldData.length > 0) {
      //   const newData = [...oldData,...Cartdata];
      //   localStorage.setItem("cart",JSON.stringify(newData));
      // }
      // localStorage.setItem("cart",JSON.stringify(Cartdata));
    },

    reduceQuantity: (state,action) => {
      const product = state.cart.find(
        (p) => p._id === action.payload.product._id
      );
      if (product.quantity > 5) {
        console.log(product.quantity);
        product.quantity--;
        product.totalPrice = product.quantity * product.price;
        state.grandTotal = state.cart.reduce(
          (total,product) => total + product.totalPrice,
          0
        );
      } else {
        state.cart = state.cart.filter((p) => p._id !== action.payload._id);
        state.grandTotal = state.cart.reduce(
          (total,product) => total + product.totalPrice,
          0
        );
      }
      const Cartdata = state.cart;
      const email = action.payload.userEmail;

      fetch(`${Base_url}/addToCartDb?email=${email}`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Cartdata)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("added to Cart Db ");
          }
        })
        .catch((error) => console.log(error));
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter((p) => p._id !== action.payload.product._id);
      state.grandTotal = state.cart.reduce(
        (total,product) => total + product.totalPrice,
        0
      );
      const Cartdata = state.cart;
      const email = action.payload.userEmail;
      console.log(email);
      fetch(`${Base_url}/addToCartDb?email=${email}`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Cartdata)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("added to Cart Db ")
          }
        })
        .catch((error) => console.log(error))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartDbThunk.fulfilled,(state,action) => {
      const data = action.payload;
      // console.log(data);


      state.cart = data;
      // state.cart=filteredData;
      //     state.cart = action.payload;
      state.grandTotal = state.cart.reduce(
        (total,product) => total + product.totalPrice,
        0
      );
    });
  },

});
export const { addToCart,reduceQuantity,setActiveUser,removeFromCart,bbqAddToCart } = cartSlice.actions;
export default cartSlice.reducer;
