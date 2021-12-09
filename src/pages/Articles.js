import React from "react";
import articleContent from "./article-content.js";
import ArticlesList from "../components/ArticlesList.js";

function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </div>
  );
}

export default Articles;
