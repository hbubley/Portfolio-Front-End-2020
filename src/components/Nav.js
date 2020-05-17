import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav>
          <img src='https://res.cloudinary.com/dum4u7sro/image/upload/v1589646377/icons_-_Desktop_1_nuacdt.png' alt='logo' />
          <Link to="/"><p>About</p></Link>
          <Link to="/portfolio"><p>Portfolio</p></Link>
          <Link to="/contactme"><p>Contact Me</p></Link>
      </nav>
    </div>
  );
}
