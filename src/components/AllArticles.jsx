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
              <h2>The Quantum Leap: A New Era of Computing</h2>
              <p>Dr. Evelyn Kane</p>
            </li>
            <li className="articles-list-item">
              <h2>Decoding the Martian Landscape: A Geologist's Perspective</h2>
              <p>Professor Alex Petrov</p>
            </li>
            <li className="articles-list-item">
              <h2>Lost Civilizations of the Amazon Rainforest</h2>
              <p>Dr. Maya Ramirez</p>
            </li>
            <li className="articles-list-item">
              <h2>The Art of the Samurai: A Deeper Look</h2>
              <p>Professor Kenji Sato</p>
            </li>
            <li className="articles-list-item">
              <h2>Existentialism in the Age of AI</h2>
              <p>Dr. Anya Petrova</p>
            </li>
            <li className="articles-list-item">
              <h2>The Poetry of Nature: A Romantic Exploration</h2>
              <p>Professor William Wordsworth</p>
            </li>
            <li className="articles-list-item">
              <h2>The Future of Global Energy: A Renewable Revolution</h2>
              <p>Dr. Ethan Miller</p>
            </li>
            <li className="articles-list-item">
              <h2>The Rise and Fall of Populism: A Political Analysis</h2>
              <p>Professor Olivia Chen</p>
            </li>
            <li className="articles-list-item">
              <h2>The Neurobiology of Empathy: A Deeper Dive</h2>
              <p>Dr. Anya Petrova</p>
            </li>
            <li className="articles-list-item">
              <h2>The Psychology of Creativity: A Mindful Exploration</h2>
              <p>Professor Ethan Miller</p>
            </li>
            <li className="articles-list-item">
              <h2>The Future of Medicine: Personalized Healthcare</h2>
              <p>Dr. Olivia Chen</p>
            </li>
            <li className="articles-list-item">
              <h2>
                The Gut-Brain Connection: A Revolutionary Approach to Health
              </h2>
              <p>Professor Kenji Sato</p>
            </li>
            <li className="articles-list-item">
              <h2>
                The Ethical Implications of Artificial Intelligence in the
                Workplace
              </h2>
              <p>Dr. Evelyn Kane</p>
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
