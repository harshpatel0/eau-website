import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import axios from "axios";

import { apiBaseUrl } from "../../../veryglobalvars";

function AllArticles(props) {
  const [articles, setArticles] = useState([]);
  let styles = {
    backgroundColor: props.darkMode ? "#1f1f1fff" : "whitesmoke",
    color: props.darkMode ? "whitesmoke" : "#1f1f1fff",
  };

  useEffect(() => {
    axios
      .get(apiBaseUrl + "/articles/all")
      .then(function (response) {
        setArticles(response.data);
        console.log(articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function convertDate(timestamp) {
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
      // hour12: true,
    });

    return `Published on ${humanReadable}`;
  }
  return (
    <div>
      <div style={styles} className="all-articles">
        <section className="articles-list">
          <ul>
            {articles.map((article) =>
              article.public == "1" ? (
                <li className="articles-list-item" key={article.article_id}>
                  <Link to={`/uniondispatch/articles/${article.article_id}`}>
                    <h2>{article.title}</h2>
                  </Link>
                  <div style={{ paddingLeft: "1rem" }}>
                    <p style={{ marginTop: "0.25rem" }}>
                      {article.author_name}
                    </p>
                    <p style={{ marginTop: "0.5rem" }}>
                      <span style={{ color: "gray" }}>
                        {convertDate(article.published_date)}
                      </span>
                    </p>
                  </div>
                </li>
              ) : (
                // <li>Article Hidden</li>
                <></>
              )
            )}
          </ul>
        </section>
        <section></section>
      </div>
    </div>
  );
}

export default AllArticles;

AllArticles.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
