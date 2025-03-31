const Card = ({ title, description, price }: any) => {
  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <span className="badge badge-xs badge-warning">Most Popular</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span className="text-xl">{price}</span>
        </div>
        <p className="min-h-16">{description}</p>
        <div className="card-actions justify-end">
          <div className="join">
            <input
              type="number"
              className="input join-item w-24"
              placeholder="Quantité"
            />
            <button className="btn join-item rounded-r-full">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
