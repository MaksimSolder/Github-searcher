import {createApi, EndpointBuilder, fetchBaseQuery, RootState} from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
   reducerPath: 'github/api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://dummyjson.com',

   }),
   endpoints: (builder) => ({
      searchUsers: builder.query<any, any>({
         query: (arg:any) => `products?skip=${arg.skip}&limit=${arg.limit}`,
      }),
   }),
});