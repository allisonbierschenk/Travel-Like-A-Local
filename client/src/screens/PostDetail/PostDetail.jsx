import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../../components/Comments";
import { registerUser } from "../../services/auth";
import { getAllComments, addComment } from "../../services/comments";
import "./PostDetail.css";

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const history = useHistory();
  const { allPosts, removePost, currentUser, username } = props;
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  // const getUser = async () => {
  //   const user = await registerUser(registerData)
  // }

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
        <div className="post-detail">
          <h3 className="post-detail-title">{post.title}</h3>
          <p className="post-detail-destination">{post.destination}</p>
          <p className="content">{post.content}</p>
          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button className="button">Update</button>
              </Link>
              <button className="button" onClick={() => removePost(post.id)}>
                Delete
              </button>
            </>
          )}
          <div className="all-comments">
            {comments &&
              comments.map((comment) => {
                return (
                  <p className="each-comment">
                    {comment.user.username} {comment.content}
                  </p>
                );
              })}
          </div>
          <Comments createComment={createComment} postId={post.id} />
        </div>
      )}
    </div>
  );
}
