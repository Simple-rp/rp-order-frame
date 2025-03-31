import ProductList from './ProductList'

const defaultimg = 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg'
const products = [
  {
    title: 'Kit Moteur',
    description: "Un ensemble complet de composants pour l'assemblage et la maintenance de moteurs haute performance.",
    price: '450$',
    img: defaultimg,
  },
  {
    title: 'Acier',
    description: 'Un matériau robuste et polyvalent, idéal pour la construction et la fabrication de quincaillerie.',
    price: '550$',
    img: defaultimg,
  },
  {
    title: 'Cuivre',
    description: 'Un métal conducteur de haute qualité, parfait pour les applications électriques et thermiques.',
    price: '450$',
    img: defaultimg,
  },
  {
    title: 'Acier Compacté',
    description:
      "Une version renforcée de l'acier standard, offrant une résistance accrue et une meilleure durabilité.",
    price: '450$',
    img: defaultimg,
  },
  {
    title: "Lingot d'Or",
    description: 'Un produit exclusif et hautement confidentiel. Manipulation restreinte et discrétion recommandée.',
    price: '450$',
    stock: 0,
    disabled: true,
    show: false,
    img: defaultimg,
  },
]

// Kit Acier AcierCom cuivre
const ProductPage = () => {
  products
  return <ProductList />
}

export default ProductPage
