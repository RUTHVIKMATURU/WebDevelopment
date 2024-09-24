import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css';
import Cart from './Cart';
import PriceDetails from './PriceDetails';

function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    const existingProduct = cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  const handleAdd = (item) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };
  const handleRemove = (item) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0)
    );
  };

  return (
    <div className="Products">
      <h1 className="fs-1 align-center">E-commerce Website</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      
      <Cart cartItems={cartItems} onAdd={handleAdd} onRemove={handleRemove} />
      <PriceDetails cartItems={cartItems} />
    </div>
  );
}

export default Products;
