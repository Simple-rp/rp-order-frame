export const transformProductResponse = (data: any[]) => {
  if (data?.length === 0) return []
  console.log(data)
  const header = data[0]
  let list = []
  for (let i = 1; i < data.length; i++) {
    const row = data[i]
    let element: any = {}
    for (let j = 0; j < header.length; j++) {
      const key = header[j]
      element[key] = row[j]
    }
    list.push(element)
  }
  console.log(list)
  return list
}
