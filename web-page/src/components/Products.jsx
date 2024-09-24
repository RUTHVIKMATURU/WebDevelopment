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
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="Products">
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      
      <Cart cartItems={cartItems} />
      <PriceDetails cartItems={cartItems}/>
    </div>
  );
}

export default Products;
