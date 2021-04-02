import React from "react";
import { Link } from "react-router-dom";

export default function PostPreview(props) {
  const { title, destination, allPosts } = props;
  console.log(allPosts);
  return (
    <div>
      {allPosts.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <div className="post-preview">
            <h3>{title}</h3>
            <h3>{destination}</h3>
            <button>Continue reading...</button>
          </div>
        </Link>
      ))}
    </div>
  );
}
