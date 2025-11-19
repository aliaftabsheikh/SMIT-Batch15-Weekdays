import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/"}),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: ()=> "products"
        }),
        addProducts: builder.mutation({
            query: (product)=>({
                url: "/products",
                method: "POST",
                body: product,
            })
        })
    })
})

export const {useGetProductsQuery, useAddProductsMutation} = productApi;