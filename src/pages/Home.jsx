// Libraries
import React, { useState, useEffect, useRef, useContext } from "react";
import { useInView } from "react-intersection-observer";

// Components
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Heading from "../components/Heading.jsx";
import AllArticles from "../components/AllArticles.jsx";
import "../App.css";

// Other Assets
import SunkenShipBackgroundImage from "../assets/images/SunkenSwamp.jpg";
import Crashed from "../assets/images/Crashed.jpg";
import NewYork from "../assets/images/NewYork.jpg";

// Contexts
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";

function App() {
  const { ref, inView: inFeaturedArticles } = useInView({
    threshold: 0.1,
  });

  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  // This state variable is used to tell if the hero sections are visible, if all hero sections are not visible anymore, then we will set it to false
  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Heading
        headerText={inFeaturedArticles ? "Featured Articles" : "All Articles"}
        inFeaturedArticles={inFeaturedArticles}
        darkMode={darkMode}
      />
      <main
        id="flex-container"
        style={{ backgroundColor: darkMode ? "#090F13" : "white" }}
        className="flex-container"
      >
        <div ref={ref} className="hero-content">
          <HeroSection
            title="Plants and their answer to life"
            author="Harsh Patel"
            image={SunkenShipBackgroundImage}
          />
          <HeroSection
            title="Plane Crash"
            author="John from Crashed!"
            image={Crashed}
          />
          <HeroSection
            title="Metropolitan Jungle"
            author="Alex from Visit New York"
            image={NewYork}
          />
        </div>
        <AllArticles darkMode={darkMode} ref={ref} />
      </main>
    </>
  );
}

export default App;
