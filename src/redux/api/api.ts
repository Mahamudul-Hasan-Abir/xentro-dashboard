import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.restful-api.dev/",
  }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
});
