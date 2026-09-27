import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, ShoppingCart } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ isMenuOpen, handleCloseMenu, cartCount = 0}) {
  return (
    <aside className={`mobileDrawer ${isMenuOpen ? 'open' : ''}`}>
      <nav className="sidebarNav">
        <NavLink to="/" onClick={handleCloseMenu} className="sidebarLink">
          <Home className="navIcon" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/shop" onClick={handleCloseMenu} className="sidebarLink">
          <ShoppingBag className="navIcon" />
          <span>Shop</span>
        </NavLink>

        <NavLink to="/cart" onClick={handleCloseMenu} className="sidebarLink">
          <ShoppingCart className="navIcon" />
          <span>Cart</span>
          {cartCount > 0 && (
          <span className="cartBadge">{cartCount}</span>
        )}
        </NavLink>
      </nav>
    </aside>
  );
}
