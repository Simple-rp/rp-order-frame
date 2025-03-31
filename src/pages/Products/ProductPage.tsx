import Card from "../../components/UI/Card";

const products = [
  {
    title: "Kit Moteur",
    description:
      "Un ensemble complet de composants pour l'assemblage et la maintenance de moteurs haute performance.",
    price: "450$",
  },
  {
    title: "Acier",
    description:
      "Un matériau robuste et polyvalent, idéal pour la construction et la fabrication de quincaillerie.",
    price: "550$",
  },
  {
    title: "Cuivre",
    description:
      "Un métal conducteur de haute qualité, parfait pour les applications électriques et thermiques.",
    price: "450$",
  },
  {
    title: "Acier Compacté",
    description:
      "Une version renforcée de l'acier standard, offrant une résistance accrue et une meilleure durabilité.",
    price: "450$",
  },
  {
    title: "Lingot d'Or",
    description:
      "Un produit exclusif et hautement confidentiel. Manipulation restreinte et discrétion recommandée.",
    price: "450$",
    stock: 0,
    disabled: true,
    show: false,
  },
];

// Kit Acier AcierCom cuivre
const ProductPage = () => {
  return (
    <div className="mt-3 grid h-32 grid-cols-4 place-items-center gap-6">
      {products.map((p) => (
        <Card {...p} />
      ))}
    </div>
  );
};

export default ProductPage;
