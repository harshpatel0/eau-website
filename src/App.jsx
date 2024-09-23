import "./App.css";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import React, { useState } from "react";
import SunkenShipBackgroundImage from "./assets/images/SunkenSwamp.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="hero-content">
        <HeroSection
          title="Plants and their answer to life"
          author="Harsh Patel"
          image={SunkenShipBackgroundImage}
        />
        <HeroSection
          title="Plane Crash"
          author="John from Crashed!"
          image={SunkenShipBackgroundImage}
        />
        <HeroSection
          title="Waves"
          author="Mary from Snapped!"
          image={SunkenShipBackgroundImage}
        />
      </div>
    </>
  );
}

export default App;
