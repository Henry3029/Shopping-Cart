// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import './Navbar.css';

export default function Navbar({cartCount = 0}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Helper functions to update state
  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="navbarHeader">
    <NavLink to="/" className="navbarLogo">
        My Shop
      </NavLink>

      {/* Desktop Quick Cart Icon with Badge */}
      <NavLink to="/cart" className="cartBadgeLink">
        <ShoppingCart className="w-6 h-6 text-slate-300" />
        {totalCartCount > 0 && (
          <span className="cartBadge">{totalCartCount}</span>
        )}
      </NavLink>
      
      {/* Hamburger / Close Menu Toggle Button */}
      <button 
        className="menuToggleButton" 
        onClick={handleToggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        {cartCount > 0 && (
          <span className="cartBadge">{cartCount}</span>
        )}
      </button>

      {/* Backdrop overlay (closes drawer when tapping outside on mobile) */}
      {isMenuOpen && (
        <div className="backdropOverlay" onClick={handleCloseMenu} />
      )}

      {/* Sidebar Component with open/close state passed down */}
      <Sidebar 
        isMenuOpen={isMenuOpen} 
        handleCloseMenu={handleCloseMenu} 
        cartCount={cartCount}
      />
    </header>
  );
}
