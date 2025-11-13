import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#industries">Industries</a>
        </li>
        <li>
          <a href="#outcomes">Why Outcomes</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#process">Our Process</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
      </ul>
      <div className="right-section">
        <button className="get-started-btn">Get Started</button>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
