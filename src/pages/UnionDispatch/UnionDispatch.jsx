import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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
  // const [isArticlePublic, setIsArticlePublic] = useState(true);
  const [featuredArticlesTitle, setFeaturedArticlesTitle] = useState("");
  const [featuredArticlesSubtext, setFeaturedArticlesSubtext] = useState("");

  const location = useLocation(); // Hook to access location changes
  const navigate = useNavigate();

  function getArticleData() {
    axios
      .get(apiBaseUrl + "/articles/featured")
      .then(function (response) {
        setFeaturedArticlesData(response.data);
        setTimeout(() => {
          setLoadingState(true);
        }, 600);
      })
      .catch(function (error) {
        console.log(error);
        navigate("*", {
          state: {
            error_code: error.code,
            error_message: error.message,
            error_status: error.status,
          },
        });
      });
  }

  function getFeaturedArticlesTitle() {
    axios
      .get(apiBaseUrl + "/dynamiccontent/featured_articles_title")
      .then(function (response) {
        let res = response.data[0].content;
        setFeaturedArticlesTitle(res);
      })
      .catch(function (error) {
        console.log(error);
        navigate("*", {
          state: {
            error_code: error.code,
            error_message: error.message,
            error_status: error.status,
          },
        });
      });
  }
  function getFeaturedArticlesSubtext() {
    axios
      .get(apiBaseUrl + "/dynamiccontent/featured_articles_subtext")
      .then(function (response) {
        let res = response.data[0].content;
        setFeaturedArticlesSubtext(res);
      })
      .catch(function (error) {
        console.log(error);
        navigate("*", {
          state: {
            error_code: error.code,
            error_message: error.message,
            error_status: error.status,
          },
        });
      });
  }

  const page_title = "The Union Dispatch";

  useEffect(() => {
    document.title = page_title;
    getFeaturedArticlesTitle();
    getFeaturedArticlesSubtext();
    getArticleData();
  }, [location]);

  // This state variable is used to tell if the hero sections are visible, if all hero sections are not visible anymore, then we will set it to false
  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Heading
        headerText={
          inFeaturedArticles ? `${featuredArticlesTitle}` : "All Articles"
        }
        subText={inFeaturedArticles ? `${featuredArticlesSubtext}` : ""}
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
                <div key={article.article_id}>
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
