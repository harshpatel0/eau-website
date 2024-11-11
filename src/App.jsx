// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home.jsx";
import UnionDispatch from "./pages/UnionDispatch/UnionDispatch.jsx";
import Article from "./pages/UnionDispatch/Article/Article.jsx";
import TestPage from "./pages/UnionDispatch/TestPage.jsx";

// Test Pages
import LoadingScreenTest from "./pages/LoadingScreen.jsx";

import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/uniondispatch" element={<UnionDispatch />} />
        <Route path="/uniondispatch/testpage" element={<TestPage />} />
        <Route
          path="/testpages/loadingscreen"
          element={<LoadingScreenTest />}
        />

        <Route
          path="/uniondispatch/articles/:articleId"
          element={<Article />}
        />
      </Routes>
    </>
  );
}

export default App;
