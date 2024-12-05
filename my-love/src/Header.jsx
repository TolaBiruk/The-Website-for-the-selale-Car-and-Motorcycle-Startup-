import React from 'react';
import './Header.css'; // We'll create this CSS file later

function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
