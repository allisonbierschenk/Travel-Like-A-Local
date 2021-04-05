import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

export default function Modal(props) {
  const { open, handleOpen } = props;
  return (
    <div className="modal-container">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <Link>
          <p className="x" onClick={(e) => handleOpen(false)}>
            X
          </p>
        </Link>
        <p>Please signin or signup to leave a comment</p>
        <div className="modal-buttons">
          <button className="modal-button">
            <Link className="button-text" to="/signin">
              SIGN IN
            </Link>
          </button>
          <button className="modal-button">
            <Link className="button-text" to="/signup">
              REGISTER
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
