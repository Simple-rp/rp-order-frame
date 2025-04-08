export const transformSheetResponse = (data: any[]) => {
  if (data?.length === 0) return []
  const header = data[0]
  let list = []
  for (let i = 1; i < data.length; i++) {
    const row = data[i]
    let element: any = {}
    for (let j = 0; j < header.length; j++) {
      const key = header[j]
      let value = row[j]
      if (value && (value.toUpperCase() === 'TRUE' || value.toUpperCase() === 'FALSE'))
        value = value.toUpperCase() === 'TRUE'
      element[key] = value
    }
    list.push(element)
  }
  return list
}
