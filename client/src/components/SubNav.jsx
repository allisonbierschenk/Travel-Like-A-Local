import React from "react";
import { Link } from "react-router-dom";
import "../Assets/SubNav.css";

export default function SubNav(props) {
  return (
    <div className="sub-nav">
      <Link to="/myaccount">
        <div className="link">My Posts</div>
      </Link>
      <Link to="/posts/new">
        <div className="link">New Post</div>
      </Link>
      <Link to="/myfavorites">
        <div className="link">My Favorites</div>
      </Link>
    </div>
  );
}
