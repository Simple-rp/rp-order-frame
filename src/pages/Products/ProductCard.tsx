const ProductCard = ({ title, description, price, img }: any) => {
  return (
    <div className="group relative">
      <img
        src={img}
        alt="Front of men&#039;s Basic Tee in black."
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-300">
            <div>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </div>
          </h3>
          <p className="mt-1 text-sm text-gray-100">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-200">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
