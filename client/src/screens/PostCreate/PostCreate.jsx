import React, { useState } from "react";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    content: "",
  });
  const { title, destination, content } = formData;
  const { createPost } = props;

  const handleChange = (e) => {
    const { title, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  };
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost(formData);
        }}
      >
        <h3>Create a Post</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={destination}
            onChange={handleChange}
          />
        </label>
        <label>
          content:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
