// Libraries
import React, { useState, useEffect, useRef, useContext } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

// Components
import Navbar from "../../components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Heading from "../../components/Heading/Heading.jsx";
import AllArticles from "./components/AllArticles.jsx";
import "../../App.css";
import "./UnionDispatch.css";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.jsx";

// Contexts
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";
import { apiBaseUrl } from "../../veryglobalvars.js";

function UnionDispatch() {
  const { ref, inView: inFeaturedArticles } = useInView({
    threshold: 0.1,
  });
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const [loadingState, setLoadingState] = useState(false);
  const [featuredArticlesData, setFeaturedArticlesData] = useState([]);
  const location = useLocation(); // Hook to access location changes

  function getArticleData() {
    console.log("Getting Article Data");
    axios
      .get(apiBaseUrl + "/articles/featured")
      .then(function (response) {
        setFeaturedArticlesData(response.data);
        console.log(featuredArticlesData);
        setTimeout(() => {
          setLoadingState(true);
        }, 1500);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const page_title = "The Union Dispatch";

  useEffect(() => {
    console.log("Initial Code Running");
    document.title = page_title;
    getArticleData();
  }, [location]);

  // This state variable is used to tell if the hero sections are visible, if all hero sections are not visible anymore, then we will set it to false
  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Heading
        headerText={inFeaturedArticles ? "Featured Articles" : "All Articles"}
        inFeaturedArticles={inFeaturedArticles}
        darkMode={darkMode}
        showBorderAndShadow={true}
      />
      <main
        id="flex-container"
        style={{ backgroundColor: darkMode ? "#090F13" : "white" }}
        className="flex-container"
      >
        <div ref={ref} className="hero-content">
          {featuredArticlesData.map((article) => (
            <Link
              to={`/uniondispatch/articles/${article.article_id}`}
              key={article.article_id}
            >
              <div
                key={article.article_id}
                onClick={() => handleArticleClick(article.article_id)}
              >
                <HeroSection
                  title={article.title}
                  author={article.author_name}
                  image={article.image_url}
                />
              </div>
            </Link>
          ))}
        </div>

        <AllArticles darkMode={darkMode} ref={ref} />
      </main>
      <LoadingScreen
        done={loadingState}
        loadingText="Loading The Union Dispatch"
      />
    </>
  );
}

export default UnionDispatch;
