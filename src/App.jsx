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
  const [darkMode, setDarkMode] = useState(false);

  const { ref, inView: inAllArticles } = useInView({
    threshold: 0.1,
  });

  // This state variable is used to tell if the hero sections are visible, if all hero sections are not visible anymore, then we will set it to false
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Heading
        headerText={inAllArticles ? "Featured Articles" : "All Articles"}
        inAllArticles={inAllArticles}
      />
      <main className="flex-container">
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
        <AllArticles ref={ref} />
      </main>
    </>
  );
}

export default App;
