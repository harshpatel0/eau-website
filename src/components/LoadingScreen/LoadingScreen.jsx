import { useContext, useEffect } from "react";
import { CircleNotch } from "@phosphor-icons/react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

import "./LoadingScreen.css";

function LoadingScreen(props) {
  const { darkMode, _ } = useContext(DarkModeContext);

  useEffect(() => {
    if (props.done == true) {
      document.getElementById("loading-screen").classList.add("fader");
    }
  }, [props.done]);

  return (
    <div id="loading-screen" className="loading-screen no-print">
      <div className="loading-content">
        <div>
          <CircleNotch
            className="loading-spinner"
            mirrored={false}
            size={48}
            color={darkMode ? "white" : "black"}
            weight="bold"
          />
          <h1>{props.loadingText}</h1>
          <h2>{props.loadingSubText}</h2>
          <p>Please Wait</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
