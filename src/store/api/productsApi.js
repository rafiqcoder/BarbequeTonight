import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_url } from "../utils";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
  tagTypes: ["BBQProduct","Menu"],
  endpoints: (builder) => ({
    getBBQProducts: builder.query({
      query: () => "/bbq",
      providesTags: ["BBQProduct"],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/bbq",
        method: "POST",
        body: product,
      }),

      invalidatesTags: ["BBQProduct"],
    }),
    addMenu: builder.mutation({
      query: (product) => ({
        url: "/menu",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Menu"],
    }),
    getMenus: builder.query({
      query: () => "/menu",
      providesTags: ["Menu"],
    }),
  }),
});

export const {
  useGetBBQProductsQuery,
  useAddProductMutation,
  useAddMenuMutation,
  useGetMenusQuery,
} = productsApi;
