import React from "react";
import { Link } from "react-router-dom";
import "../Assets/PostPreview.css";

export default function PostPreview(props) {
  const { post } = props;
  const { title, destination, username } = post;

  return (
    <div className="post-preview">
      <Link to={`/posts/${post.id}`}>
        <div>
          <h3 className="title">{title}</h3>
          <h3 className="destination">{destination}</h3>
          <h3 className="username">{username}</h3>
          <button className="continue-button">Continue reading...</button>
        </div>
      </Link>
    </div>
  );
}
