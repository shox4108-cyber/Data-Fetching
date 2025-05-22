import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 900,
        }),
        getTodos: builder.query({
            query: () => '/todos',
            keepUnusedDataFor: 900,
        }),
        getPosts: builder.query({
            query: () => '/posts',
            keepUnusedDataFor: 900,
        }),
        getDetails: builder.query({
            query: ({type, id}) => `/${type}/${id}`,
            keepUnusedDataFor: 900,
        }),
    })
})

export const {useGetUsersQuery, useGetTodosQuery, useGetPostsQuery, useGetDetailsQuery} = api