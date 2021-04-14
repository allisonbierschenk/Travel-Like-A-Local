import React, { useState } from "react";
import "../Assets/Comments.css";
import Modal from "./Modal";

export default function Comments(props) {
  const [open, handleOpen] = useState(false);
  const [commentData, setCommentData] = useState({
    content: "",
  });
  const { content } = commentData;
  const { createComment, postId, currentUser } = props;

  const handleClick = (e) => {
    e.preventDefault();
    if (!currentUser) {
      handleOpen(true);
    } else {
      handleOpen(false);
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment(postId, commentData);
    setCommentData({ content: "" });
  };

  return (
    <div className="comments">
      <form onSubmit={handleClick} className="comments">
        {open ? (
          <Modal
            currentUser={currentUser}
            handleOpen={handleOpen}
            open={open}
          />
        ) : null}
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
