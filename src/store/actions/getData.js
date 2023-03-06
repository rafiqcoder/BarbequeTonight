import { createAsyncThunk } from "@reduxjs/toolkit";
import { Base_url } from "../utils";

export const fetchCartDbThunk = createAsyncThunk('cartDb/fetch',(email) => {
  // fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/addToCartDb`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         return(data.cartData);
  //     })
  const data = async () => {
    const value = await fetch(`${Base_url}/cart?email=${email}`)
    const res = await value.json()

    return res;

  }
  const cartdata = data()
  return cartdata;
})

