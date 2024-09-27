import {
  IconContext,
  House,
  Article,
  Sun,
  MoonStars,
} from "@phosphor-icons/react";

function Navbar(props) {
  function toggleTheme() {
    props.setDarkMode(!props.darkMode);
  }

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
        {props.darkMode ? (
          <Sun onClick={toggleTheme} className="icons theme-selector" />
        ) : (
          <MoonStars onClick={toggleTheme} className="icons theme-selector" />
        )}
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
