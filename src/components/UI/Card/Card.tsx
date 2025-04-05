import { useState } from 'react'
import './Card.css'

const Card = ({ title, img, price, original_price, disabled, onAdd }: any) => {
  const [qtite, setQtite] = useState<number>()
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">{title}</div>
          <div className="flex">
            {price !== original_price && <div className="card-original-price">{original_price} $</div>}
            <div className="card-price">{price} $</div>
          </div>
        </div>
        {!disabled && (
          <div className="card-actions">
            <input
              className="card-input"
              type="number"
              placeholder="Quantité"
              name="Quantité"
              id="qte"
              value={qtite}
              onChange={(e) => setQtite(parseInt(e.target.value))}
            />
            <button className="card-btn" onClick={() => onAdd(qtite)}>
              Ajouter au panier
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
