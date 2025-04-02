import Card from '../../components/UI/Card/Card'
import './products.css'
import CartCard from '../../components/Cart/CartCard'
import { useState } from 'react'
import { sendFromWebhook } from '../../service/plateforms/discord'
import { useGetProductsQuery } from '../../service/products'
import Loader from '../../components/UI/Loader/Loader'

// const products = [
//   {
//     title: 'Kit Moteur',
//     description: "Un ensemble complet de composants pour l'assemblage et la maintenance de moteurs haute performance.",
//     price: 500,
//     img: 'https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-mechanic-s-toolbox-png-image_13308791.png',
//   },
//   {
//     title: 'Acier',
//     description: 'Un matériau robuste et polyvalent, idéal pour la construction et la fabrication de quincaillerie.',
//     price: 45,
//     img: 'https://satisfactory.wiki.gg/images/4/48/Aluminum_Ingot.png',
//   },
//   {
//     title: 'Cuivre',
//     description: 'Un métal conducteur de haute qualité, parfait pour les applications électriques et thermiques.',
//     price: 55,
//     img: 'https://satisfactory.wiki.gg/images/0/00/Copper_Ingot.png',
//   },
//   {
//     title: 'Acier Compacté',
//     description:
//       "Une version renforcée de l'acier standard, offrant une résistance accrue et une meilleure durabilité.",
//     price: 100,
//     img: 'https://leanwaste.fr/wp-content/uploads/2022/09/toles.png',
//   },
//   {
//     title: "Lingot d'Or",
//     description: 'Un produit exclusif et hautement confidentiel. Manipulation restreinte et discrétion recommandée.',
//     price: 1000,
//     stock: 0,
//     disabled: true,
//     show: false,
//     img: 'https://static.vecteezy.com/system/resources/previews/016/659/386/non_2x/shiny-gold-bars-free-png.png',
//   },
// ]

interface CartItem {
  item: string
  qte: number
  price: number
}

const ProductPage = ({ code }: any) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const { data: products, isLoading } = useGetProductsQuery(code)

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
