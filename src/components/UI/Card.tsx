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
        <h2 className="card-title">{title}</h2>
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
