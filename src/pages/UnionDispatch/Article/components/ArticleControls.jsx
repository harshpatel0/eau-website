import { useState, useContext } from "react";
import {
  IconContext,
  ArrowsOutLineHorizontal,
  ArrowsInLineHorizontal,
} from "@phosphor-icons/react";

import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

function ArticleControls(props) {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <div className="article-controls">
      <IconContext.Provider
        value={{
          color: darkMode ? "white" : "black",
          size: 32,
          weight: "regular",
          mirrored: false,
        }}
      >
        <div onClick={change_full_width_state}>
          {props.articlecontrols.full_width ? (
            <ArrowsInLineHorizontal />
          ) : (
            <ArrowsOutLineHorizontal />
          )}
        </div>
      </IconContext.Provider>
    </div>
  );
}
