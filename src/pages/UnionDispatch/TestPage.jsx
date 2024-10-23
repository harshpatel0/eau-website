import { useContext } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import MarkdownRenderer from "../../components/MarkdownRenderer/MarkdownRenderer";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import "./UnionDispatch.css";

function TestPage() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <>
      <Navbar />
      <Heading inFeaturedArticles={true} headerText="Hello World!" />
      <MarkdownRenderer></MarkdownRenderer>
    </>
  );
}

export default TestPage;
