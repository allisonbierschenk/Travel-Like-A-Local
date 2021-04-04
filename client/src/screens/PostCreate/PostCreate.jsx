import React, { useState } from "react";
import SubNav from "../../components/SubNav";
import "./PostCreate.css";

export default function PostCreate(props) {
  const [isActive, setIsActive] = useState(false);
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
    if (value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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
          <div className="float-label">
            <input
              className="title"
              type="title"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <label className={isActive ? "Active" : ""} htmlFor="title">
              Title:
            </label>
          </div>
          <div className="float-label">
            <input
              className="destination"
              type="destination"
              name="destination"
              value={destination}
              onChange={handleChange}
            />
            <label className={isActive ? "Active" : ""} htmlFor="destination">
              Destination:
            </label>
          </div>
          <div className="float-label">
            <label className={isActive ? "Active" : ""} htmlFor="new-text-area">
              Tell your story...
            </label>
            <textarea
              className="new-text-area"
              type="text"
              name="content"
              value={content}
              onChange={handleChange}
            />
          </div>
          <button className="continue-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
