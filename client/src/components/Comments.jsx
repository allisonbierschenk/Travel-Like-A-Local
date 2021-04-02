import React, { useState } from "react";

export default function Comments(props) {
  const [commentData, setCommentData] = useState({
    content: "",
  });
  const { content } = commentData;
  const { addComment } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(commentData);
        }}
      >
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
