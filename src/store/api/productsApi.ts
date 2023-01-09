
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BBQProduct } from "../../models/bbq.models";

export const productsApi = createApi({
  reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    tagTypes: ["BBQProduct"],
  endpoints: (builder) => ({
    getBBQProducts: builder.query<BBQProduct[], void>({
        query: () => "/AllBBQProducts",
        providesTags: ["BBQProduct"],
    }),
    addProduct: builder.mutation<{}, BBQProduct>({
      query: (product) => ({
        url: "/addBBQ",
        method: "POST",
        body: product,
        }),
        invalidatesTags: ["BBQProduct"],
    }),
  }),
});

export const { useGetBBQProductsQuery,useAddProductMutation } = productsApi;
