import Card from '../../components/UI/Card/Card'
import './products.css'
import placeholderImage from '../../assets/placeholder.webp'

const products = [
  {
    title: 'Kit Moteur',
    description: "Un ensemble complet de composants pour l'assemblage et la maintenance de moteurs haute performance.",
    price: '450$',
    img: placeholderImage,
  },
  {
    title: 'Acier',
    description: 'Un matériau robuste et polyvalent, idéal pour la construction et la fabrication de quincaillerie.',
    price: '550$',
    img: placeholderImage,
  },
  {
    title: 'Cuivre',
    description: 'Un métal conducteur de haute qualité, parfait pour les applications électriques et thermiques.',
    price: '450$',
    img: placeholderImage,
  },
  {
    title: 'Acier Compacté',
    description:
      "Une version renforcée de l'acier standard, offrant une résistance accrue et une meilleure durabilité.",
    price: '450$',
    img: placeholderImage,
  },
  {
    title: "Lingot d'Or",
    description: 'Un produit exclusif et hautement confidentiel. Manipulation restreinte et discrétion recommandée.',
    price: '450$',
    stock: 0,
    disabled: true,
    show: false,
    img: placeholderImage,
  },
]

const ProductPage = () => {
  products
  return (
    <div className="product-container">
      {products.map((p) => (
        <Card {...p} />
      ))}
    </div>
  )
}

export default ProductPage
