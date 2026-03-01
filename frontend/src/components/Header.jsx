import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          Fusion Forkhouse
        </Link>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
            <li><Link to="/reservations" onClick={closeMenu}>Reservations</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>

          <Link to="/reservations" className="book-btn mobile-btn" onClick={closeMenu}>
            Book Table
          </Link>
        </nav>

        {/* Book Table Button */}
        <Link to="/reservations" className="book-btn">
          Book Table
        </Link>
      </div>
    </header>
  );
}
