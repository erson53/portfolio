import React from "react";
import "../assets/css/projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import test from "../assets/img/zürinight.jpg";

function Projects() {
  return (
    <div id="projects">
      <div className="projects-container">
        <h1 className="projects-title">Bisherige Projekte</h1>
        <Container>
          <Row>
            <Col>
              <Card className="projects-card-container">
                <Card.Img variant="top" src={test} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button className="projects-button">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="projects-card-container">
                <Card.Img variant="top" src={test} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button className="projects-button">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="projects-card-container">
                <Card.Img variant="top" src={test} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <button className="projects-button">Go somewhere</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
