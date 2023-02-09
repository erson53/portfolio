import React from "react";
import "../assets/css/about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Erson from "../assets/img/erson.jpg";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <Container>
          <Row>
            <Col className="about-text-container">
              <h1 className="about-title">Über mich</h1>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="/about">
                <button className="about-button">Mehr erfahren</button>
              </a>
            </Col>
            <Col className="about-img-container">
              <img src={Erson} alt="erson" className="about-img" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
