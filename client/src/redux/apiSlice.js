import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL.replace(/\/api$/, '')}/api`
  : '/api'; // falls back to Vite proxy in local dev

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => '/transactions/getAllTransactions',
      keepUnusedDataFor: 300, // cache for 5 minutes
    }),
    getCases: builder.query({
      query: () => '/cases/getAllCase',
      keepUnusedDataFor: 300,
    }),
    
    getAwards: builder.query({
      query: () => '/awards',
      keepUnusedDataFor: 300,
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useGetCasesQuery,
  useGetAwardsQuery,
} = apiSlice;
