import React from 'react'
import './Footer.css'
import logo from "../DashNavBar/greenbasket.png"

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-content">
    //     <div className="footer-section contact">
    //       <h3>Contact Us</h3>
    //       <p>Email: support@greenbasket.com</p>
    //       <p>Phone: +1 (555) 123-4567</p>
    //       <p>Address: 123 Green Street, Eco City, EC 12345</p>
    //     </div>
    //     <div className="footer-section social">
    //       <h3>Follow Us</h3>
    //       <div className="social-links">
    //         <a href="https://facebook.com/greenbasket" target="_blank" rel="noopener noreferrer">
    //           <i className="fab fa-facebook-f"></i> Facebook
    //         </a>
    //         <a href="https://instagram.com/greenbasket" target="_blank" rel="noopener noreferrer">
    //           <i className="fab fa-instagram"></i> Instagram
    //         </a>
    //         <a href="https://twitter.com/greenbasket" target="_blank" rel="noopener noreferrer">
    //           <i className="fab fa-twitter"></i> Twitter
    //         </a>
    //         <a href="https://linkedin.com/company/greenbasket" target="_blank" rel="noopener noreferrer">
    //           <i className="fab fa-linkedin-in"></i> LinkedIn
    //         </a>
    //       </div>
    //     </div>
    //     <div className="footer-section links">
    //       <h3>Quick Links</h3>
    //       <a href="/about">About Us</a>
    //       <a href="/help">Help Center</a>
    //       <a href="/contact">Contact</a>
    //       <a href="/privacy">Privacy Policy</a>
    //       <a href="/terms">Terms of Service</a>
    //     </div>
    //     <div className="footer-section features">
    //       <h3>Features</h3>
    //       <p>Fresh Organic Produce</p>
    //       <p>Fast Delivery</p>
    //       <p>Quality Assurance</p>
    //       <p>Customer Support 24/7</p>
    //     </div>
    //   </div>
    //   <div className="footer-bottom">
    //     <p>&copy; 2026 GreenBasket. All rights reserved. | Privacy Concern: We respect your privacy and protect your data.</p>
    //   </div>
    // </footer>
    <div id="footer">
        <div id='MainDiv'>
            <div className="subDiv">
                <div>
                    <ul>
                    <li><a href="">ABOUT US</a></li>
                    <br />
                        <li><a href="https://www.bluefly.com/pages/contact-us">Contact us</a></li>
                        <li><a href="https://www.bluefly.com/pages/faq">Frequently Asked Questions</a></li>
                        <li><a href="https://www.bluefly.com/pages/returns">Shipping & Returns</a></li>
                        <li><a href="https://www.bluefly.com/pages/pre-owned-condition-guide">Pre-Owned Guide</a></li>
                        <li><a href="https://www.bluefly.com/pages/partner-with-bluefly">Sell on Bluefly</a></li>
                       
                        
                    </ul>
                </div>
                <div>
                <ul>
                    <li><a href=""></a></li>
                    <br />
                    <br />
                    <br />
                        <li><a href="https://www.bluefly.com/pages/contact-us">Privacy Policy</a></li>
                        <li><a href="https://www.bluefly.com/pages/faq">Terms & Conditions</a></li>
                        <li><a href="https://www.bluefly.com/pages/returns">Do not sell my personal information</a></li>
                        <li><a href="https://www.bluefly.com/pages/pre-owned-condition-guide">Shop Pay Installments</a></li>
                    </ul>
                </div>
                <div>
                <ul>
                    <li><a href="">SIGN UP AND SAVE</a></li>
                    <br />
                        <li><a href="https://www.bluefly.com/pages/contact-us">PSubscribe to get exclusive offers on designer brands</a></li>
                        <input type="text" placeholder='Enter your email'/>
                        <button>Subscribe</button>
                       
                    </ul>
                </div>
            </div>
            <div className="sub2Div">
                    <img src={logo} alt="" />
                    <h6>© 2024 Bluefly BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</h6>
                
            </div>
        </div>
    </div>
  )
}

export default Footer