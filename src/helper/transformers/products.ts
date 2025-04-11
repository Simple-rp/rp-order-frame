export const filterByClient = (products: any, client: any) => {
  const filtered = products.filter((e: any) => (e.client === client?.code || e.client === '-') && e.hide !== true)
  const ids = new Set()
  const list = filtered
    .reverse()
    .filter(({ title }: any) => !ids.has(title) && ids.add(title) && !!title)
    .reverse()
  return list
}
