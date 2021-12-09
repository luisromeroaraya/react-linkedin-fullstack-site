import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content.js";
import ArticlesList from "../components/ArticlesList.js";

function Article() {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article) {
    return <h1>Article does not exist!</h1>;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </div>
  );
}

export default Article;
