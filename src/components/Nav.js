import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav>
          <Link to="/"><p>About</p></Link>
          <Link to="/portfolio"><p>Portfolio</p></Link>
          <Link to="/contactme"><p>Contact Me</p></Link>
      </nav>
    </div>
  );
}
