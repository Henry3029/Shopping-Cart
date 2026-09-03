// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <NavLink to="/">
          <h2>APEX STORE</h2>
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>
          Shop
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
      </nav>
    </header>
  );
}