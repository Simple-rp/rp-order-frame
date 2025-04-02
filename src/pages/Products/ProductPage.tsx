import Card from '../../components/UI/Card/Card'
import './products.css'
import CartCard from '../../components/Cart/CartCard'
import { useState } from 'react'
import { sendFromWebhook } from '../../service/plateforms/discord'
import { useGetProductsQuery } from '../../service/products'
import Loader from '../../components/UI/Loader/Loader'

interface CartItem {
  item: string
  qte: number
  price: number
}

const ProductPage = ({ code }: any) => {
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

  const handleSubmit = () => {
    sendFromWebhook('test message from tablette\n- Another Test\n- Hello')
  }

  if (isLoading) return <Loader />
  if (error)
    return <div className="message-error">Hmmm... Produits introuvable. Si vous pensez qu'il s'agit d'une erreur, veuillez contacter notre support pour obtenir de l'aide.</div>

  return (
    <div className="product-container">
      {products?.map((p: any, i: number) => (
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
      {true && (
        <CartCard items={cart} handleSubmit={() => handleSubmit()} handleRemove={(item: any) => handleRemove(item)} />
      )}
    </div>
  )
}

export default ProductPage
