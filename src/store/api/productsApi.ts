import { BBQProduct, OrderBbq } from "@/src/models/bbq.models copy";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
