import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Fetch menu items
  useEffect(() => {
    axios
      .get("https://restaurant-backend-fjsw.onrender.com/api/menu")
      .then((res) => {
        setMenuItems(res.data.slice(0, 6));
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  // Fetch reviews
  useEffect(() => {
    fetch("http://localhost:8888/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-page">

      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p className="about-intro">
          Welcome to Fusion Forkhouse, where passion meets flavor.
        </p>
      </section>

    </div>
  );
}