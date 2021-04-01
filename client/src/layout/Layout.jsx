import React from "react";
import Nav from "../components/Nav";

export default function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}
