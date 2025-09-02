import React from 'react';
import './Package.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Packages = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/'); // Redirect to homepage
  };

  const packagesData = [
    { title: 'Diabetes', tests: [
      'Jaanch - Diabetic Screen (48 Parameters)',
      'Jaanch Diabetic Profile - Basic (52 Parameters)',
      'Jaanch Diabetic Profile - Advanced (66 Parameters)'
    ]},
    { title: 'Thyroid', tests: [
      'Jaanch Thyroid Profile - Basic (8 Parameters)',
      'Jaanch Thyroid Profile - Advanced (8 Parameters)'
    ]},
    { title: 'Infertility', tests: [
      'Jaanch - Infertility Profile Basic (7 Parameters)',
      'Jaanch - Infertility Profile Advanced (21 Parameters)',
      'Jaanch Infertility Profile Extended (29 Parameters)'
    ]},
    { title: 'PCOD', tests: [
      'Jaanch - PCOD (Mini) (50 Parameters)',
      'Jaanch - PCOD Basic (69 Parameters)',
      'Jaanch - PCOD Advanced (73 Parameters)'
    ]},
    { title: 'Cancer', tests: [
      'Jaanch Cancer Screening Breast and Ovarian (3 Parameters)',
      'Jaanch Cancer Screening Female Basic (6 Parameters)',
      'Jaanch Cancer Screening Female Advanced (37 Parameters)',
      'Jaanch Cancer Screening Male Basic (3 Parameters)',
      'Jaanch Cancer Screening Male Advanced (35 Parameters)'
    ]},
    { title: 'Heart', tests: [
      'Jaanch Heart Profile Basic (31 Parameters)',
      'Jaanch Heart Profile Advanced (64 Parameters)',
      'Jaanch Heart Profile Extended (71 Parameters)'
    ]},
    { title: 'Liver', tests: [
      'Jaanch Liver Profile Basic (11 Parameters)',
      'Jaanch Liver Profile Advanced (19 Parameters)',
      'Jaanch Liver Profile Extended (27 Parameters)'
    ]},
    { title: 'Kidney', tests: [
      'Jaanch Kidney Profile Basic (7 Parameters)',
      'Jaanch Kidney Profile Advanced (10 Parameters)',
      'Jaanch Kidney Profile Extended (14 Parameters)'
    ]},
    { title: 'Bone', tests: [
      'Jaanch Bone Profile Basic (8 Parameters)',
      'Jaanch Bone Profile Advanced (12 Parameters)'
    ]},
    { title: 'Allergy', tests: [
      'Jaanch Allergy Basic (45 Parameters)',
      'Jaanch Allergy Advanced (60 Parameters)'
    ]},
    { title: 'Women Health', tests: [
      'Jaanch Women Health Basic (32 Parameters)',
      'Jaanch Women Health Advanced (68 Parameters)'
    ]},
    { title: 'Men Health', tests: [
      'Jaanch Men Health Basic (30 Parameters)',
      'Jaanch Men Health Advanced (65 Parameters)'
    ]},
    { title: 'Senior Citizen', tests: [
      'Jaanch Senior Citizen Basic (50 Parameters)',
      'Jaanch Senior Citizen Advanced (75 Parameters)'
    ]},
    { title: 'Vitamin', tests: [
      'Vitamin B12 Test',
      'Vitamin D Test',
      'Vitamin Profile (3 Parameters)'
    ]},
    { title: 'Iron', tests: [
      'Iron Studies Basic (4 Parameters)',
      'Iron Studies Advanced (6 Parameters)'
    ]},
    { title: 'Fever', tests: [
      'Jaanch Fever Panel Basic (9 Parameters)',
      'Jaanch Fever Panel Advanced (15 Parameters)'
    ]},
    { title: 'Full Body', tests: [
      'Jaanch Full Body Checkup Basic (65 Parameters)',
      'Jaanch Full Body Checkup Advanced (83 Parameters)',
      'Jaanch Full Body Checkup Extended (100 Parameters)'
    ]}
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Jaanch Poster _SE kit_Final', 14, 20);

    let finalData = [];
    packagesData.forEach(pkg => {
      pkg.tests.forEach(test => {
        finalData.push([pkg.title, test]);
      });
    });

    autoTable(doc, {
      head: [['Category', 'Test Name']],
      body: finalData,
      startY: 30,
      styles: { fontSize: 10 }
    });

    doc.save('Jaanch Poster _SE kit_Final.pdf');
  };

  return (
    <div className="packages-container">
      {/* Back Button */}
      <button
        onClick={goBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '10px',
          background: 'none',
          border: 'none',
          color: '#007bff',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        <FaArrowLeft style={{ marginRight: '8px' }} />
        Back
      </button>

      <h1>Doctor-recommended tests to manage lifestyle disorders</h1>
      <div className="package-grid">
        {packagesData.map((pkg, index) => (
          <div key={index} className="package-card">
            <h2>{pkg.title}</h2>
            <ul>
              {pkg.tests.map((test, idx) => (
                <li key={idx}>{test}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Download PDF Button */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Packages;
