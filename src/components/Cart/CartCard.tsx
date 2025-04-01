import '../UI/Card/Card.css'

const CartCard = ({ items, handleSubmit }: any) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">Panier ({items.length})</div>
        </div>
        <div className="card-description" style={{ height: '190px' }}>
          {items.map((item: any) => (
            <li>{item}</li>
          ))}
        </div>
        <div className="card-actions">
          <div className="card-total">
            Total: <strong>XXXX $</strong>
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
