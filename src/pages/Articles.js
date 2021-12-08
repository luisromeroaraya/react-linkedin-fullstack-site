import React from "react";
import articleContent from "./article-content.js";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      {articleContent.map((article,key) => (
        <div key={key}>
          <Link className="article-list-item" to={`/articles/${article.name}`}>
            <h2>{article.title}</h2>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Articles;
