import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

export default function Home() {

  const [popularDishes, setPopularDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/api/popular")
      .then(res => res.json())
      .then(data => setPopularDishes(data))
      .catch(err => console.error(err));
  }, []);

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
          {/* <button className="view-btn">View All</button> */}

          <Link to="/menu" className="view-btn">
            View All
          </Link>
        </div>

        {/* Dishes Grid */}
        <div className="dishes-grid">
          {popularDishes.map((dish) => (
            <div className="dish-card" key={dish._id}>
              <img 
                src={`http://localhost:8888/${dish.image}`} 
                alt={dish.name} 
              />
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <span>${dish.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose section */}
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
          <Link to="/contact" className="slider-btn">
            Contact Us
          </Link>

        </div>

        {/* Right Side Image */}
        <div className="why-right">
          <img src="/images/why_1_1.png" alt="Fresh Indian Food" />
        </div>

      </section>

    </div>
  );
}