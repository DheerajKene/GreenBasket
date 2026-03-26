import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import logo from "../DashNavBar/greenbasket.png"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleSignOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setShowDropdown(false)
    navigate('/login')
  }

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="GreenBasket" className="Navlogo" />
      </div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>
      <div className="navbar-right">
        <div className="auth">
          <NavLink to="/register" className="register">Register</NavLink>
          <NavLink to="/login" className="login">Login</NavLink>
        </div>
        <NavLink to="/cart" className="cart-logo">🛒</NavLink>
        <div className="avatar-container">
          <div className="avatar" onClick={toggleDropdown}>
            👤
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <NavLink to="/account" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                My Account
              </NavLink>
              <button 
                className="dropdown-item signout-btn" 
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar