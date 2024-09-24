import React, { useState, useEffect } from 'react';
import './PriceDetails.css';

function PriceDetails({ cartItems }) {
  const [total, setTotal] = useState(0);
  const couponDiscount = 50;
  const platformFee = 10;
  const shippingCharges = 20;

  // Calculate total price whenever cartItems changes
  useEffect(() => {
    let newTotal = 0;
    cartItems.forEach((item) => {
      newTotal += item.price * item.quantity;
    });
    setTotal(newTotal);
  }, [cartItems]); // Recalculates when cartItems changes

  // Calculate the total amount after applying coupon and other fees
  const totalAmount = total > 0 ? total - couponDiscount + platformFee + shippingCharges : 0;

  return (
    <div className="price-details-container">
      <h4 className="price-details-heading">Price Details</h4>
      <div className="price-details-item">
        <p>Total MRP</p>
        <p>₹{total.toFixed(2)}</p>
      </div>
      <div className="price-details-item">
        <p>Coupon Discount</p>
        <p>₹{couponDiscount}</p>
      </div>
      <div className="price-details-item">
        <p>Platform Fee</p>
        <p>₹{platformFee}</p>
      </div>
      <div className="price-details-item">
        <p>Shipping Charges</p>
        <p>₹{shippingCharges}</p>
      </div>
      <div className="price-details-item total">
        <p>Total Amount</p>
        <p>₹{totalAmount.toFixed(2)}</p>
      </div>
      <button className="place-order-btn">Place Order</button>
    </div>
  );
}

export default PriceDetails;
