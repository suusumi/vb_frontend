import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Comment, GetAllCommentsParams, GetAllCommentsResponse} from './types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/comments`}),
    endpoints: (builder) => ({
        getAllComments: builder.query<GetAllCommentsResponse, GetAllCommentsParams>({
            query: ({search = '', page = 1, limit = 10, filters = {}}) => {
                const queryParams = new URLSearchParams();

                if (search) queryParams.append('search', search);
                queryParams.append('page', String(page));
                queryParams.append('limit', String(limit));

                Object.entries(filters).forEach(([key, value]) => {
                    if (value) {
                        queryParams.append(key, String(value));
                    }
                });

                return `?${queryParams.toString()}`;
            },
        }),
        getCommentById: builder.query<Comment, string>({
            query: (id) => `/${id}`,
        }),
    }),
});

export const {useGetAllCommentsQuery, useGetCommentByIdQuery} = commentsApi;
