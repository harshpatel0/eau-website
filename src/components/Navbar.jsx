import {
  IconContext,
  House,
  Article,
  Sun,
  MoonStars,
  TestTube,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar">
      <IconContext.Provider
        value={{
          color: "white",
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

        <Article alt="All Articles" className="icons" />

        {props.darkMode ? (
          <Sun
            onClick={props.toggleTheme}
            alt="Switch to Light Mode"
            className="icons theme-selector"
          />
        ) : (
          <MoonStars
            onClick={props.toggleTheme}
            className="icons theme-selector"
            alt="Switch to Dark Mode"
          />
        )}

        <div className="icons">
          <Link to="/testpage">
            <TestTube
              className="icons"
              alt="Go to test page, nothing cool there, just testing stuff"
            />
          </Link>
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
