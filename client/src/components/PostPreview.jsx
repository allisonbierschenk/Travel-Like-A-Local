import React from "react";
import { Link, useParams } from "react-router-dom";

export default function PostPreview(props) {
  const { post } = props;
  const { id } = useParams();
  const { title, destination } = post;

  return (
    <div>
      <Link to={`/posts/${post.id}`}>
        <div className="post-preview">
          <h3>{title}</h3>
          <h3>{destination}</h3>
          <button>Continue reading...</button>
        </div>
      </Link>
    </div>
  );
}
