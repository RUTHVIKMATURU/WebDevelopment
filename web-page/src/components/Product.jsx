import React from 'react';
import './Product.css';

function Product({ product, addToCart }) {
  function handleAdd() {
    addToCart(product);
  }

  return (
    <div className="Product display-1">
      <img src={product.image} alt={product.title} />
      <p className="lead fs-4">{product.title}</p>
      <span>&#9733; {product.rating.rate} {product.rating.count} reviews</span>
      <h3>₹{product.price}</h3>
      <button type="button" onClick={handleAdd}>Add to cart</button>
    </div>
  );
}

export default Product;
