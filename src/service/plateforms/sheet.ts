export async function fetchGoogleSheetData() {
  const sheetId = '17CSVjdgOhVpA5CO9xFhbJK9KEPXBg020rXxCkeK6bgg'
  const apiKey = 'AIzaSyAmCHhq2lAkcY2AvL5JZlgU_8KROl9gdT8'
  const range = 'Tablette!A1:F25' // Adjust the range

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.values
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

