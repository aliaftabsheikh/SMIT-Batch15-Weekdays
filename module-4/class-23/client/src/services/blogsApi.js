import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const blogsApi = createApi({
    reducerPath: "blogsApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    refetchOnReconnect: true,
    endpoints: (builder)=>({

        getBlogs: builder.query({
            query: ()=> 'blogs'
        }),

        getBlogById: builder.query({
            query: (id)=> `blogs/${id}`
        }),

        addBlog: builder.mutation({
            query: (blog)=> (
                console.log("BLOG RECEIVED FROM CLIENT", blog),
                
                {
                url: 'blogs',
                method: 'POST',
                body: blog
            })
        }),

        updateBlog: builder.mutation({
            query: (blog)=> ({
                url: `blogs/${blog.id}`,
                method: 'PUT',
                body: blog
            })    
        }),


        deleteBlog: builder.mutation({
            query: (id)=>({
                url: `blogs/${id}`,
                method: 'DELETE'
            })
        })
    })
})


export const {
    useGetBlogsQuery,
    useGetBlogByIdQuery,
    useAddBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation
} = blogsApi;