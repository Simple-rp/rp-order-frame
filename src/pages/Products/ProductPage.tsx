import Card from '../../components/UI/Card/Card'
import './products.css'
import CartCard from '../../components/Cart/CartCard'

const products = [
  {
    title: 'Kit Moteur',
    description: "Un ensemble complet de composants pour l'assemblage et la maintenance de moteurs haute performance.",
    price: '450$',
    img: 'https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-mechanic-s-toolbox-png-image_13308791.png',
  },
  {
    title: 'Acier',
    description: 'Un matériau robuste et polyvalent, idéal pour la construction et la fabrication de quincaillerie.',
    price: '550$',
    img: 'https://satisfactory.wiki.gg/images/4/48/Aluminum_Ingot.png',
  },
  {
    title: 'Cuivre',
    description: 'Un métal conducteur de haute qualité, parfait pour les applications électriques et thermiques.',
    price: '450$',
    img: 'https://satisfactory.wiki.gg/images/0/00/Copper_Ingot.png',
  },
  {
    title: 'Acier Compacté',
    description:
      "Une version renforcée de l'acier standard, offrant une résistance accrue et une meilleure durabilité.",
    price: '450$',
    img: "https://leanwaste.fr/wp-content/uploads/2022/09/toles.png",
  },
  {
    title: "Lingot d'Or",
    description: 'Un produit exclusif et hautement confidentiel. Manipulation restreinte et discrétion recommandée.',
    price: '450$',
    stock: 0,
    disabled: true,
    show: false,
    img: "https://static.vecteezy.com/system/resources/previews/016/659/386/non_2x/shiny-gold-bars-free-png.png",
  },
]

const ProductPage = () => {
  products
  return (
    <div className="product-container">
      {products.map((p) => (
        <Card {...p} onAdd={(e: number) => console.log(e)} />
      ))}
      {true && <CartCard title="Panier" items={['a', 'b', 'c']} />}
    </div>
  )
}

export default ProductPage
