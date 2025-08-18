import React from "react";

function SecondPage() {
  return (
    <div style={{ backgroundColor: "#FFF2D7", padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", color: "#4B3832" }}>Special Programs</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
        
        {/* Card 1 */}
        <div style={cardStyle}>
          <img src="/images/pregnancy.png" alt="Pregnancy" style={imgStyle} />
          <p style={textStyle}>Pregnancy Packages</p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <img src="/images/onco.png" alt="Oncopro" style={imgStyle} />
          <p style={textStyle}>Oncopro</p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <img src="/images/yoga.png" alt="SwasthFit" style={imgStyle} />
          <p style={textStyle}>SwasthFit</p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <img src="/images/diabetic.png" alt="Diabetic Care" style={imgStyle} />
          <p style={textStyle}>Diabetic Care Program</p>
        </div>

        {/* Card 5 */}
        <div style={cardStyle}>
          <img src="/images/allergy.png" alt="Allergy" style={imgStyle} />
          <p style={textStyle}>Allergy</p>
        </div>
      </div>
    </div>
  );
}

// Styles
const cardStyle = {
  background: "linear-gradient(90deg, #004AAD, #2E8BC0)",
  borderRadius: "10px",
  padding: "15px",
  width: "160px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};

const imgStyle = {
  width: "80px",
  height: "80px",
  marginBottom: "10px"
};

const textStyle = {
  color: "#fff",
  fontWeight: "bold"
};

export default SecondPage;
