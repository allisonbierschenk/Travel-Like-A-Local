import React, { useState } from "react";
import "./Comments.css";

export default function Comments(props) {
  const [commentData, setCommentData] = useState({
    content: "",
  });
  const { content } = commentData;
  const { createComment, postId } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createComment(postId, commentData);
    setCommentData({ content: "" });
  };

  return (
    <div className="comments">
      <form onSubmit={handleSubmit} className="comments">
        <label className="label">What are your thoughts?</label>
        <textarea
          className="text-area"
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
        ></textarea>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
