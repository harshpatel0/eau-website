// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import TestPage from "./pages/TestPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
