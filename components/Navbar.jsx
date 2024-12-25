import { useState } from 'react';
import logo from '../src/assets/images/logo.svg';
import { Bell, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo-icon" /> HandyHub
        </Link>
        <nav className={`nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link to="/signup" className="button primary">Join Now</Link>
          <div className="icon-group">
            <ShoppingCart />
            <Bell />
            <User />
          </div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}