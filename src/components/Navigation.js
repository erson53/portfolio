import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navigation.css";
import NavDropdown from 'react-bootstrap/NavDropdown';  

function Navigation() {
  return (
    <Navbar
      variant="dark"
      className="navigation-container"
      fixed="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">Erson Bytyqi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Home">
              <NavDropdown.Item  href="#home">Home</NavDropdown.Item>
              <NavDropdown.Item href="#about">
              Über mich
              </NavDropdown.Item>
              <NavDropdown.Item href="#projects">Bisherige Projekte</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#memes">Über mich</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
