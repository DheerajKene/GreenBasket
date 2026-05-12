import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About GreenBasket</h1>
        <p className="tagline">Connecting Farmers Directly with Buyers</p>
      </div>

      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            GreenBasket is a revolutionary platform that empowers farmers and consumers by eliminating
            middlemen and creating direct connections. We believe in fair trade, fresh produce, and
            supporting local agriculture.
          </p>
        </section>

        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-item">
              <h3>🛒 Buy Fresh Produce</h3>
              <p>
                Purchase fresh green vegetables, fruits, milk, and dairy products directly from
                local farmers at competitive prices.
              </p>
            </div>
            <div className="offer-item">
              <h3>🏪 General Store Items</h3>
              <p>
                Find daily use products and general store items alongside fresh produce,
                making your shopping experience complete.
              </p>
            </div>
            <div className="offer-item">
              <h3>🌾 Sell Your Products</h3>
              <p>
                Farmers and producers can list their unique, fresh products and connect
                directly with buyers without any middleman interference.
              </p>
            </div>
            <div className="offer-item">
              <h3>🤝 Direct Deals</h3>
              <p>
                No commissions, no extra charges. Just direct, transparent transactions
                between farmers and consumers.
              </p>
            </div>
          </div>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose GreenBasket?</h2>
          <ul className="benefits-list">
            <li><strong>No Middlemen:</strong> Direct farmer-to-consumer connections</li>
            <li><strong>Fresh Products:</strong> Straight from farm to your doorstep</li>
            <li><strong>Fair Prices:</strong> Competitive pricing without extra commissions</li>
            <li><strong>Farmer Support:</strong> Empowering local farmers and producers</li>
            <li><strong>Unique Products:</strong> Access to exclusive, locally-grown items</li>
            <li><strong>Transparent Platform:</strong> Clear pricing and direct communication</li>
          </ul>
        </section>

        <section className="for-farmers">
          <h2>For Farmers & Producers</h2>
          <p>
            GreenBasket is primarily designed for farmers who want to sell their produce directly
            to consumers. Whether you grow unique vegetables, raise dairy cattle, or produce
            specialty items, our platform gives you the perfect opportunity to:
          </p>
          <ul className="farmer-benefits">
            <li>Reach customers directly without intermediaries</li>
            <li>Set your own prices and terms</li>
            <li>Build long-term relationships with buyers</li>
            <li>Showcase your farm-fresh products</li>
            <li>Increase your income by eliminating commission fees</li>
            <li>Connect with consumers who value fresh, local produce</li>
          </ul>
        </section>

        <section className="for-buyers">
          <h2>For Buyers & Consumers</h2>
          <p>
            Experience the difference of buying directly from farmers. Enjoy:
          </p>
          <ul className="buyer-benefits">
            <li>Freshest possible produce and products</li>
            <li>Competitive prices without markup</li>
            <li>Support for local farmers and economy</li>
            <li>Unique, seasonal products not available in stores</li>
            <li>Direct communication with producers</li>
            <li>Peace of mind knowing your purchase supports sustainable farming</li>
          </ul>
        </section>

        <section className="join-us">
          <h2>Join the GreenBasket Community</h2>
          <p>
            Whether you're a farmer looking to sell your harvest or a consumer seeking the
            freshest produce, GreenBasket is your platform for direct, fair, and sustainable
            agriculture commerce. Join us in revolutionizing the way we buy and sell fresh
            food and daily essentials.
          </p>
          <div className="cta-buttons">
            <a href="/register" className="cta-btn primary">Get Started</a>
            <a href="/contact" className="cta-btn secondary">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About