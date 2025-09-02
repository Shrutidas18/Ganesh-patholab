import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import SecondPage from "./SecondPage";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import HealthConcerns from "./HealthConcerns";
import Packages from "./Package"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <LandingPage />
              <SecondPage />
              <AboutMe />
              <HealthConcerns />
              <Footer />
            </div>
          }
        />

        {/* Packages Page */}
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Router>
  );
}

export default App;
