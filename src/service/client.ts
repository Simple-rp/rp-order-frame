import { createApi } from '@reduxjs/toolkit/query/react'
import { sheetApiParams, sheetBaseQuery } from '../helper/basequery/sheeetBaseQuery'
import { transformSheetResponse } from '../helper/transformers/sheetHandler'

const clientRange = '!A1:G25' // Adjust the range

// Define a service using a base URL and expected endpoints
export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: sheetBaseQuery,
  endpoints: (builder) => ({
    getClients: builder.query<any, string>({
      query: (code) => `${code}${clientRange}${sheetApiParams}`,
      transformResponse: (response: any) => transformSheetResponse(response.values),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClientsQuery } = clientApi
