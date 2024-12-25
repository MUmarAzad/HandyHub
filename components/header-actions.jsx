'use client'//'use client'

import { useState } from 'react'

import { Bell, ShoppingCart, User } from 'lucide-react'

export function HeaderActions() {
  const [cartCount, setCartCount] = useState(3)

  return (
    <div className="header-actions">
      <a href="/signup" className="button primary">Join Now</a>
      <div className="icon-group">
        <div className="cart-icon">
          <ShoppingCart />
          {cartCount > 0 && <span className="cart-notification">{cartCount}</span>}
        </div>
        <Bell />
        <div className="profile-icon">
          <User />
          <div className="profile-dropdown">
            <a href="/profile">My Profile</a>
            <a href="/orders">My Orders</a>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  )
}

