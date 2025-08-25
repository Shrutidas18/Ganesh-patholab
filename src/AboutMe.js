import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      {/* Left Text Section */}
      <div className="about-text">
        <h2 className="about-title">
          Shree Ganesh Patholab<span className="star">*</span>
        </h2>
        <p className="about-description">
          <span className="highlight">At Shree Ganesh Patholab,</span> we believe
          that timely diagnosis is the first step towards{" "}
          <span className="purple">better health.</span> We bring you a wide
          range of <b>accurate</b> and <b>affordable</b> health checkups and
          pathology services tailored to meet your unique needs. With
          <b> cutting-edge diagnostic technology </b> and{" "}
          <b>expert lab professionals</b>, we ensure precise testing and
          reliable reports for your peace of mind.
        </p>
        <button className="view-btn">
          VIEW PACKAGES <span className="arrow">→</span>
        </button>
      </div>

      {/* Right Image Section */}
      <div className="about-image">
        <div className="circle-bg">
          <img src="/couple.png" alt="Couple" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
