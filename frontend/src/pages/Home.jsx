import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);

  // Fetching menu items from backend
  useEffect(() => {
    axios
      .get("https://restaurant-backend-fjsw.onrender.com/api/menu")
      .then((res) => {
        setMenuItems(res.data.slice(0, 6)); 
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Eatery - Savor the Flavor</h1>
          <p>
            Indulge in our handcrafted dishes, where flavors meet love. Join us
            for an unforgettable culinary journey!
          </p>
          <Link to="/reservations" className="btn-primary">
            Make a Reservation
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p className="about-intro">
          Welcome to Eatery, where passion meets flavor. We’re dedicated to
          serving handcrafted dishes with love. Our story began with a desire to
          share warmth through food. Join us for an unforgettable culinary
          experience.
        </p>

        <div className="about-gallery">
          <img src="/images/pic1.png" alt="Cooking process" />
          <img src="/images/pic2.png" alt="Dish plating" />
          <img src="/images/pic3.png" alt="Chef cooking" />
          <img src="/images/pic4.png" alt="Gourmet dish" />
        </div>
      </section>

      {/* Our Menu Section */}
      <section className="our-menu">
        <div className="menu-header">
          <h2>Our Menu</h2>
          <p>
            Explore a curated selection of delicious dishes crafted with the
            freshest ingredients to satisfy every palate.
          </p>
        </div>

        <div className="menu-grid">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <div className="menu-card" key={item._id}>
                <div className="menu-image-container">
                  <img
                    src={
                      item.image?.startsWith("http")
                        ? item.image
                        : `https://restaurant-backend-fjsw.onrender.com${item.image}`
                    }
                    alt={item.name}
                  />
                </div>
                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="loading-text">Loading menu items...</p>
          )}
        </div>


        <div className="view-all">
          <Link to="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Reservation Banner Section */}
      <section className="reservation-banner">
        <div className="banner-content">
          <h2>Elevate your dining experience to a higher quality.</h2>
          <Link to="/reservations" className="btn-primary">
            Make a Reservation
          </Link>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="client-reviews">
        <h2>Customer Reviews</h2>

        <div className="reviews-grid">
          {reviews.length ? (
            reviews.map((review) => (
              <div className="review-card" key={review._id}>
                <p>“{review.message}”</p>
                <h4>{review.name}</h4>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={
                        star <= review.rating
                          ? "fa-solid fa-star star filled"
                          : "fa-regular fa-star star"
                      }
                    ></i>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        <div className="view-all">
          <Link to="/write-review" className="btn-primary">
            Write a Review
          </Link>
        </div>
      </section>

    </div>
  );
}
