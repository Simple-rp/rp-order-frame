export const filterByClient = (products: any, client: any) => {
  const filtered = products.filter((e: any) => e.client === client || e.client === '-')
  const ids = new Set()

  return filtered.filter(({ title }: any) => !ids.has(title) && ids.add(title))
}
