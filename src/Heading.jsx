import { useState } from "react";

function Heading(props) {
  return (
    <div
      style={{ color: props.inAllArticles ? "whitesmoke" : "#1f1f1fff" }}
      className="location-heading"
    >
      <h1>{props.headerText}</h1>
    </div>
  );
}

export default Heading;
