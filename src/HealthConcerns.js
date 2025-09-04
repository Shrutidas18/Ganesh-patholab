import React, { useState, useEffect, useRef } from "react";
import "./HealthConcerns.css";

const healthConcerns = [
  {
    name: "Diabetes",
    icon: "🩸",
    tests: [
      "Jaanch - Diabetic Screen (48 Parameters)",
      "Jaanch Diabetic Profile - Basic (52 Parameters)",
      "Jaanch Diabetic Profile - Advanced (66 Parameters)"
    ]
  },
  {
    name: "Thyroid",
    icon: "🦋",
    tests: [
      "Jaanch Thyroid Profile - Basic (8 Parameters)",
      "Jaanch Thyroid Profile - Advanced (8 Parameters)"
    ]
  },
  {
    name: "Infertility",
    icon: "🧬",
    tests: [
      "Jaanch - Infertility Profile Basic (7 Parameters)",
      "Jaanch - Infertility Profile Advanced (21 Parameters)",
      "Jaanch Infertility Profile Extended (29 Parameters)"
    ]
  },
  {
    name: "PCOD",
    icon: "👩",
    tests: [
      "Jaanch - PCOD (Mini) (50 Parameters)",
      "Jaanch - PCOD Basic (69 Parameters)",
      "Jaanch - PCOD Advanced (73 Parameters)"
    ]
  },
  {
    name: "Cancer",
    icon: "🎗️",
    tests: [
      "Jaanch Cancer Screening Breast and Ovarian (3 Parameters)",
      "Jaanch Cancer Screening Female Basic (6 Parameters)",
      "Jaanch Cancer Screening Female Advanced (37 Parameters)",
      "Jaanch Cancer Screening Male Basic (3 Parameters)",
      "Jaanch Cancer Screening Male Advanced (35 Parameters)"
    ]
  },
  {
    name: "Heart",
    icon: "❤️",
    tests: [
      "Jaanch Heart Profile Basic (31 Parameters)",
      "Jaanch Heart Profile Advanced (64 Parameters)",
      "Jaanch Heart Profile Extended (71 Parameters)"
    ]
  },
  {
    name: "Liver",
    icon: "🫀",
    tests: [
      "Jaanch Liver Profile Basic (11 Parameters)",
      "Jaanch Liver Profile Advanced (19 Parameters)",
      "Jaanch Liver Profile Extended (27 Parameters)"
    ]
  },
  {
    name: "Kidney",
    icon: "🩺",
    tests: [
      "Jaanch Kidney Profile Basic (7 Parameters)",
      "Jaanch Kidney Profile Advanced (10 Parameters)",
      "Jaanch Kidney Profile Extended (14 Parameters)"
    ]
  },
  {
    name: "Bone",
    icon: "🦴",
    tests: [
      "Jaanch Bone Profile Basic (8 Parameters)",
      "Jaanch Bone Profile Advanced (12 Parameters)"
    ]
  },
  {
    name: "Allergy",
    icon: "🤧",
    tests: [
      "Jaanch Allergy Basic (45 Parameters)",
      "Jaanch Allergy Advanced (60 Parameters)"
    ]
  },
  {
    name: "Women Health",
    icon: "👩‍⚕️",
    tests: [
      "Jaanch Women Health Basic (32 Parameters)",
      "Jaanch Women Health Advanced (68 Parameters)"
    ]
  },
  {
    name: "Men Health",
    icon: "👨‍⚕️",
    tests: [
      "Jaanch Men Health Basic (30 Parameters)",
      "Jaanch Men Health Advanced (65 Parameters)"
    ]
  },
  {
    name: "Senior Citizen",
    icon: "👴",
    tests: [
      "Jaanch Senior Citizen Basic (50 Parameters)",
      "Jaanch Senior Citizen Advanced (75 Parameters)"
    ]
  },
  {
    name: "Vitamin",
    icon: "💊",
    tests: ["Vitamin B12 Test", "Vitamin D Test", "Vitamin Profile (3 Parameters)"]
  },
  {
    name: "Iron",
    icon: "🔬",
    tests: ["Iron Studies Basic (4 Parameters)", "Iron Studies Advanced (6 Parameters)"]
  },
  {
    name: "Fever",
    icon: "🤒",
    tests: [
      "Jaanch Fever Panel Basic (9 Parameters)",
      "Jaanch Fever Panel Advanced (15 Parameters)"
    ]
  },
  {
    name: "Full Body",
    icon: "🧑‍⚕️",
    tests: [
      "Jaanch Full Body Checkup Basic (65 Parameters)",
      "Jaanch Full Body Checkup Advanced (83 Parameters)",
      "Jaanch Full Body Checkup Extended (100 Parameters)"
    ]
  }
];

function HealthConcerns() {
  const [openCategory, setOpenCategory] = useState(null);
  const containerRef = useRef(null);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <div className="hc-container" ref={containerRef}>
      <h2 className="hc-title">Search by Health Concerns</h2>

      
      <div className="hc-icons">
        {healthConcerns.map((cat) => (
          <div
            className="hc-item"
            key={cat.name}
            onClick={() => toggleCategory(cat.name)}
          >
            <div className="hc-icon-circle">{cat.icon}</div>
            <p>{cat.name}</p>

           
            {openCategory === cat.name && (
              <div className="hc-tests">
                <ul>
                  {cat.tests.map((test, idx) => (
                    <li key={idx}>{test}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthConcerns;
