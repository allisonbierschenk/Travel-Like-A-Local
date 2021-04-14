import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Nav.css";

export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <div className="nav">
        <Link to="/">
          <a className="left-side">
            <img src="https://i.imgur.com/JSkNgG8.png?1" />
            <h1 className="logo">Travel Like A Local</h1>
          </a>
        </Link>
        {currentUser ? (
          <div className="right-side">
            <Link to="/myaccount">
              <p className="link">{currentUser.username}'s Account</p>
            </Link>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="right-side">
            <button className="button">
              <Link className="button-text" to="/signin">
                SIGN IN
              </Link>
            </button>
            <button className="button">
              <Link className="button-text" to="/signup">
                REGISTER
              </Link>
            </button>
          </div>
        )}
      </div>
      {props.children}
    </header>
  );
}
