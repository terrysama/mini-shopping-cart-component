import { useState, useEffect } from 'react';
import CartItem from "./CartItem";
import './Cart.css';

function Cart({ initialItems }) {
  const storageState = JSON.parse(window.localStorage.getItem('items'));
  const [items, setItems] = useState(storageState || initialItems);

  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const updateQty = (id, newQty) => {
    const newItems = items.map(item => {
      if(item.id === id) {
        return {...item, qty: newQty}
      }
      return item;
    });
    setItems(newItems);
  }
  const totalSum = items.reduce((total, item) => (
    total + item.price * item.qty
  ), 0).toFixed(2)

  return (
    <div className="Cart">
      <h1 className="Cart-title">Shopping Cart</h1>
      <div className="Cart-items">
        {items.map(item => (
          <CartItem key={item.id} updateQty={updateQty} {...item}/>
        ))}
      </div>
      <h2 className="Cart-total">Total: ${totalSum}</h2>
    </div>
  )
}

export default Cart