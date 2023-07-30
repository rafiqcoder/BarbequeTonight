import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    orderData: [],
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        storeOrderData: (state,action) => {
            state.orderData = action.payload;
        }
    }
})

export const { storeOrderData } = orderSlice.actions;

export default orderSlice.reducer;