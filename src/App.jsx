import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import Heading from "./Heading.jsx";
import AllArticles from "./AllArticles.jsx";
import "./App.css";

import SunkenShipBackgroundImage from "./assets/images/SunkenSwamp.jpg";
import Crashed from "./assets/images/Crashed.jpg";
import NewYork from "./assets/images/NewYork.jpg";

function App() {
  function getDarkModeSettingFromLocalStorage() {
    // Attempt to retrieve the darkMode value from local storage
    const darkModeSettingFromLocalStorage =
      window.localStorage.getItem("darkMode");

    // Check if the value exists and is a valid JSON string
    if (darkModeSettingFromLocalStorage !== null) {
      try {
        return JSON.parse(darkModeSettingFromLocalStorage);
      } catch (error) {
        console.error("Error parsing dark mode setting:", error);
        return false; // Fallback to default value
      }
    }

    // If it doesn't exist, return false or your default value
    return false; // Default value
  }

  const [darkMode, setDarkMode] = useState(
    getDarkModeSettingFromLocalStorage()
  );

  useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const { ref, inView: inFeaturedArticles } = useInView({
    threshold: 0.1,
  });

  // This state variable is used to tell if the hero sections are visible, if all hero sections are not visible anymore, then we will set it to false
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
