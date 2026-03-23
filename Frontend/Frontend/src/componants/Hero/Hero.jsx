import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Buy & Sell <span>Fresh Products</span>
        </h1>

        <h2>Directly from Farmers</h2>

        <p>
          Vegetables, Fruits, Milk & Dairy — Delivered Fresh at Reasonable Prices!
        </p>

        <div className="hero-buttons">
          <button className="shop">Shop Now</button>
          <button className="sell">Sell Your Produce</button>
        </div>

        <div className="features">
          <span>🌿 100% Fresh</span>
          <span>🎯 Fair Prices</span>
          <span>🚚 Home Delivery</span>
        </div>

      </div>

      <div className="hero-right">
        <img src="/images/farmer.jpg" alt="farmer" />
      </div>

    </section>
  );
}

export default Hero;