import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link className="footer-text" href="/">
          Travel Like A Local
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
}
