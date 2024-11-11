import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../../components/Navbar/Navbar";
import Heading from "../../../components/Heading/Heading";
import Footer from "../../../components/Footer/Footer";
import MarkdownRenderer from "../../../components/MarkdownRenderer/MarkdownRenderer";

import "./Article.css";

function Article() {
  const { articleId } = useParams();

  const { articleControls, setArticleControls } = useState({});

  // Maybe from the ID I can get the title and author from the DB and toss it on the title
  const title = "";
  const content = ``;

  const author = "";
  const tagline = ``;

  const doesArticleExist = true; // If false, redirect to a 404 page you definately will male

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Navbar />
      <Heading headerText={title} subText={`By ${author}`} />

      <div style={{ width: "80%" }} className="rendered-article">
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
      <div className="after-markdown-render">
        <blockquote>
          <strong>By {author}</strong>
          <MarkdownRenderer />
        </blockquote>
        <code>
          <pre>Article ID: {articleId}</pre>
          <pre>Title: {title}</pre>
          <pre>Author: {author}</pre>
          <pre>doesArticleExist: {doesArticleExist ? "True" : "False"}</pre>
          {/* Does Article Exist will be a flag, when false, the user will be
        redirected to the 404 page. Just query the DB and if something comes
        back, good, if error comes back, then send to 404 page. Figure this out
        sometime later And do not use the ID as the title, that's just asking
        for problems, yes it is possible and yes you can add spaces and you can
        even sugarcoat it and parse it to add the author but you dare */}
        </code>
      </div>
      <Footer />
    </>
  );
}

export default Article;
