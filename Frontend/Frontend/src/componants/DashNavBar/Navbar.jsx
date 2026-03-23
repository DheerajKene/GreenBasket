import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from "./greebasket.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="GreenBasket" className="logo" />
      </div>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
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
      </div>
    </div>
  )
}

export default Navbar