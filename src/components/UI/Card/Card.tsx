import { useState } from 'react'
import './Card.css'

const Card = ({ title, img, price, description, onAdd }: any) => {
  const [qtite, setQtite] = useState(0)
  return (
    <div className="card">
      <img src={img} width="33%" alt="Card Image" />
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">{title}</div>
          <div className="card-price">{price}</div>
        </div>
        <div className="card-description">{description}</div>
        <div className="card-actions">
          <input
            className="card-input"
            type="number"
            name="Quantité"
            id="qte"
            value={qtite}
            onChange={(e) => setQtite(parseInt(e.target.value))}
          />
          <button className="card-btn" onClick={() => onAdd(qtite)}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
