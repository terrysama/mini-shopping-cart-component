import './CartItem.css'

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => updateQty(id, qty + 1);
  const subtractOne = () => updateQty(id, qty - 1);

  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>${price.toFixed(2)}</div>
      <div>
        <button onClick={subtractOne} disabled={qty <= 1}> - </button>
        {qty}
        <button onClick={addOne}> + </button>
      </div>
      <div>Total: ${(price * qty).toFixed(2)}</div>
    </div>
  )
}

export default CartItem