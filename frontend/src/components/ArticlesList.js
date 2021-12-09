import React from "react";
import { Link } from "react-router-dom";

function ArticlesList({ articles }) {
  return (
    <div className="articles-list">
      {articles.map((article, key) => (
        <div key={key}>
          <Link className="article-list-item" to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
