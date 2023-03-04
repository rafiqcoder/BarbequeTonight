import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_url } from "../utils";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
  tagTypes: ["BBQProduct","Menu"],
  endpoints: (builder) => ({
    getBBQProducts: builder.query({
      query: () => "/AllBBQProducts",
      providesTags: ["BBQProduct"],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/addBBQ",
        method: "POST",
        body: product,
      }),

      invalidatesTags: ["BBQProduct"],
    }),
    addMenu: builder.mutation({
      query: (product) => ({
        url: "/addMenu",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Menu"],
    }),
    getMenus: builder.query({
      query: () => "/allMenus",
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
