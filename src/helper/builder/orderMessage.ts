import { formatSplit } from '../numbers'

const lineSepparator = '\n'

const pdcID = '1189995573877682216-'

export const getOrderMessage = (items: any, client: string) => {
  console.log(items, client)
  let message =
    'Hello <@&' + pdcID + '>' + lineSepparator + "Nouvelle commande" + lineSepparator + lineSepparator

  message += '**Client: **' + client + lineSepparator

  message += '**Details de la Commande**' + lineSepparator
  for (let index = 0; index < items.length; index++) {
    const element = items[index]

    message += `* ${element.qte} x ${element.item}\n`
  }
  message += lineSepparator

  const total = items.reduce((a: number, i: any) => a + i.qte * i.price, 0)
  const footer = `Total à facturer: **${formatSplit(total)} $**`

  message += footer
  return message
}
