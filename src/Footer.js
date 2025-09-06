import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer-bg">
      <div className="footer-card">
      
        <div className="footer-section">
          <h2 className="footer-title">PATHOLOGY LAB</h2>
          <p>
            Call Us: <a href="tel:+919861118732">+91 9861118732 / +91 9438743532</a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/919861118732"
              target="_blank"
              rel="noreferrer"
            >
              +91 9861118732 / +91 9438743532
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:shreeganeshpatholab99@gmail.com">
              shreeganeshpatholab99@gmail.com
            </a>
          </p>
          <small>© 2025 Pathology Lab. All rights reserved.</small>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social + Feedback */}
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="footer-social">
            <a 
              href="https://www.facebook.com/share/19b9H4RRWN/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.instagram.com/shreeganeshpatholab?igsh=MXJjbjZieGwycHd5Ng==" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
