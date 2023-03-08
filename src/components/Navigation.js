import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navigation.css";

function Navigation() {
  return (
    <Navbar
      variant="dark"
      className="navigation-container"
      fixed="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="https://erson53.github.io/portfolio/#/home">Erson Bytyqi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="https://erson53.github.io/portfolio/#/home">Home</Nav.Link>
            <Nav.Link href="https://erson53.github.io/portfolio/#/about">Über mich</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
