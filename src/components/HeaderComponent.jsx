import React from 'react';
import Navbar from './Navbar';
import './HeaderComponent.css'; // Make sure the filename matches your actual CSS file

export default function HeaderComponent({cartCount}) {
  return (
    <header className="header">
      <div className="headerInner">
        <Navbar cartCount={cartCount} />
      </div>
    </header>
  );
}
