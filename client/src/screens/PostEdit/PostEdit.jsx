import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    content: "",
  });
  const { title, destination, content } = formData;
  const { updatePost, allPosts } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const onePost = allPosts.find((post) => post.id === Number(id));
      const { title, destination, content } = onePost;
      setFormData({ title, destination, content });
    };
    if (allPosts.length) {
      prefillFormData();
    }
  }, [allPosts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePost(id, formData);
        }}
      >
        <h3>Update your Post</h3>
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
          Content:
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
