import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content.js";
import ArticlesList from "../components/ArticlesList.js";
import CommentsList from "../components/CommentsList.js";
import UpvoteSection from "../components/UpvoteSection.js";
import NotFound from "../pages/NotFound.js";

function Article() {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name]);

  if (!article) {
    return <NotFound />;
  }

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <div>
      <h1>{article.title}</h1>
      <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </div>
  );
}

export default Article;
