const CartItem = ({ item }: any) => {
  return (
    <div className="cart-item">
      <div className="cart-item-1">
        <div className="cart-delete">X</div>
        <div className="">
          {item.qte}x {item.item}
        </div>
      </div>
      <div>{item.price * item.qte} $</div>
    </div>
  )
}

export default CartItem
