import React from "react";
import { Link } from "react-router-dom";

export default function PostPreview(props) {
  const { post } = props;
  const { title, destination, username } = post;

  return (
    <div>
      <Link to={`/posts/${post.id}`}>
        <div className="post-preview">
          <h3>{title}</h3>
          <h3>{destination}</h3>
          <h3>{username}</h3>
          <button className="button">Continue reading...</button>
        </div>
      </Link>
    </div>
  );
}
