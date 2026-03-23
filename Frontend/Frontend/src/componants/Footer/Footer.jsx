import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@greenbasket.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Green Street, Eco City, EC 12345</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com/greenbasket" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://instagram.com/greenbasket" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com/greenbasket" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://linkedin.com/company/greenbasket" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <a href="/about">About Us</a>
          <a href="/help">Help Center</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-section features">
          <h3>Features</h3>
          <p>Fresh Organic Produce</p>
          <p>Fast Delivery</p>
          <p>Quality Assurance</p>
          <p>Customer Support 24/7</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 GreenBasket. All rights reserved. | Privacy Concern: We respect your privacy and protect your data.</p>
      </div>
    </footer>
  )
}

export default Footer