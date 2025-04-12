import Card from '../../components/UI/Card/Card'
import './products.css'
import CartCard from '../../components/Cart/CartCard'
import { useState } from 'react'
import { sendFromWebhook } from '../../service/plateforms/discord'
import { useGetProductsQuery } from '../../service/products'
import Loader from '../../components/UI/Loader/Loader'
import { getOrderMessage } from '../../helper/builder/orderMessage'
import { filterByClient } from '../../helper/transformers/products'

interface CartItem {
  item: string
  qte: number
  price: number
}

const ProductPage = ({ code, client }: any) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const { data: products, error, isLoading } = useGetProductsQuery(code)

  const handleCartAdd = (item: any) => {
    if (item.qte <= 0) return
    const itemFind = cart.find((e) => e.item === item.item)
    if (itemFind) {
      setCart(
        cart.map((cartItem) => (cartItem.item === item.item ? { ...cartItem, qte: cartItem.qte + item.qte } : cartItem))
      )
    } else setCart([...cart, item])
  }
  const handleRemove = (itemName: any) => {
    const itemFind = cart.find((e) => e.item === itemName)
    if (itemFind) {
      setCart(cart.filter((e) => e.item !== itemName))
    }
  }

  const handleSubmit = (delivery: any) => {
    if (cart.length === 0) return
    const msgOrder = getOrderMessage(cart, client, delivery)
    sendFromWebhook(msgOrder) // send for PDC

    if (client?.webhook) {
      const clientRecapMessage = getOrderMessage(cart, client, delivery, true)
      sendFromWebhook(clientRecapMessage, client.webhook) // Send for client just recap
    }
    setCart([])
  }

  if (isLoading) return <Loader />
  if (error)
    return (
      <div className="message-error">
        Hmmm... Produits introuvable. Si vous pensez qu'il s'agit d'une erreur, veuillez contacter notre support pour
        obtenir de l'aide.
      </div>
    )

  return (
    <div className="product-container">
      {filterByClient(products, client)?.map((p: any, i: number) => (
        <Card
          key={i}
          {...p}
          onAdd={(e: number) =>
            handleCartAdd({
              item: p.title,
              qte: e,
              price: p.price,
            })
          }
        />
      ))}
      <CartCard
        items={cart}
        handleSubmit={(delivery: any) => handleSubmit(delivery)}
        handleRemove={(item: any) => handleRemove(item)}
        canOrder={cart.length > 0}
      />
    </div>
  )
}

export default ProductPage
