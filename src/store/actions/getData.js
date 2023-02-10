import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartDbThunk = createAsyncThunk('cartDb/fetch',(email) => {
  // fetch(`http://localhost:5000/addToCartDb`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         return(data.cartData);
  //     })
  const data = async () => {
    const value = await fetch(`http://localhost:5000/addToCartDb?email=${email}`)
    const res = await value.json()

    return res;

  }
  const cartdata = data()
  return cartdata;
})

