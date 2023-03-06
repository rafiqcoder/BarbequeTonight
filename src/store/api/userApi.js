import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_url } from "../utils";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
    tagTypes: ["user"],
    endpoints: (builder) => ({
        saveUser: builder.mutation({
            query: (user) => ({
                url: "/user",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["user"],
        }),
    }),
})

export const {
    useSaveUserMutation,
} = userApi;