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

  const createComment = async (commentData, id) => {
    const newComment = await addComment(commentData, id);
    setComments((prevState) => [...prevState, newComment]);
    history.push(`/posts/${post.id}`);
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

          <Comments createComment={createComment} postId={post.id} />

          {comments &&
            comments.map((comment) => {
              return <p>{comment.content}</p>;
            })}
        </div>
      )}
    </div>
  );
}
