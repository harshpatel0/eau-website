import {
  IconContext,
  House,
  Article,
  Sun,
  MoonStars,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
function Navbar(props) {
  const [darkMode, toggleTheme] = useContext(DarkModeContext);
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
        <House alt="Home" className="icons" />
        <Article alt="All Articles" className="icons" />
        {darkMode ? (
          <Sun onClick={toggleTheme} className="icons theme-selector" />
        ) : (
          <MoonStars onClick={toggleTheme} className="icons theme-selector" />
        )}
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
