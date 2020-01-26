import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Post = ({ post }) => {
  return (
    <React.Fragment>
      {post ? (
        <React.Fragment>
          <p>
            <strong>Title: </strong>
            {post.title}
          </p>

          <p>
            <strong>Body: </strong>
            {post.body}
          </p>
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default Post;

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("post_data");
  const data = JSON.parse(node.getAttribute("data"));

  ReactDOM.render(
    <Post post={data} />,
    node.appendChild(document.createElement("div"))
  );
});
