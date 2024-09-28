import { useContext } from "react";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

import { DarkModeContext } from "../contexts/DarkModeContext";

function TestPage() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Heading darkMode={darkMode} headerText="Hello World!" />
    </>
  );
}

export default TestPage;
