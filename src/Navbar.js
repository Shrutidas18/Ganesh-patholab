import React, { useState } from "react";
import "./Navbar.css";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "./Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Center: Menu Links */}
      <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <a href="/take-test">Take a Test</a>
        <a href="/doctors">Doctors</a>
        
        <a href="/about">About Us</a>
       
       
      </div>

      {/* Right: Contact Info */}
      <div className="navbar-right">
        <span className="contact-text">Contact Us</span>
        <span className="icon-circle">
          <FaPhone />
        </span>
        <span className="contact-number">091 -1111 -2222</span>
        <span className="icon-circle">
          <FaEnvelope />
        </span>
        <span className="contact-email">customer.care@abc.com</span>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
