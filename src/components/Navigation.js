import React from "react";
import { HashLink } from "react-router-hash-link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className='nav-container'>
      <Navbar.Brand><img src='https://res.cloudinary.com/dum4u7sro/image/upload/v1589646377/icons_-_Desktop_1_nuacdt.png' alt='logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <HashLink to="/#main">
            <Nav.Item>
              About
            </Nav.Item>
          </HashLink>
          <HashLink to="/portfolio#main">
            <Nav.Item>
              Portfolio
            </Nav.Item>
          </HashLink>
          <HashLink to="/contactme#main">
            <Nav.Item>
             Contact Me
            </Nav.Item>
          </HashLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
