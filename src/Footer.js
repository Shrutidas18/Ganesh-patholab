import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer-card">
        <div className="footer-section">
          <h2 className="footer-title">PATHOLOGY LAB</h2>
          <p>Call Us: <a href="tel:+912261700000">+91 9861118732/+91 9438743532</a></p>
          <p>WhatsApp: <a href="https://wa.me/917208957933" target="_blank" rel="noreferrer">+91 9861118732/+91 9438743532</a></p>
          <p>Email: <a href="mailto:info@pathologylab.com">info@pathologylab.com</a></p>
          <small>© 2025 Pathology Lab. All rights reserved.</small>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
          <button className="feedback-btn">Feedback</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
