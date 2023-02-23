import React from "react";
import "../assets/css/about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Erson from "../assets/img/erson.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  AOS.init();
  return (
    <div id="about">
      <div className="about-container">
        <Container>
          <Row>
            <Col className="about-text-container">
              <h1 className="about-title" data-aos="fade-up">
                Über mich
              </h1>
              <p className="about-text" data-aos="fade-up">
              Ich bin ein Informatiker im zweiten Lehrjahr in Fachrichtung Applikationsentwicklung. Momentan arbeite ich als Frontend Developer im Team Minion, 
              </p>
              <a href="/about">
                <button data-aos="fade-up" className="about-button">
                  Mehr erfahren
                </button>
              </a>
            </Col>
            <Col data-aos="fade-up" className="about-img-container">
              <img src={Erson} alt="erson" className="about-img" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
