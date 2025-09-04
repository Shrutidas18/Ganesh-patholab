import React from "react";

function SecondPage() {
  return (
    <div style={{ backgroundColor: "#FFF2D7", padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", color: "#4B3832" }}>Special Programs</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
       
        <div style={cardStyle}>
          <img src="/diabetes.png" alt="Diabetes" style={imgStyle} />
          <p style={textStyle}>Diabetes Care</p>
        </div>

        {/* Thyroid */}
        <div style={cardStyle}>
          <img src="/thyroid.png" alt="Thyroid" style={imgStyle} />
          <p style={textStyle}>Thyroid Profiles</p>
        </div>

        {/* Infertility */}
        <div style={cardStyle}>
          <img src="/infertility.png" alt="Infertility" style={imgStyle} />
          <p style={textStyle}>Infertility Profiles</p>
        </div>

        {/* PCOD */}
        <div style={cardStyle}>
          <img src="/pcod.png" alt="PCOD" style={imgStyle} />
          <p style={textStyle}>PCOD Panel</p>
        </div>

        {/* Cancer */}
        <div style={cardStyle}>
          <img src="/cancer.png" alt="Cancer" style={imgStyle} />
          <p style={textStyle}>Cancer Screening</p>
        </div>

        {/* Fever */}
        <div style={cardStyle}>
          <img src="/fever.png" alt="Fever" style={imgStyle} />
          <p style={textStyle}>Fever Panel</p>
        </div>

        {/* Heart */}
        <div style={cardStyle}>
          <img src="/heart.png" alt="Heart" style={imgStyle} />
          <p style={textStyle}>Heart Health</p>
        </div>

        {/* Pregnancy */}
        <div style={cardStyle}>
          <img src="/pregnancy.png" alt="Pregnancy" style={imgStyle} />
          <p style={textStyle}>Pregnancy Packages</p>
        </div>

        {/* Hairfall */}
        <div style={cardStyle}>
          <img src="/hairfall.png" alt="Hairfall" style={imgStyle} />
          <p style={textStyle}>Hairfall Screening</p>
        </div>

        {/* Postpartum */}
        <div style={cardStyle}>
          <img src="/postpartum.png" alt="Postpartum" style={imgStyle} />
          <p style={textStyle}>Postpartum Health</p>
        </div>

        {/* Pre-Operative */}
        <div style={cardStyle}>
          <img src="/preop.png" alt="Pre-Operative" style={imgStyle} />
          <p style={textStyle}>Pre-Operative Tests</p>
        </div>

        {/* STD */}
        <div style={cardStyle}>
          <img src="/std.png" alt="STD" style={imgStyle} />
          <p style={textStyle}>STD Profile</p>
        </div>

        {/* Skin */}
        <div style={cardStyle}>
          <img src="/skin.png" alt="Skin" style={imgStyle} />
          <p style={textStyle}>Skin Care</p>
        </div>

        {/* Marriage */}
        <div style={cardStyle}>
          <img src="/marriage.png" alt="Marriage" style={imgStyle} />
          <p style={textStyle}>Pre-Marital Checkup</p>
        </div>

        {/* Immunity */}
        <div style={cardStyle}>
          <img src="/immunity.png" alt="Immunity" style={imgStyle} />
          <p style={textStyle}>Immunity Health</p>
        </div>

        {/* Bone */}
        <div style={cardStyle}>
          <img src="/bone.png" alt="Bone" style={imgStyle} />
          <p style={textStyle}>Bone & Muscle Health</p>
        </div>

        {/* Nutra */}
        <div style={cardStyle}>
          <img src="/nutra.png" alt="Nutra" style={imgStyle} />
          <p style={textStyle}>Nutra360 Wellness</p>
        </div>
      </div>
    </div>
  );
}

// Inline styles
const cardStyle = {
  background: "linear-gradient(90deg, #004AAD, #2E8BC0)",
  borderRadius: "10px",
  padding: "15px",
  width: "160px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const imgStyle = {
  width: "80px",
  height: "80px",
  marginBottom: "10px",
};

const textStyle = {
  color: "#fff",
  fontWeight: "bold",
};

export default SecondPage;
