import React from "react";
import { Link } from "react-router-dom";

export default function PostPreview(props) {
  const { title, destination } = props;
  return (
    <div>
      <div className="post-preview">
        <h3>{title}</h3>
        <h3>{destination}</h3>
        <Link to="post/:id">Continue reading...</Link>
      </div>
    </div>
  );
}
