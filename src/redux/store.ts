import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApi";
import productReducer from "../redux/features/productSlice";
import cartReducer from "../redux/features/cartSlice";
import { authApi } from './features/authApi';
import authReducer from './features/authSlice'; // Import your auth reducer
import { paymentApi } from './features/paymentApi'; // Import the payment API slice

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer, // Add the payment API reducer here
    product: productReducer,
    cart: cartReducer,
    auth: authReducer, // Add the auth reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authApi.middleware)
      .concat(paymentApi.middleware), // Add the payment API middleware here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
