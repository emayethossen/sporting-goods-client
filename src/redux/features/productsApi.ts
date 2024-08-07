import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  image: string;
  stockQuantity: number;
  description: string;
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
    }),
    getSingleProduct: builder.query({
      query: (_id) => ({
        method: "GET",
        url: `/products/${_id}`,
      }),
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
    }),
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query: ({ _id, ...product }) => ({
        url: `products/${_id}`,
        method: "PATCH",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation<{ success: boolean; _id: string }, string>({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery
} = productsApi;
