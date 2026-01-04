import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

import g1 from "../assets/Gallery/g1.jpg";
import g2 from "../assets/Gallery/g2.jpg";
import g3 from "../assets/Gallery/g3.jpg";
import g4 from "../assets/Gallery/g4.jpg";
import g5 from "../assets/Gallery/g5.jpg";
import g6 from "../assets/Gallery/g6.jpg";
import g7 from "../assets/Gallery/g7.jpg";
import g8 from "../assets/Gallery/g8.jpg";
import g9 from "../assets/Gallery/g9.jpg";
import g10 from "../assets/Gallery/g10.jpg";
import g11 from "../assets/Gallery/g11.jpg";
import g12 from "../assets/Gallery/g12.jpg";
import g13 from "../assets/Gallery/g13.jpg";
import g14 from "../assets/Gallery/g14.jpg";

export default function Gallery() {
  return (
    <div className="app">
      <Navbar />

      <section className="container gallery-section">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Our Gallery
        </h2>

        <div className="gallery-grid">
          <img src={g1} alt="gallery 1" className="gallery-item" />
          <img src={g2} alt="gallery 2" className="gallery-item" />
          <img src={g3} alt="gallery 3" className="gallery-item" />
          <img src={g4} alt="gallery 4" className="gallery-item" />
          <img src={g5} alt="gallery 5" className="gallery-item" />
          <img src={g6} alt="gallery 6" className="gallery-item" />
          <img src={g7} alt="gallery 7" className="gallery-item" />
          <img src={g8} alt="gallery 8" className="gallery-item" />
          <img src={g9} alt="gallery 9" className="gallery-item" />
          <img src={g10} alt="gallery 10" className="gallery-item" />
          <img src={g11} alt="gallery 11" className="gallery-item" />
          <img src={g12} alt="gallery 12" className="gallery-item" />
          <img src={g13} alt="gallery 13" className="gallery-item" />
          <img src={g14} alt="gallery 14" className="gallery-item" />
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Ashen's Beach House
      </footer>
    </div>
  );
}
