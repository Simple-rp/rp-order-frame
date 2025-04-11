import { useState } from 'react'
import { formatSplit } from '../../helper/numbers'
import '../UI/Card/Card.css'
import './cart.css'
import CartItem from './CartItem'

const initialDelivery = { time: 'Maintenant', contact: '', comment: '' }

const CartCard = ({ items, handleSubmit, handleRemove, canOrder }: any) => {
  const [delivery, setDelivery] = useState(initialDelivery)

  const total = items.reduce((a: number, i: any) => a + i.qte * i.price, 0)
  const countItem = items.reduce((a: number, i: any) => a + i.qte, 0)

  const handleOnChange = (e: any) => {
    setDelivery({ ...delivery, [e.target.name]: e.target.value })
  }
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">Panier ({countItem})</div>
        </div>
        <div className="cart-item-container">
          {items.map((p: any, index: number) => (
            <CartItem key={index} item={p} handleRemove={() => handleRemove(p.item)} />
          ))}
        </div>
        <div className="card-actions card-contact">
          <div>Livraison (Heure):</div>
          <input
            className="card-input-sm"
            placeholder="Heure de livraison"
            name="time"
            value={delivery.time}
            onChange={handleOnChange}
            onFocus={() => {
              setDelivery({ ...delivery, time: '' })
            }}
          />
        </div>
        <div className="card-actions card-contact">
          <div>Contact:</div>
          <input
            className="card-input-sm"
            placeholder="Numéro"
            name="contact"
            value={delivery.contact}
            onChange={handleOnChange}
          />
        </div>
        <div className="card-actions card-contact">
          <div>Commentaire:</div>
          <input
            className="card-input-sm"
            placeholder="..."
            name="comment"
            value={delivery.comment}
            onChange={handleOnChange}
          />
        </div>
        <div className="card-actions">
          <div className="card-total">
            Total: <strong>{formatSplit(total)} $</strong>
          </div>
          <button className="card-btn" onClick={() => handleSubmit(delivery)} disabled={!canOrder}>
            Commander
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
