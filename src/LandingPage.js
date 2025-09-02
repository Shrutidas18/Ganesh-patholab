import React from "react";
import Navbar from "./Navbar";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>

      <div className="main-container">
        {/* Left Banner Section */}
        <div className="left-banner">
          <img
            src="/Page1.jpg"
            alt="Lab Posters"
            className="banner-image"
          />
        </div>

        {/* Right Booking Section */}
        <div className="booking-section">
          <h2>BOOK A TEST ONLINE</h2>

          <div className="search-bar">
            <input type="text" placeholder="Search Test and Packages" />
            <button className="search-btn">🔍</button>
          </div>

          <div className="or-text">OR</div>

          <button className="popular-btn">
            Choose Popular Tests / Packages →
          </button>

          <div className="action-buttons">
            <div className="action-card">
              <img src="/report-icon.png" alt="Download Report" />
              <span>Download Report</span>
            </div>
            <div className="action-card">
              <img src="/prescription-icon.png" alt="Upload Prescription" />
              <span>Upload Prescription</span>
            </div>
            <div className="action-card">
              <img src="/location-icon.png" alt="Find Centre" />
              <span>Find Nearest Centre</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
