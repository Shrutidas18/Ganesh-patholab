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
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
    
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

     
      <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="/packages">Packages</a>
        <a href="#footer">Contact Us</a>
      </div>

    
      <div className="navbar-right">
        <span className="contact-text">Contact Us</span>
        <span className="icon-circle"><FaPhone /></span>
        <span className="contact-number">+91 9861118732</span>
        <span className="icon-circle"><FaEnvelope /></span>
        <span className="contact-email">shreeganeshpatholab99@gmail.com</span>
      </div>

    
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
