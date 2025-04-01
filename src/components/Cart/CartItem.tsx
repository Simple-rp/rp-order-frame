import { formatSplit } from "../../helper/numbers"

const CartItem = ({ item, handleRemove }: any) => {
  return (
    <div className="cart-item">
      <div className="cart-item-1">
        <div className="cart-delete" onClick={handleRemove}>
          X
        </div>
        <div className="">
          {formatSplit(item.qte)}x {item.item}
        </div>
      </div>
      <div>{formatSplit(item.price * item.qte)} $</div>
    </div>
  )
}

export default CartItem
