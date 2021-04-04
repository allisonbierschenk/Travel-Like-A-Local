import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import SubNav from "../../components/SubNav";

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
    <div>
      <SubNav />
      <h3>Update your Post</h3>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          updatePost(id, formData);
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
        </div>
        <div className="float-label">
          <input
            className="destination"
            type="destination"
            name="destination"
            value={destination}
            onChange={handleChange}
          />
        </div>
        <div className="float-label">
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
  );
}
