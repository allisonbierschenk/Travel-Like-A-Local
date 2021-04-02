import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const { allPosts, removePost, currentUser } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allPosts.length) {
      const onePost = allPosts.find((post) => post.id === Number(id));
      setPost(onePost);
    }
  }, [allPosts, id]);

  return (
    <div>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.destination}</p>
          <p>{post.content}</p>
          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Update</button>
              </Link>
              <button onClick={() => removePost(post.id)}>Delete</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
