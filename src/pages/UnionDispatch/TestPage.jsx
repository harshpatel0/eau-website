import { useContext } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import MarkdownRenderer from "../../components/MarkdownRenderer/MarkdownRenderer";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import "./style.css";

function TestPage() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Heading darkMode={darkMode} headerText="Hello World!" />
      <MarkdownRenderer></MarkdownRenderer>
    </>
  );
}

export default TestPage;
