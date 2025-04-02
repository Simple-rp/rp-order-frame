import { createApi } from '@reduxjs/toolkit/query/react'
import { sheetApiParams, sheetBaseQuery } from '../helper/basequery/sheeetBaseQuery'
import { transformProductResponse } from '../helper/transformers/productHandler'

const productRange = '!A1:F25' // Adjust the range

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: sheetBaseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query<any, string>({
      query: (code) => `${code}${productRange}${sheetApiParams}`,
      transformResponse: (response: any) => transformProductResponse(response.values),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productApi
