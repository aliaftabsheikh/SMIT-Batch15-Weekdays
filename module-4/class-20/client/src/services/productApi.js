import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    refetchOnReconnect: true,
    endpoints: (builder)=>({

        getProducts: builder.query({
            query: ()=> 'products'
        }),

        getProductById: builder.query({
            query: (id)=> `products/${id}`
        }),

        addProduct: builder.mutation({
            query: (product)=> (
                console.log("PRODUCT RECEIVED FROM CLIENT", product),
                
                {
                url: 'products',
                method: 'POST',
                body: product
            })
        }),

        updateProduct: builder.mutation({
            query: (product)=> ({
                url: `products/${product.id}`,
                method: 'PUT',
                body: product
            })    
        }),


        deleteProduct: builder.mutation({
            query: (id)=>({
                url: `products/${id}`,
                method: 'DELETE'
            })
        })
    })
})


export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;