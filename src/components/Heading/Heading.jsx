import "./Heading.css";

import { useContext, useState } from "react";

import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";
import PropTypes from "prop-types";

// Props Taken
//    HeaderText: string
function Heading(props) {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  let styles = {
    // color: props.inFeaturedArticles || darkMode ? "whitesmoke" : "#1f1f1fff",
    color: darkMode ? "whitesmoke" : "#1f1f1fff",
    border:
      props.inFeaturedArticles && props.showBorderAndShadow
        ? "0px solid black" // No border in featured articles
        : darkMode
        ? "3px solid whitesmoke" // White border in dark mode
        : "3px solid black", // Black border in light mode
    boxShadow:
      props.inFeaturedArticles && props.showBorderAndShadow
        ? "" // No border in featured articles
        : darkMode
        ? "2px 4px 10px 1px whitesmoke" // White border in dark mode
        : "2px 4px 10px 1px black", // Black border in light mode
    backdropFilter: darkMode
      ? "blur(100px) brightness(70%)"
      : "blur(100px) brightness(90%)",
    WebkitBackdropFilter: darkMode
      ? "blur(100px) brightness(70%)"
      : "blur(100px) brightness(90%)",
  };

  return (
    <div style={styles} className="location-heading">
      <h1 className="heading-text">{props.headerText}</h1>
      <p className="heading-subtext" style={{ fontSize: "1.1rem" }}>
        {props.subText}
      </p>
    </div>
  );
}

export default Heading;

Heading.propTypes = {
  headerText: PropTypes.string.isRequired,
};
