import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      {/* Left Text Section */}
      <div className="about-text">
        <h2>
           Shree Ganesh Patholab<span>*</span>
        </h2>
        <p>
          <span className="highlight">At Shree Ganesh Patholab,</span> we believe that timely diagnosis is the first step towards{" "}
          <span className="purple">better health</span>{" "}
          We bring you a wide range of accurate and affordable health checkups and pathology services tailored to meet your unique needs. With cutting-edge diagnostic technology and expert lab professionals, we ensure precise testing and reliable reports for your peace of mind.

        </p>
        <button className="view-btn">
          VIEW PACKAGES <span className="arrow">→</span>
        </button>
        
      </div>

      {/* Right Image Section */}
      <div className="about-image">
        <div className="circle-bg">
          <img src="/images/couple.png" alt="Couple" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
