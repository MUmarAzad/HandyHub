import { useState } from 'react'
// import logo from '../src/assets/images/logo.svg'
// import { Bell, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Navbar } from './Navbar'

export function Layout({ children }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div>
          <div className="container footer-content">
            <div className="footer-section">
              <h3>Follow Us</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Instagram</a></li>
                <li><a href="#" className="footer-link">Facebook</a></li>
                <li><a href="#" className="footer-link">aedIn</a></li>
                <li><a href="#" className="footer-link">Twitter</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick as</h3>
              <ul className="footer-list">
                <li><a href="/pages/how-it-works.js" className="footer-link">How It Works</a></li>
                <li><a href="/pages/about-us.js" className="footer-link">About Us</a></li>
                <li><a href="/pages/contact.js" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 HandyHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

