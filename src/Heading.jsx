import { useState } from "react";

function Heading(props) {
  return (
    <div className="location-heading">
      <h1>{props.headerText}</h1>
    </div>
  );
}

export default Heading;
