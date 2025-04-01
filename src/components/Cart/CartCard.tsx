import { formatSplit } from '../../helper/numbers'
import '../UI/Card/Card.css'
import './cart.css'
import CartItem from './CartItem'

const CartCard = ({ items, handleSubmit, handleRemove }: any) => {
  const total = items.reduce((a: number, i: any) => a + i.qte * i.price, 0)
  const countItem = items.reduce((a: number, i: any) => a + i.qte, 0)
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
        <div className="card-actions">
          <div className="card-total">
            Total: <strong>{formatSplit(total)} $</strong>
          </div>
          <button className="card-btn" onClick={() => handleSubmit()}>
            Commander
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
