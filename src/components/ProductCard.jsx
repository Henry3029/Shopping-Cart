// src/components/ProductCard.jsx
import { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) {
      setQuantity(1);
    } else {
      setQuantity(val);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <div className="quantity-controls">
          <button onClick={handleDecrement} aria-label="Decrease quantity">-</button>
          <input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            min="1"
            aria-label="Quantity"
          />
          <button onClick={handleIncrement} aria-label="Increase quantity">+</button>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product, quantity)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}