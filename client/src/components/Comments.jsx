import React, { useState } from "react";
import { useParams } from "react-router";

export default function Comments(props) {
  const [commentData, setCommentData] = useState({
    content: "",
  });
  const { content } = commentData;
  const { createComment, postId } = props;
  // const { id } = useParams();

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
          createComment(postId, commentData);
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
