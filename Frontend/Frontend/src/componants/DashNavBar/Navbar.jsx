import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>
      </nav>
      <div className="auth">
        <Link to="/register">Register</Link> / <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar