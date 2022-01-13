import React from "react";

function UpvoteSection({ articleName, upvotes, setArticleInfo }) {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: "POST",

        });
        const body = await result.json();
        setArticleInfo(body);
    }
  return (
    <div id="upvote-section">
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>This post has been upvoted {upvotes} times</p>
    </div>
  );
}

export default UpvoteSection;
