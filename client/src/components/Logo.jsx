import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="nav">
      <Link to="/">
        <p className="left-side">
          <img src="https://i.imgur.com/JSkNgG8.png?1" alt="logo" />
          <h1 className="logo">Travel Like A Local</h1>
        </p>
      </Link>
    </div>
  );
}
