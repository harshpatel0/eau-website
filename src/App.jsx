import "./App.css";
import Navbar from "./Navbar.jsx";
import Page from "./Page.jsx";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Page />
    </>
  );
}

export default App;
