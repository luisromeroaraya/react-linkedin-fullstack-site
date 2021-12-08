import React from "react";
import { useParams } from "react-router-dom";

function Article() {
  const { name } = useParams();
  return (
    <div>
      <h1>This is an article about {name}</h1>
    </div>
  );
}

export default Article;
