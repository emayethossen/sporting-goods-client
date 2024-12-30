import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: '/auth/signup',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
    }),
    updateUser: builder.mutation({
      query: (profile) => ({
        url: '/users/me',
        method: 'PUT',
        body: profile,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserQuery,
  useUpdateUserMutation
} = authApi;
