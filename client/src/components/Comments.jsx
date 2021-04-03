import React, { useState } from "react";

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
    console.log(e.target, "what");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What are your thoughts?</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
