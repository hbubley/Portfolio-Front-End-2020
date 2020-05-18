import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" fixed="top" className='nav-container'>
      <Navbar.Brand href="#main"><img src='https://res.cloudinary.com/dum4u7sro/image/upload/v1589646377/icons_-_Desktop_1_nuacdt.png' alt='logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Item>
              <p>About</p>
            </Nav.Item>
          </Link>
          <Link to="/portfolio">
            <Nav.Item>
              <p>Portfolio</p>
            </Nav.Item>
          </Link>
          <Link to="/contactme">
            <Nav.Item>
              <p>Contact Me</p>
            </Nav.Item>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
