import React from 'react';
import './NavBar.css'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <Navbar bg="success" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img className="img-fluid " style={{ width: "90px" }} src="https://www.freepnglogos.com/uploads/nature-png/natural-logo-26.png" alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 nav-items"
          >
            <Nav.Link className="nav-link" as={Link} to="/" >Home</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/addBlog" >Admin</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/contract" >Contract</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/about" >About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
