import React from "react";
import "../assets/css/moreaboutme.css";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Moreaboutme() {
  AOS.init();
  return (
    <div className="moreaboutme-container">
      <div className="moreaboutme-title">
        <h1 data-aos="fade-up">Über mich</h1>
      </div>

      <Accordion>
        <Accordion.Item data-aos="fade-up" eventKey="0" className="item">
          <Accordion.Header>Persönliche Daten</Accordion.Header>
          <Accordion.Body className="moreaboutme-border-under-title">
            <Container>
              <Row className="moreaboutme-row-space">
                <Col>Name</Col>
                <Col>Erson Bytyqi</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Email</Col>
                <Col>erson.bytyqi@swisscom.com</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Tel.</Col>
                <Col>+41 79 833 96 89</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Adresse</Col>
                <Col>Wiesliacher 7 8053, Zürich</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Schultage</Col>
                <Col>Donnerstag (Berufsschule), Freitag (BMS)</Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item data-aos="fade-up" eventKey="1" className="item">
          <Accordion.Header>IT-Kenntnisse</Accordion.Header>
          <Accordion.Body className="moreaboutme-border-under-title">
            <Container>
              <Row className="moreaboutme-row-space">
                <Col>React.js</Col>
                <Col>Erfahrungen in der Schule, ÜK und im HIVE-Team</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Angular</Col>
                <Col>Erfahrungen im Team Minion</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>HTML</Col>
                <Col> Erfahrungen in der Schule, ÜK und bei der Arbeit</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>CSS</Col>
                <Col> Erfahrungen in der Schule, ÜK und bei der Arbeit</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>JavaScript</Col>
                <Col> Erfahrungen in der Schule, ÜK und bei der Arbeit</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Typescript</Col>
                <Col>Erfahrungen im Team Minion</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Java</Col>
                <Col>Grundkenntnisse in der Schule</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Python</Col>
                <Col>Grundkenntnisse in der Schule</Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item data-aos="fade-up" eventKey="2" className="item">
          <Accordion.Header>Sprachen</Accordion.Header>
          <Accordion.Body className="moreaboutme-border-under-title">
            <Row className="moreaboutme-row-space">
              <Col>Deutsch</Col>
              <Col>Muttersprache</Col>
            </Row>
            <Row className="moreaboutme-row-space">
              <Col>Albanisch</Col>
              <Col>Muttersprache</Col>
            </Row>
            <Row className="moreaboutme-row-space">
              <Col>Englisch</Col>
              <Col>Schulkenntnisse (ab 2.Schuljahr)</Col>
            </Row>
            <Row className="moreaboutme-row-space">
              <Col>Französisch</Col>
              <Col>Schulkenntnisse (ab 5.Schuljahr)</Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item data-aos="fade-up" eventKey="3" className="item">
          <Accordion.Header>Hobbys&Interessen</Accordion.Header>
          <Accordion.Body className="moreaboutme-border-under-title">
          <Container>
              <Row className="moreaboutme-row-space">
                <Col>Fussball</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Basketball</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Fitness</Col>
              </Row>
              <Row className="moreaboutme-row-space">
                <Col>Autos</Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Moreaboutme;
