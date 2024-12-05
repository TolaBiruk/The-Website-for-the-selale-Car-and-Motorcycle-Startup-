import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Şelale Electrical and Solar Recycle Motorcycle Company</h1>
          <p>
            Transforming Ethiopia's urban transportation landscape with
            sustainable and inclusive solutions.
          </p>
          <a href="/products" className="cta-button">
            Explore Our Products
          </a>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Electrical & Solar Motorcycle</h3>
            <p>Efficient and eco-friendly for urban commutes.</p>
          </div>
          <div className="product-card">
            <h3>Motorcycle for Disabled</h3>
            <p>Empowering mobility and independence.</p>
          </div>
          <div className="product-card">
            <h3>Electric & Human-Powered Bicycle</h3>
            <p>Sustainable transportation for fitness and leisure.</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We are committed to providing innovative, affordable, and accessible
          transportation options that contribute to a greener and more inclusive
          future for Ethiopia.
        </p>
        <a href="/about" className="cta-button">
          Learn More
        </a>
      </section>
    </div>
  );
}

export default Home;
