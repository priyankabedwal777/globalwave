import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="GlobalWave Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About Us
          </a>
        </li>
        <li>
          <a href="#industries" onClick={() => setIsMenuOpen(false)}>
            Industries
          </a>
        </li>
        <li>
          <a href="#whyoutsource" onClick={() => setIsMenuOpen(false)}>
            Why Outsource
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#our-process" onClick={() => setIsMenuOpen(false)}>
            Our Process
          </a>
        </li>
        <li>
          <a href="#resources" onClick={() => setIsMenuOpen(false)}>
            Resources
          </a>
        </li>
        <li>
          <a href="#careers" onClick={() => setIsMenuOpen(false)}>
            Careers
          </a>
        </li>
      </ul>
      <div className="right-section">
        <button 
          className="get-started"
          onClick={() => console.log('Get Started clicked')}
        >
          Get Started
        </button>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
