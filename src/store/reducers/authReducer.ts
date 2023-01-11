import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    activeUser:null,
    isLoading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
