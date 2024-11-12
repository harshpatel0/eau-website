import {
  IconContext,
  House,
  Article,
  Sun,
  MoonStars,
} from "@phosphor-icons/react";

import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar(props) {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <nav className="navbar">
      <IconContext.Provider
        value={{
          color: darkMode ? "white" : "black",
          size: 32,
          weight: "regular",
          mirrored: false,
        }}
      >
        <div className="icons">
          <Link to="/">
            <House alt="Home" />
          </Link>
        </div>

        <div className="icons">
          <Link replace={true} to="/uniondispatch">
            <Article alt="The Union Dispatch" className="icons" />
          </Link>
        </div>

        {darkMode ? (
          <Sun
            onClick={toggleTheme}
            alt="Switch to Light Mode"
            className="icons theme-selector"
          />
        ) : (
          <MoonStars
            onClick={toggleTheme}
            className="icons theme-selector"
            alt="Switch to Dark Mode"
          />
        )}

        {/* <div className="icons">
          <Link to="/uniondispatch/testpage">
            <TestTube
              className="icons"
              alt="Go to test page, nothing cool there, just testing stuff"
            />
          </Link>
        </div> */}
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
