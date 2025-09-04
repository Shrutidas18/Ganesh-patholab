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
      
        <Route
          path="/"
          element={
            <div>
              <Navbar />

              
              <div id="home">
                <LandingPage />
              </div>

              <div id="services">
                <SecondPage />
              </div>

              <div id="about">
                <AboutMe />
              </div>

              <div id="contact">
                <HealthConcerns />
              </div>

              <div id="privacy">
                <Footer />
              </div>
            </div>
          }
        />

        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Router>
  );
}

export default App;
