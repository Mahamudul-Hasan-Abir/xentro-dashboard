import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => "users" }),
    userDetails: builder.query({ query: (id: string) => `users/${id}` }),
  }),
});

export const { useGetUsersQuery, useUserDetailsQuery } = usersApi;
