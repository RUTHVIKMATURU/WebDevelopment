import React from 'react';
import './Cart.css';

function Cart({ cartItems, onAdd, onRemove }) {
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div>
              <p>{item.title}</p>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => onAdd(item)}>Add</button>
              <button onClick={() => onRemove(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
