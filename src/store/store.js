import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import authSlice from "./authSlice";
import cartReducer from "./cartSlice.js";

export default configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    userAuth: authSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productsApi.middleware),

});
