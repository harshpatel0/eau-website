import { useState } from "react";
import PropTypes from "prop-types";

function Heading(props) {
  let styles = {
    color:
      props.inFeaturedArticles || props.darkMode ? "whitesmoke" : "#1f1f1fff",
    border: props.inFeaturedArticles
      ? "0px solid black" // No border in featured articles
      : props.darkMode
      ? "3px solid whitesmoke" // White border in dark mode
      : "3px solid black", // Black border in light mode
    boxShadow: props.inFeaturedArticles
      ? "" // No border in featured articles
      : props.darkMode
      ? "2px 4px 10px 1px whitesmoke" // White border in dark mode
      : "2px 4px 10px 1px black", // Black border in light mode
  };

  return (
    <div style={styles} className="location-heading">
      <h1>{props.headerText}</h1>
    </div>
  );
}

export default Heading;

Heading.propTypes = {
  headerText: PropTypes.string.isRequired,
  inFeaturedArticles: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

Heading.defaultProps = {
  headerText: "No Header Text Specified",
  inFeaturedArticles: false,
  darkMode: false,
};
