import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/payment/',
  }),
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (total: number) => ({
        url: 'create-payment-intent',
        method: 'POST',
        body: {
          amount: total * 100, // Convert to cents
          currency: 'USD',     // Currency can be dynamic
        },
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = paymentApi;
