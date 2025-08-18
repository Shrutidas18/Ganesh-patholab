import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./HealthConcerns.css";

const categories = [
  { name: "Infertility", icon: "🧬" },
  { name: "Allergy", icon: "✋" },
  { name: "Liver", icon: "🫀" },
  { name: "Heart", icon: "❤️" },
  { name: "Lungs", icon: "🫁" },
  { name: "Kidney", icon: "🩺" }
];

function HealthConcerns() {
  const [activeTab, setActiveTab] = useState("Lifestyle Disorder");

  return (
    <div className="hc-container">
      <h2 className="hc-title">Search by Health Concerns</h2>

      {/* Search Bar */}
      <div className="hc-search">
        <input type="text" placeholder="Search Test" />
        <button className="hc-search-btn">
          <FaSearch />
        </button>
      </div>

      {/* Tabs */}
      <div className="hc-tabs">
        {["Lifestyle Disorder", "Condition", "Alphabet"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <a href="/" className="view-all">View All</a>
      </div>

      {/* Icons */}
      <div className="hc-icons">
        {categories.map((cat) => (
          <div className="hc-item" key={cat.name}>
            <div className="hc-icon-circle">{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthConcerns;
