import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi({
    reducerPath: 'productApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/products',
    }),

    endpoints: (builder)=>({
        getAllProducts: builder.query({
            query: ()=> '/get-all-products'
        }),

        addProduct: builder.mutation({
            query: (newProduct)=>({
                url: '/add-product',
                method: 'POST',
                body: newProduct
            })
        }),

        updateProduct: builder.mutation({
            query: (updatedProduct) => ({
                url: `/update-product/${updatedProduct.id}`,
                method: 'PUT',
                body: updatedProduct
            })
        }),

        deleteProduct: builder.mutation({
            query: (id)=>({
                url: `/delete-product/${id}`,
                method: 'DELETE',
            })
        })
    })
})


export const { useGetAllProductsQuery, useAddProductMutation , useUpdateProductMutation, useDeleteProductMutation } = productApi;