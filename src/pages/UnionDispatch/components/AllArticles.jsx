import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import axios from "axios";

import { apiBaseUrl } from "../../../veryglobalvars";

function AllArticles(props) {
  const [articles, setArticles] = useState([]);
  const [isArticlePublic, setIsArticlePublic] = useState(true);
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
                  <p>{article.author_name}</p>
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
