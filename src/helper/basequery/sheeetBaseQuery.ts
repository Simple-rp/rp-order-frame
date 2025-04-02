import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const sheetId = '17CSVjdgOhVpA5CO9xFhbJK9KEPXBg020rXxCkeK6bgg' // cabinet sheet
export const sheetApiKey = 'AIzaSyAmCHhq2lAkcY2AvL5JZlgU_8KROl9gdT8'
export const sheetApiParams = `?key=${sheetApiKey}`

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/`

export const sheetBaseQuery = fetchBaseQuery({ baseUrl: url })