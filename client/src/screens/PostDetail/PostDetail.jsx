import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getAllComments, addComment } from "../../services/comments";

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const { allPosts, removePost, currentUser } = props;
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const getComments = async () => {
    const comments = await getAllComments(id);
    setComments(comments);
  };

  useEffect(() => {
    if (allPosts.length) {
      const onePost = allPosts.find((post) => post.id === Number(id));
      setPost(onePost);
    }
    getComments();
  }, [allPosts, id]);

  return (
    <div>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.destination}</p>
          <p>{post.content}</p>
          {comments &&
            comments.map((comment) => {
              <p>{comment.content}</p>;
              console.log(comment.content);
            })}
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
