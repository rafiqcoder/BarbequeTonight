import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./api/generiApi";

const response = async () => {
    const respons = await getProducts();
    console.log(respons);

};
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