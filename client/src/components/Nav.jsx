import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to="/">
        <h1>Travel like a Local</h1>
      </Link>
      {currentUser ? (
        <>
          <Link to="/myaccount">
            <p>{currentUser.username}'s Account</p>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <div>
          <button>
            <Link to="/signin">SIGNIN</Link>
          </button>
          <button>
            <Link to="/signup">SIGNUP</Link>
          </button>
        </div>
      )}
      <hr />
      {props.children}
    </header>
  );
}
