import "./Article.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import Heading from "../../../components/Heading/Heading";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";
import MarkdownRenderer from "../../../components/MarkdownRenderer/MarkdownRenderer";
import Navbar from "../../../components/Navbar/Navbar";
import { apiBaseUrl } from "../../../veryglobalvars";
import axios from "axios";
import { CaretLeft } from "@phosphor-icons/react";

function Article() {
  const { articleId } = useParams();
  const navigate = useNavigate();

  // const [articleControls, setArticleControls] = useState({});
  const [loadingState, setLoadingState] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState(``);
  const [authorName, setAuthorName] = useState("");
  const [tagline, setTagline] = useState(``);
  const [email, setEmail] = useState("");
  const [timestamp, setTimestamp] = useState("");

  // Get Data from Db
  useEffect(() => {
    setLoadingState(false);
    axios
      .get(apiBaseUrl + `/articles/${articleId}`)
      .then(function (response) {
        let data = response.data[0];

        setTitle(data.title);
        setAuthorName(data.author_name);
        setContent(data.content);
        setTagline(data.tagline);
        setEmail(data.email);
        setTimestamp(data.published_date);

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
        loadingText="Loading Article"
        loadingSubText="Retrieving Article Content"
        done={loadingState}
      />

      <Navbar />
      <Heading
        headerText={
          <div style={{ display: "inline-flex", cursor: "pointer" }}>
            {/* <Link to="/uniondispatch">
              <CaretLeft size={32} />
            </Link> */}
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

      <div className="rendered-article">
        <MarkdownRenderer markdownContent={content} />
      </div>
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

export default Article;
