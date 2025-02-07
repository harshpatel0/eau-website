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

function Media() {
  const { mediaId } = useParams();
  const navigate = useNavigate();

  const [loadingState, setLoadingState] = useState(false);

  const [title, setTitle] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [authorName, setAuthorName] = useState("");
  // Author Name and Artist Name will share the same in the code, they will not be separate
  const [tagline, setTagline] = useState(``);
  const [email, setEmail] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [mediaAltText, setMediaAltText] = useState("");

  useEffect(() => {
    setLoadingState(false);
    axios
      .get(apiBaseUrl + `/media/${mediaId}`)
      .then(function (response) {
        let data = response.data[0];

        setTitle(data.title);
        setAuthorName(data.author_name);
        setMediaUrl(data.media_url);
        setTagline(data.tagline);
        setEmail(data.email);
        setTimestamp(data.published_date);
        setMediaAltText(data.mediaAltText);

        setLoadingState(true);
      })
      .catch(function (error) {
        console.log(error);

        let error_status = error.response.status;
        if (error_status == 404) {
          navigate("*");
        }
      });
  }, []);

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

  useEffect(() => {
    document.title = title;
  }, [title]);

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
          <div
            style={{
              display: "inline-flex",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <CaretLeft
              onClick={() => {
                history.back();
              }}
              size={22}
            />
            <span>{title}</span>
          </div>
        }
        subText={`By ${authorName}`}
      />

      <main className="rendered-media-container">
        <img className="rendered-media" src={mediaUrl} alt={mediaAltText} />
      </main>
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
