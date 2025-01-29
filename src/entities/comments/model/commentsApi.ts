import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Comment} from './types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/comments`}),
    endpoints: (builder) => ({
        getAllComments: builder.query<Comment[], {
            search?: string;
            page?: number;
            limit?: number;
            filters?: Record<string, any>
        }>({
            query: ({search, page = 1, limit = 10, filters = {}}) => {
                const queryParams = new URLSearchParams({
                    ...filters,
                    search: search || '',
                    page: String(page),
                    limit: String(limit),
                }).toString();
                return `?${queryParams}`;
            },
        }),
        getCommentById: builder.query<Comment, string>({
            query: (id) => `/${id}`,
        }),
    }),
});

export const {useGetAllCommentsQuery, useGetCommentByIdQuery} = commentsApi;