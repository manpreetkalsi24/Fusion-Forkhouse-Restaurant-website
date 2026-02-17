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

      {/* Popular Dishes Section */}
      <section className="popular-dishes">

        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2>Our Popular Dishes</h2>
            <p>
              Explore a curated selection of delicious dishes crafted with the
              freshest ingredients to satisfy every palate.
            </p>
          </div>

          {/* View All Button */}
          <button className="view-btn">View All</button>
        </div>

        {/* Dishes Grid */}
        <div className="dishes-grid">

          {/* Dish Card 1 */}
          <div className="dish-card">
            <img src="/images/tandoori.jpg" alt="Tandoori Wings" />
            <div className="dish-info">
              <h3>Tandoori Wings</h3>
              <span>$12.99</span>
            </div>
          </div>

          {/* Dish Card 2 */}
          <div className="dish-card">
            <img src="/images/salmon.jpg" alt="Grilled Salmon" />
            <div className="dish-info">
              <h3>Grilled Salmon</h3>
              <span>$24.99</span>
            </div>
          </div>

          {/* Dish Card 3 */}
          <div className="dish-card">
            <img src="/images/salad.jpg" alt="Classic Caesar Salad" />
            <div className="dish-info">
              <h3>Classic Caesar Salad</h3>
              <span>$11.99</span>
            </div>
          </div>

          {/* Dish Card 4 */}
          <div className="dish-card">
            <img src="/images/tiramisu.jpg" alt="Tiramisu" />
            <div className="dish-info">
              <h3>Tiramisu</h3>
              <span>$10.99</span>
            </div>
          </div>

          {/* Dish Card 5 */}
          <div className="dish-card">
            <img src="/images/chaat.jpg" alt="Chaat Papdi" />
            <div className="dish-info">
              <h3>Chaat Papdi</h3>
              <span>$8.99</span>
            </div>
          </div>

          {/* Dish Card 6 */}
          <div className="dish-card">
            <img src="/images/asparagus.jpg" alt="Grilled Asparagus" />
            <div className="dish-info">
              <h3>Grilled Asparagus</h3>
              <span>$7.99</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}