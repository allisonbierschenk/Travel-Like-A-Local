import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

export default function Modal(props) {
  const { open, handleOpen } = props;
  return (
    <div className="modal-container" onClick={(e) => handleOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>please login</p>
        <div>
          <button className="button">
            <Link className="button-text" to="/signin">
              SIGNIN
            </Link>
          </button>
          <button className="button">
            <Link className="button-text" to="/signup">
              SIGNUP
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
