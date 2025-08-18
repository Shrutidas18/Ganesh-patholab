import React from "react";
import "./Navbar.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "./Logo.jpg"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
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
    </div>
  );
};

export default Navbar;
