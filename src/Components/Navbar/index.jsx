import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className="navbar">
    //   <div className="logo">
    //     <img src="/logo.png" alt="Logo" />
    //   </div>
    //   <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
    //     <li>
    //       <a href="#about">About Us</a>
    //     </li>
    //     <li>
    //       <a href="#industries">Industries</a>
    //     </li>
    //     <li>
    //       <a href="#outcomes">Why Outcomes</a>
    //     </li>
    //     <li>
    //       <a href="#services">Services</a>
    //     </li>
    //     <li>
    //       <a href="#process">Our Process</a>
    //     </li>
    //     <li>
    //       <a href="#resources">Resources</a>
    //     </li>
    //     <li>
    //       <a href="#careers">Careers</a>
    //     </li>
    //   </ul>
    //   <div className="right-section">
    //     <button className="get-started-btn">Get Started</button>
    //     <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    //       ☰
    //     </button>
    //   </div>
    // </nav>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#industries">Industries</a>
        </li>
        <li>
          <a href="#whyoutsource">Why Outsource</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#our-process">Our Process</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
      </ul>
      <button className="get-started">Get Started</button>
      {/* <button className="menu-toggle">
        <AiOutlineBars />
      </button> */}
    </nav>
  );
};

export default Navbar;
