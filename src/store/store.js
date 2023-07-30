import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { userApi } from "./api/userApi";
import authSlice from "./authSlice";
import cartReducer from "./cartSlice.js";
import orderSlice from "./orderSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    userAuth: authSlice,[userApi.reducerPath]: userApi.reducer,
    activeOrder: orderSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productsApi.middleware,userApi.middleware),

});
