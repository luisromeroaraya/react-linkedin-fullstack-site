import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/articles" element={<Articles />} exact />
      <Route path="/article" element={<Article />} exact />
    </Routes>
  );
}

export default App;
