import { createApi } from '@reduxjs/toolkit/query/react'
import { sheetApiParams, sheetBaseQuery } from '../helper/basequery/sheeetBaseQuery'
import { transformSheetResponse } from '../helper/transformers/sheetHandler'

const range = 'clients!A1:G25' // Adjust the range

// Define a service using a base URL and expected endpoints
export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: sheetBaseQuery,
  endpoints: (builder) => ({
    getClientDetails: builder.query<any, any>({
      query: () => `${range}${sheetApiParams}`,
      transformResponse: (response: any, _, arg) => transformSheetResponse(response.values).find((e) => arg === e.code),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClientDetailsQuery } = clientApi
