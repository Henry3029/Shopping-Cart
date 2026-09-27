import React from 'react';
import './FooterComponent.css';

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerInner">
        <p className="footerText">
          &copy; {currentYear} BigView. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
