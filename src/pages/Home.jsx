import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../assets/bg.png";
import villa1 from "../assets/b2.jpg";
import villa2 from "../assets/b3.jpg";
import g1 from "../assets/Gallery/g1.jpg";
import g2 from "../assets/Gallery/g2.jpg";
import g3 from "../assets/Gallery/g3.jpg";

function Navbar() {
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

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="container hero-content">
        <h1>
          Spend your vacation in style <br />
          with Us <br />
          Down South Sri Lanka
        </h1>
        <Link to="/booking" className="btn hero-btn">Book Now</Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container about-section">
      <div className="about-grid">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Ashen's Beach House, your serene getaway on the pristine shores of Downsouth Sri Lanka. Just steps from the crystal-clear Indian Ocean, our beachfront villa offers exceptional comfort, personalized service, and stunning views. Perfect for romantic retreats, family vacations, or special celebrations — Ashen's Beach House is your haven for unforgettable memories.
          </p>
        </div>
        <div className="about-images">
          <img src={villa1} alt="villa 1" />
          <img src={villa2} alt="villa 2" />
        </div>
      </div>
    </section>
  );
}

function Features() {
    return (
<section className="features-section">
  <div className="container">
    <h3>Why Choose Ashen’s Beach House</h3>

    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">🏖️</div>
        <h4>Beachfront Location</h4>
        <p>Wake up to stunning ocean views just steps from your room.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🏡</div>
        <h4>Luxury Rooms</h4>
        <p>Spacious, well-designed rooms with modern comforts.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🌿</div>
        <h4>Peaceful Garden</h4>
        <p>Relax in a calm, green environment perfect for unwinding.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🍽️</div>
        <h4>Fully Equipped Kitchen</h4>
        <p>Enjoy home-style cooking with a modern kitchen setup.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">📶</div>
        <h4>Free Wi-Fi</h4>
        <p>Stay connected with high-speed internet throughout the villa.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🚗</div>
        <h4>Private Parking</h4>
        <p>Safe and convenient parking space for all guests.</p>
      </div>
    </div>
  </div>
</section>

    )
}

function GalleryPreview() {
  return (
    <section id="gallery" className="container gallery-section">
      <h3>Gallery</h3>

      <div className="gallery-grid">
        <img src={g1} alt="villa 1" className="gallery-item" />
        <img src={g2} alt="villa 2" className="gallery-item" />
        <img src={g3} alt="villa 3" className="gallery-item" />
      </div>

      <div className="gallery-btn-wrapper">
        <Link to="/gallery" className="btn">
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container testimonials-section">
      <h3>Customer Feedbacks</h3>
      <p className="muted">What does the customers say about us and the experience</p>
      <div className="testimonial">
        <p>
          Enjoy the wonderful breakfast almost on the beach, get overwhelmed by the sunset from the garden or balcony. This place is the best value for money I ever visited. The hospitality is fantastic. I felt at home immediately.
        </p>
        <div className="author">Marianne from Denmark</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container contact-section">
      <h3>Contact Us</h3>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Message" rows="5" required />
          <button className="btn book-btn" type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h4>Location</h4>
          <p>Down South, Sri Lanka</p>
          <h5>Follow Us</h5>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features/>
        <GalleryPreview />
        <Testimonials/>
        <Contact />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Ashen's Beach House — All rights reserved
      </footer>
    </div>
  );
}
