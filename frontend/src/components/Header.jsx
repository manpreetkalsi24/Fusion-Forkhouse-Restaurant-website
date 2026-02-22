import { Link } from "react-router-dom";
import "./Header.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">Fusion Forkhouse</Link>

        {/* Nav Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            {/* <li><Link to="/write-review">Write Review</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Book Table Button */}
        <Link to="/reservations" className="book-btn">
          Book Table
        </Link>
      </div>
    </header>
  );
}
