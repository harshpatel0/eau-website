import "../../App.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";
import { useInView } from "react-intersection-observer";

import FeaturedDisplay from "../components/FeaturedDisplay.jsx";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Heading from "../../components/Heading/Heading.jsx";

import { apiBaseUrl } from "../../veryglobalvars";

function UnionMuseum() {
  const page_title = "The Union Museum";
  const { ref, inView: inFeaturedMedia } = useInView({
    threshold: 0.1,
  });
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const [loadingState, setLoadingState] = useState(false);

  const [featuredMediaData, setFeaturedMediaData] = useState();
  const [featuredMediaTitle, setFeaturedMediaTitle] = useState("");
  const [featuredMediaSubtext, setFeaturedMediaSubtext] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function getFeaturedMediaData() {
    axios
      .get(apiBaseUrl + "/media/featured")
      .then(function (response) {
        setFeaturedMediaData(response.data);
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

  function getFeaturedMediaTitle() {
    axios
      .get(apiBaseUrl + "/dynamiccontent/featured_media_title")
      .then(function (response) {
        let res = response.data[0].content;
        setFeaturedMediaTitle(res);
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

  function getFeaturedMediaSubtext() {
    axios
      .get(apiBaseUrl + "/dynamiccontent/featured_media_subtext")
      .then(function (response) {
        let res = response.data[0].content;
        setFeaturedMediaSubtext(res);
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

  useEffect(() => {
    document.tite = page_title;
    getFeaturedMediaTitle();
    getFeaturedMediaSubtext();
    getFeaturedMediaData();
  }, [location]);

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Heading
        headerText={inFeaturedMedia ? `${featuredMediaTitle}` : "All Articles"}
        subText={inFeaturedMedia ? `${featuredMediaSubtext}` : ""}
        inFeaturedArticles={inFeaturedMedia}
        darkMode={darkMode}
        showBorderAndShadow={true}
      />

      <div ref={ref} className="hero-content">
        {featuredMediaData.map((media) =>
          media.public === "1" ? (
            <Link
              to={`/unionmuseum/media/${media.media_id}`}
              key={media.media_id}
            >
              <div key={media.media_id}>
                <FeaturedDisplay
                  title={media.title}
                  author={media.author_name}
                  image={media.image_url}
                />
              </div>
            </Link>
          ) : (
            <></>
          )
        )}
      </div>

      <LoadingScreen
        done={loadingState}
        loadingText="Loading The Union Museum"
        loadingSubText="You make Picasso proud."
      />
    </>
  );
}

export default UnionMuseum;
