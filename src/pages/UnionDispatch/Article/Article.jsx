import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import Navbar from "../../../components/Navbar/Navbar";
import Heading from "../../../components/Heading/Heading";
import Footer from "../../../components/Footer/Footer";
import MarkdownRenderer from "../../../components/MarkdownRenderer/MarkdownRenderer";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

import { baseUrl } from "../../../veryglobalvars";

import "./Article.css";

let title = "";
let content = ``;

let authorName = "";
let tagline = ``;

let email = "";

let doesArticleExist = true;

function Article() {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const [articleControls, setArticleControls] = useState({});
  const [loadingState, setLoadingState] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState(``);
  const [authorName, setAuthorName] = useState("");
  const [tagline, setTagline] = useState(``);
  const [email, setEmail] = useState("");

  // Get Data from Db
  useEffect(() => {
    console.log("Fetching Article Details");
    setLoadingState(false);
    axios
      .get(baseUrl + `/articles/${articleId}`)
      .then(function (response) {
        let data = response.data[0];
        console.log(data.author_name);

        setTitle(data.title);
        setAuthorName(data.author_name);
        setContent(data.content);
        setTagline(data.tagline);
        setEmail(data.email);

        setLoadingState(true);
      })
      .catch(function (error) {
        console.log(error);

        let error_status = error.response.status;
        if ((error_status = 404)) {
          navigate("*");
        }
      });
  }, []);

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
      <Heading headerText={title} subText={`By ${authorName}`} />

      <div style={{ width: "80%" }} className="rendered-article">
        <MarkdownRenderer markdownContent={content} />
      </div>
      <div className="after-markdown-render">
        <blockquote>
          <strong>By {authorName}</strong>
          <MarkdownRenderer markdownContent={tagline} />
        </blockquote>
      </div>
      <Footer />
    </>
  );
}

export default Article;
