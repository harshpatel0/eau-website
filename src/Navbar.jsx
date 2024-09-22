import {
  IconContext,
  House,
  Article,
  Sun,
  MoonStars,
} from "@phosphor-icons/react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <IconContext.Provider
        value={{
          color: "black",
          size: 32,
          weight: "regular",
          mirrored: false,
        }}
      >
        <House className="icons" />
        <Article className="icons" />
        {props.darkMode ? (
          <Sun className="icons theme-selector" />
        ) : (
          <MoonStars className="icons theme-selector" size={32} />
        )}
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
