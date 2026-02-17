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

      <section className="why-section">

        {/* Left Side Content */}
        <div className="why-left">

          {/* Small heading */}
          <p className="why-subtitle">Why Choose Us</p>

          {/* Main Heading */}
          <h2>
            Choose Quality for an unparalleled taste of India,
            <span> right here in Canada.</span>
          </h2>

          {/* Feature List */}
          <div className="why-features">
            <div className="why-feature-item">Gift Cards</div>
            <div className="why-feature-item">Private Dining Experience</div>
            <div className="why-feature-item">Event & Party Reservations</div>
            <div className="why-feature-item">Sweets & Cakes</div>
          </div>

          {/* contact now Button */}
          <button className="order-btn">Contact Now</button>

        </div>

        {/* Right Side Image */}
        <div className="why-right">
          <img src="/images/why_1_1.png" alt="Fresh Indian Food" />
        </div>

      </section>


    </div>
  );
}