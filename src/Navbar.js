import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "./Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Desktop links */}
        <div className="navbar-center">
          <a href="#about">About</a>
          <a href="/packages">Packages</a>
          <a href="#footer">Contact Us</a>
        </div>

        {/* Right side (contact info) */}
        <div className="navbar-right">
          <span className="contact-text">Contact Us</span>
          <span className="icon-circle"><FaPhone /></span>
          <span className="contact-number">+91 9861118732</span>
          <span className="icon-circle"><FaEnvelope /></span>
          <span className="contact-email">shreeganeshpatholab99@gmail.com</span>
        </div>

        {/* Hamburger toggle */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/packages" onClick={() => setMenuOpen(false)}>Packages</a>
        <a href="#footer" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>

      {/* Overlay */}
      <div 
        className={`menu-overlay ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(false)} 
      ></div>
    </>
  );
};

export default Navbar;
