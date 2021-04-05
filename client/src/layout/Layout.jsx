import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
      <Footer />
    </div>
  );
}
