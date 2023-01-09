import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
})

export default productSlice.reducer;