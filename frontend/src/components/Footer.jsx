import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-column">
          <h3 className="footer-logo">Eatery</h3>
          <p>Unforgettable culinary experiences await at Heaven Palate.</p>
          <Link to="/reservations" className="footer-btn">
            Reserve your Table
          </Link>
        </div>

        
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h4>Address</h4>
          <p>205 Humber College Blvd, Toronto, ON M9W 5L7</p>

          <h4>Operation Hours</h4>
          <p>Mon-Sat: 9:00 AM - 10:30 PM</p>
          <p>Sunday: 9:30 AM - 9:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Eatery, All rights reserved by Manpreet Kaur.</p>
      </div>
    </footer>
  );
}
