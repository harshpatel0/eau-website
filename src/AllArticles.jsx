import { useEffect } from "react";
import PropTypes from "prop-types";

function AllArticles(props) {
  let styles = {
    backgroundColor: props.darkMode ? "#1f1f1fff" : "whitesmoke",
    color: props.darkMode ? "whitesmoke" : "#1f1f1fff",
  };
  return (
    <div>
      <div style={styles} className="all-articles">
        <section className="articles-list">
          <ul>
            <li className="articles-list-item">
              <h2>R U Mine?</h2>
              <p>Arctic Monkeys</p>
            </li>
            <li className="articles-list-item">
              <h2>Dancing in the Flames</h2>
              <p>The Weeknd</p>
            </li>
            <li className="articles-list-item">
              <h2>About You</h2>
              <p>The 1975</p>
            </li>
            <li className="articles-list-item">
              <h2>Mad Now</h2>
              <p>Upstrz</p>
            </li>
            <li className="articles-list-item">
              <h2>sdp interlude</h2>
              <p>Travis Scott</p>
            </li>
            <li className="articles-list-item">
              <h2>Runaway</h2>
              <p>Kanye West</p>
            </li>
            <li className="articles-list-item">
              <h2>Michelle</h2>
              <p>Sir Chloe</p>
            </li>
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
