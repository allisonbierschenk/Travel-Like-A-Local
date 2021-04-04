import React from "react";
import { Link } from "react-router-dom";
import "./SubNav.css";

export default function SubNav(props) {
  return (
    <div className="sub-nav">
      <Link to="/myaccount">
        <p className="link">My Posts</p>
      </Link>
      <Link to="/posts/new">
        <p className="link">New Post</p>
      </Link>
      <Link to="/myfavorites">
        <p className="link">My Favorites</p>
      </Link>
    </div>
  );
}
