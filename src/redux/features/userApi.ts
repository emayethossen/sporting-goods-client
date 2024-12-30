import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => '/users/me',
    }),
    updateProfile: builder.mutation({
      query: (userData) => ({
        url: '/users/me',
        method: 'PUT',
        body: userData,
      }),
    }),
    // Admin-specific endpoints
    getAllUsers: builder.query({
      query: () => '/admin/users',
      providesTags: ['Users'],
    }),
    promoteUserToAdmin: builder.mutation({
      query: (userId) => ({
        url: `/admin/users/${userId}/promote`,
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetAllUsersQuery,
  usePromoteUserToAdminMutation,
  useDeleteUserMutation,
} = userApi;
