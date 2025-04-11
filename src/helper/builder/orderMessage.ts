import { formatSplit } from '../numbers'

const lineSepparator = '\n'
const doubleSepparator = '\n\n'

const pdcID = '1189995573877682216'

export const getOrderMessage = (items: any, client: any, delivery: any, isRecap: boolean = false) => {
  const roleToTag = isRecap ? client?.roleId : pdcID
  let message = `Hello <@&${roleToTag}>${lineSepparator}**${
    isRecap ? 'Votre commande a bien été reçu' : 'Nouvelle commande'
  }**${doubleSepparator}`

  message += '**Client: **' + client?.name + lineSepparator

  message += '**Details de la Commande**' + lineSepparator
  for (let index = 0; index < items.length; index++) {
    const element = items[index]

    message += `* ${element.qte} x ${element.item}\n`
  }
  message += lineSepparator

  const total = items.reduce((a: number, i: any) => a + i.qte * i.price, 0)
  const footer = `Total à facturer: **${formatSplit(total)} $**`

  const deliveryDetails = `Numéro à contacter: **${delivery?.contact}**${lineSepparator}Heure de livraison souhaité: **${delivery?.time}**${lineSepparator}Commentaire: **${delivery?.comment}**${lineSepparator}`

  message += footer + doubleSepparator + deliveryDetails

  if (isRecap) message += lineSepparator + '*Si vous avez des choses à ajouter, ouvrez un fil sur ce message*'
  else message += lineSepparator + '*Ouvrez un fil sur ce message pour traiter la commande!*'
  return message
}
