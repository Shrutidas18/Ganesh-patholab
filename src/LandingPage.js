import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const packagesData = [
    { title: "Diabetes", tests: [
      "Jaanch - Diabetic Screen (48 Parameters)",
      "Jaanch Diabetic Profile - Basic (52 Parameters)",
      "Jaanch Diabetic Profile - Advanced (66 Parameters)"
    ]},
    { title: "Thyroid", tests: [
      "Jaanch Thyroid Profile - Basic (8 Parameters)",
      "Jaanch Thyroid Profile - Advanced (8 Parameters)"
    ]},
    { title: "Infertility", tests: [
      "Jaanch - Infertility Profile Basic (7 Parameters)",
      "Jaanch - Infertility Profile Advanced (21 Parameters)",
      "Jaanch Infertility Profile Extended (29 Parameters)"
    ]},
    { title: "PCOD", tests: [
      "Jaanch - PCOD (Mini) (50 Parameters)",
      "Jaanch - PCOD Basic (69 Parameters)",
      "Jaanch - PCOD Advanced (73 Parameters)"
    ]},
    { title: "Cancer", tests: [
      "Jaanch Cancer Screening Breast and Ovarian (3 Parameters)",
      "Jaanch Cancer Screening Female Basic (6 Parameters)",
      "Jaanch Cancer Screening Female Advanced (37 Parameters)",
      "Jaanch Cancer Screening Male Basic (3 Parameters)",
      "Jaanch Cancer Screening Male Advanced (35 Parameters)"
    ]},
    { title: "Heart", tests: [
      "Jaanch Heart Profile Basic (31 Parameters)",
      "Jaanch Heart Profile Advanced (64 Parameters)",
      "Jaanch Heart Profile Extended (71 Parameters)"
    ]},
    { title: "Liver", tests: [
      "Jaanch Liver Profile Basic (11 Parameters)",
      "Jaanch Liver Profile Advanced (19 Parameters)",
      "Jaanch Liver Profile Extended (27 Parameters)"
    ]},
    { title: "Kidney", tests: [
      "Jaanch Kidney Profile Basic (7 Parameters)",
      "Jaanch Kidney Profile Advanced (10 Parameters)",
      "Jaanch Kidney Profile Extended (14 Parameters)"
    ]},
    { title: "Bone", tests: [
      "Jaanch Bone Profile Basic (8 Parameters)",
      "Jaanch Bone Profile Advanced (12 Parameters)"
    ]},
    { title: "Allergy", tests: [
      "Jaanch Allergy Basic (45 Parameters)",
      "Jaanch Allergy Advanced (60 Parameters)"
    ]},
    { title: "Women Health", tests: [
      "Jaanch Women Health Basic (32 Parameters)",
      "Jaanch Women Health Advanced (68 Parameters)"
    ]},
    { title: "Men Health", tests: [
      "Jaanch Men Health Basic (30 Parameters)",
      "Jaanch Men Health Advanced (65 Parameters)"
    ]},
    { title: "Senior Citizen", tests: [
      "Jaanch Senior Citizen Basic (50 Parameters)",
      "Jaanch Senior Citizen Advanced (75 Parameters)"
    ]},
    { title: "Vitamin", tests: [
      "Vitamin B12 Test",
      "Vitamin D Test",
      "Vitamin Profile (3 Parameters)"
    ]},
    { title: "Iron", tests: [
      "Iron Studies Basic (4 Parameters)",
      "Iron Studies Advanced (6 Parameters)"
    ]},
    { title: "Fever", tests: [
      "Jaanch Fever Panel Basic (9 Parameters)",
      "Jaanch Fever Panel Advanced (15 Parameters)"
    ]},
    { title: "Full Body", tests: [
      "Jaanch Full Body Checkup Basic (65 Parameters)",
      "Jaanch Full Body Checkup Advanced (83 Parameters)",
      "Jaanch Full Body Checkup Extended (100 Parameters)"
    ]}
  ];

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(e.target.value);
    if (value.length > 0) {
      let results = [];
      packagesData.forEach((pkg) => {
        if (pkg.title.toLowerCase().includes(value)) {
          results.push(pkg.title);
        }
        pkg.tests.forEach((test) => {
          if (test.toLowerCase().includes(value)) {
            results.push(test);
          }
        });
      });
      setSuggestions(results.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (term) => {
    setSearchInput(term);
    setSuggestions([]);
    navigate(`/packages?search=${encodeURIComponent(term)}`);
  };

  const handleExplore = () => {
    navigate("/packages");
  };

  const handleWhatsApp = () => {
    const phoneNumber = "919861118732"; // replace with your WhatsApp number (with country code, no + sign)
    const message = "Hey, I would like to book a test online";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="main-container">
      <div className="left-banner">
        <img src="/Page1.jpg" alt="Lab Posters" className="banner-image" />
      </div>
      <div className="booking-section">
        <h2>BOOK A TEST ONLINE</h2>
        <div className="search-bar" style={{ position: "relative" }}>
          <input
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Search Test and Packages"
          />
          <button
            className="search-btn"
            onClick={() =>
              navigate(`/packages?search=${encodeURIComponent(searchInput)}`)
            }
          >
            🔍
          </button>
          {suggestions.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "40px",
                left: 0,
                right: 0,
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                maxHeight: "150px",
                overflowY: "auto",
                zIndex: 10,
                listStyle: "none",
                padding: "5px",
                margin: 0,
              }}
            >
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  onClick={() => handleSelect(s)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="or-text">OR</div>

        {/* Explore button */}
        <button className="popular-btn" onClick={handleExplore}>
          Explore Tests and Packages
        </button>

        {/* WhatsApp button */}
        <button className="contact-btn" onClick={handleWhatsApp}>
          Click to Book Now!
        </button>

        <p className="tagline">
          Your Health, Our Priority: Book Reliable Tests Anytime, Anywhere.
        </p>

        <div className="bottom-image-container">
          <img 
            src="/Group.png" 
            alt="Health Illustration" 
            className="bottom-image"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
