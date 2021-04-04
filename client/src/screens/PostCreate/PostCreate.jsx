import React, { useState } from "react";
import SubNav from "../../components/SubNav";
import "./PostCreate.css";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    content: "",
  });
  const { title, destination, content } = formData;
  const { createPost } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <SubNav />

      <div>
        <h3>Create a Post</h3>
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            createPost(formData);
          }}
        >
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="destination">Destination:</label>
            <input
              id="destination"
              type="text"
              name="destination"
              value={destination}
              onChange={handleChange}
            />
          </div>
          {/* <label>Tell your story...</label> */}
          <textarea
            className="new-text-area"
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
            placeholder=" Tell your story..."
          />
          <button className="continue-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
