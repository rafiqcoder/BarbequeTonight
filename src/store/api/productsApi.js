import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["BBQProduct"],
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
    // orderBbq: builder.mutation<{}, OrderBbq>({
    //   query: (orderInfo) => ({
    //     url: "/orderBbq",
    //     method: "POST",
    //     body: orderInfo,
    //   }),
    //   invalidatesTags: ["BBQProduct"],
    // }),
  }),
});

export const {
  useGetBBQProductsQuery,
  useAddProductMutation
} = productsApi;
