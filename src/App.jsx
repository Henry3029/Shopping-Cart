// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Layout Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './App.css';

export default function App() {
  // Initialize state from LocalStorage
const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem('app_cart');
  return savedCart ? JSON.parse(savedCart) : [];
});

// Save to LocalStorage whenever cart updates
useEffect(() => {
  localStorage.setItem('app_cart', JSON.stringify(cart));
}, [cart]);


  // Calculate total badge count for Navbar
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Add or update item in cart
  const handleAddToCart = (product, quantity) => {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Update item quantity directly in Cart Page
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item completely
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="app-container">
      <HeaderComponent cartCount={totalCartCount} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                />
              }
            />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}