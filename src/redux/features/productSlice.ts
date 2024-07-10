import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  _id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  stockQuantity: number;
  rating: number;
  image: string;
};

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
