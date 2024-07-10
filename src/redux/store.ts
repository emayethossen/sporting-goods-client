import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApi";
import productReducer from "../redux/features/productSlice";
import cartReducer from "../redux/features/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
