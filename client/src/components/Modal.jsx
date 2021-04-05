import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

export default function Modal(props) {
  const { open, handleOpen } = props;
  return (
    <div className="modal-container">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
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
          <button
            onClick={(e) => handleOpen(false)}
            className="modal-button-notnow"
          >
            NOT NOW
          </button>
        </div>
      </div>
    </div>
  );
}
