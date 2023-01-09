import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
