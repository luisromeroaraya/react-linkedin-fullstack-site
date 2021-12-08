import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
