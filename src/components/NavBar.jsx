import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          Ashen's Beach House
        </Link>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <Link to="/gallery">Gallery</Link>
        </nav>

        <Link to="/booking" className="btn book-btn">Book Now</Link>
      </div>
    </header>
  );
}
