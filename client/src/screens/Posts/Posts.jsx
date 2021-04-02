import React from "react";
import { Link } from "react-router-dom";
import PostPreview from "../../components/PostPreview";

export default function Posts(props) {
  const { allPosts } = props;
  return (
    <div className="posts-list">
      {allPosts.map((post) => (
        <React.Fragment key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <PostPreview title={post.title} destination={post.destination} />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
