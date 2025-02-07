import "./Media.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import Heading from "../../../components/Heading/Heading";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";
import Navbar from "../../../components/Navbar/Navbar";
import { apiBaseUrl } from "../../../veryglobalvars";
import axios from "axios";
import { CaretLeft } from "@phosphor-icons/react";

import MarkdownRenderer from "../../../components/MarkdownRenderer/MarkdownRenderer";
import ImageRenderer from "./components/ImageRenderer";
import ArticleRenderer from "./components/ArticleRenderer";

function Media() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loadingState, setLoadingState] = useState(false);

  const [mediaType, setMediaType] = useState("");

  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  // Author Name and Artist Name will share the same in the code, they will not be separate
  const [tagline, setTagline] = useState(``);
  const [email, setEmail] = useState("");
  const [timestamp, setTimestamp] = useState("");

  // Article Specific
  const [content, setContent] = useState(``);

  // Media Specific
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaAltText, setMediaAltText] = useState("");

  function fetchCommonData() {
    setLoadingState(false);
    axios
      .get(apiBaseUrl + `/media/${id}`)
      .then(function (response) {
        let data = response.data[0];

        setTitle(data.title);
        setAuthorName(data.author_name);
        setTagline(data.tagline);
        setEmail(data.email);
        setTimestamp(data.published_date);

        setMediaType(data.media_type);

        setLoadingState(true);
      })
      .catch(function (error) {
        console.log(error);

        let error_status = error.response.status;
        if (error_status == 404) {
          navigate("*");
        }
      });
  }

  function fetchArticle() {
    axios
      .get(apiBaseUrl + `/articles/${id}`)
      .then(function (response) {
        let data = response.data[0];
        setContent(data.content);

        setLoadingState(true);
      })
      .catch(function (error) {
        console.log(error);

        let error_status = error.response.status;
        if (error_status == 404) {
          navigate("*");
        }
      });
  }

  function fetchMedia() {
    axios
      .get(apiBaseUrl + `/media/${id}`)
      .then(function (response) {
        let data = response.data[0];
        setMediaUrl(data.mediaUrl);

        setLoadingState(true);
      })
      .catch(function (error) {
        console.log(error);

        let error_status = error.response.status;
        if (error_status == 404) {
          navigate("*");
        }
      });
  }

  useEffect(() => {
    fetchCommonData();

    if (mediaType == "article") {
      fetchArticle();
    }
    if (mediaType == "image" || mediaType == "video") {
      fetchMedia();
    }
  });

  useEffect(() => {
    document.title = title;
  }, [title]);

  function showDate(timestamp) {
    console.log(timestamp);
    const formattedTimestamp = timestamp.substring(0, 23) + "Z";
    let human_date = new Date(formattedTimestamp);

    const humanReadable = human_date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "2-digit",
      // minute: "2-digit",
      // second: "2-digit",
      hour12: true,
    });

    return `Published on ${humanReadable}`;
  }

  return (
    <>
      <LoadingScreen
        loadingText="Loading Artwork"
        loadingSubText="Retrieving Artwork"
        done={loadingState}
      />

      <Navbar />
      <Heading
        headerText={
          <div style={{ display: "inline-flex", cursor: "pointer" }}>
            <CaretLeft
              onClick={() => {
                history.back();
              }}
              size={32}
            />
            <span>{title}</span>
          </div>
        }
        subText={`By ${authorName}`}
      />

      {mediaType == "image" ? (
        <ImageRenderer mediaUrl={mediaUrl} mediaAltText={mediaAltText} />
      ) : null}

      {mediaType == "article" ? (
        <>
          <ArticleRenderer content={content} /> <hr></hr>{" "}
        </>
      ) : null}

      {/* Common between the two */}
      <div className="after-markdown-render">
        <blockquote>
          <strong>By {authorName}</strong>
          <MarkdownRenderer markdownContent={tagline} />
        </blockquote>
        <p style={({ color: "gray" }, { paddingTop: "1rem" })}>
          {showDate(timestamp)}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Media;
