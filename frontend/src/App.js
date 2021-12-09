import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} /> 
          {/* https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
