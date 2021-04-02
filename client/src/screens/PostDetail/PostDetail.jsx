import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../../components/Comments";
import { getAllComments, addComment } from "../../services/comments";

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const history = useHistory();
  const { allPosts, removePost, currentUser } = props;
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const getComments = async () => {
    const comments = await getAllComments(id);
    setComments(comments);
  };

  const createComment = async (commentData) => {
    const newComment = await addComment(commentData);
    setComments((prevState) => [...prevState, newComment]);
    history.pushState(`/posts/${post.id}`);
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
          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Update</button>
              </Link>
              <button onClick={() => removePost(post.id)}>Delete</button>
            </>
          )}
          <p>Leave a comment below!</p>
          <p>
            <Comments createComment={createComment} />
          </p>
          {comments &&
            comments.map((comment) => {
              return <p>{comment.content}</p>;
            })}
        </div>
      )}
    </div>
  );
}
