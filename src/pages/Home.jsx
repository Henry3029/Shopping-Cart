import React from 'react';
import './Home.css';

import bigviewImage from '../assets/bigview-image.jpg';
import birthdayImage from '../assets/birthday-image.jpg';
import movieImage from '../assets/movie-image.jpg';

function Home({ onNavigateToShop }) {
  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <section className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Discover high-quality products at unbeatable prices.</p>
        <button className="cta-button" onClick={onNavigateToShop}>
          Shop Now
        </button>
      </section>
      {/*images gallary section*/}
      <div classeName="images-gallary">
        <img src={bigviewImage} alt={"logo image"}/>
        <img src={birthdayImage} alt={"birthday image"}/>
        <img src={movieImage} alt={"the Next movie to watch"}/>
      </div>

      {/* Highlights / Features Section */}
      <section className="features-grid">
        <div className="feature-card">
          <h3>🚀 Fast Shipping</h3>
          <p>Get your items delivered to your doorstep in 2-3 business days.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Payment</h3>
          <p>All transactions are 100% encrypted and safe.</p>
        </div>
        <div className="feature-card">
          <h3>🎧 24/7 Support</h3>
          <p>Our support team is always here to help you with your order.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
