import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";
import { useInView } from "react-intersection-observer";

import AllArticles from "./components/AllArticles.jsx";
import Heading from "../../components/Heading/Heading.jsx";
import FeaturedArticle from "./components/FeaturedArticles.jsx";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

import { apiBaseUrl } from "../../veryglobalvars.js";

import "./UnionDispatch.css";
import "../../App.css";

function UnionDispatch() {
  const { ref, inView: inFeaturedArticles } = useInView({
    threshold: 0.1,
  });
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const [loadingState, setLoadingState] = useState(false);
  const [featuredArticlesData, setFeaturedArticlesData] = useState([]);
  const [isArticlePublic, setIsArticlePublic] = useState(true);

  const location = useLocation(); // Hook to access location changes

  function getArticleData() {
    axios
      .get(apiBaseUrl + "/articles/featured")
      .then(function (response) {
        setFeaturedArticlesData(response.data);
        setTimeout(() => {
          setLoadingState(true);
        }, 2000);
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
          {featuredArticlesData.map((article) =>
            article.public === "1" ? (
              <Link
                to={`/uniondispatch/articles/${article.article_id}`}
                key={article.article_id}
              >
                <div
                  key={article.article_id}
                  onClick={() => handleArticleClick(article.article_id)}
                >
                  <FeaturedArticle
                    title={article.title}
                    author={article.author_name}
                    image={article.image_url}
                  />
                </div>
              </Link>
            ) : (
              <></>
            )
          )}
        </div>

        <AllArticles darkMode={darkMode} ref={ref} />
      </main>
      <LoadingScreen
        done={loadingState}
        loadingText="Loading The Union Dispatch"
        loadingSubText="Getting the latest of your publications"
      />
    </>
  );
}

export default UnionDispatch;
