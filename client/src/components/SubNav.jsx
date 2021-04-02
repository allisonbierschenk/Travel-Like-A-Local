import React from "react";
import { Link } from "react-router-dom";

export default function SubNav(props) {
  const { currentUser } = props;

  return (
    <div className="sub-nav">
      <Link to="/myaccount">
        <p>My Posts</p>
      </Link>
      <Link to="/posts/new">
        <p>New Post</p>
      </Link>
      <Link to="/myfavorites">
        <p>My Favorites</p>
      </Link>
    </div>
  );
}
