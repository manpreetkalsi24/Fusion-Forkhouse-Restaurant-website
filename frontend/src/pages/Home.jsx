import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

export default function Home() {

  return (
    <div className="home-page">

      {/* Hero Slider */}
      <HeroSlider />


      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">

          <div className="feature-item">
            <div className="feature-icon">
              <img src="/images/ingredients.png" alt="Fresh Ingredients" />
            </div>
            <h3>Fresh & Healthy Ingredients</h3>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <div className="feature-icon">
              <img src="/images/service.svg" alt="Fast Service" />
            </div>
            <h3>Fast & Friendly Service</h3>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <div className="feature-icon">
              <img src="/images/flavours.png" alt="Catering" />
            </div>
            <h3>Authentic Indian Flavors</h3>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about-us">
        <h2>About Fusion Forkhouse</h2>
        <p>
          Welcome to Fusion Forkhouse, where the rich heritage of Indian cuisine
          meets a modern dining experience. Inspired by the diverse flavors of India,
          our kitchen brings together traditional spices, fresh ingredients, and
          contemporary presentation to create unforgettable dishes.
        </p>
        <p>
          From creamy Butter Chicken to sizzling Tandoori platters, every recipe
          is crafted with authenticity and passion. At Fusion Forkhouse, we believe
          food is more than a meal — it's a celebration of culture, warmth, and
          togetherness.
        </p>
      </section>

    </div>
  );
}