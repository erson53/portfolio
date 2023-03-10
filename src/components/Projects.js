import React, { useState } from "react";
import "../assets/css/projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Mac from "../assets/img/mac.png";
import HIVE from "../assets/img/hive.png";
import Minion from "../assets/img/minion.png";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects(props) {
  AOS.init();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <div id="projects">
      <div className="projects-container">
        <h1 className="projects-title" data-aos="fade-up">
          Bisherige Projekte
        </h1>
        <Container>
          <Row>
            <Col>
              <Card data-aos="fade-up" className="projects-card-container">
                <Card.Img variant="top" src={Mac} className="projects-img" />
                <Card.Body>
                  <Card.Title className="projects-card-title">
                    Mac Workplace
                  </Card.Title>
                  <button onClick={handleShow} className="projects-button">
                    Mehr erfahren
                  </button>
                  <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show}
                    onHide={handleClose}
                  >
                    <div className="projects-modal-container">
                      <Modal.Header>
                        <Modal.Title>Mac Workplace Team</Modal.Title>
                        <CloseButton variant="white" onClick={handleClose} />
                      </Modal.Header>

                      <Modal.Body>
                        <div className="projects-modal-body-space">
                          ??? Skript Schreiben, Policy bearbeiten,neuerstellen,
                          verwalten
                        </div>
                        <div className="projects-modal-body-space">
                          ??? Ticket zuweisen, richtig bearbeiten, Abschlie??en
                        </div>
                        <div>
                          ??? Kunden registrieren, l??schen und Benutzerwechseln
                        </div>
                      </Modal.Body>

                      <Modal.Footer>
                        <button
                          onClick={handleClose}
                          className="projects-modal-button"
                        >
                          Schliessen
                        </button>
                      </Modal.Footer>
                    </div>
                  </Modal>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card data-aos="fade-up" className="projects-card-container">
                <Card.Img variant="top" src={HIVE} className="projects-img" />
                <Card.Body>
                  <Card.Title className="projects-card-title">HIVE</Card.Title>
                  <button onClick={handleShow2} className="projects-button">
                    Mehr erfahren
                  </button>
                  <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show2}
                    onHide={handleClose2}
                  >
                    <div className="projects-modal-container">
                      <Modal.Header>
                        <Modal.Title>
                          Full Stack Developer im lernenden Team HIVE
                        </Modal.Title>
                        <CloseButton variant="white" onClick={handleClose2} />
                      </Modal.Header>

                      <Modal.Body>
                        <div className="projects-modal-body-space">
                          ??? Front-end web development
                        </div>
                        <div>
                          ??? Einf??hrungen in die Verschiedenen Webframeworks
                        </div>
                      </Modal.Body>

                      <Modal.Footer>
                        <button
                          onClick={handleClose2}
                          className="projects-modal-button"
                        >
                          Schliessen
                        </button>
                      </Modal.Footer>
                    </div>
                  </Modal>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card data-aos="fade-up" className="projects-card-container">
                <Card.Img variant="top" src={Minion} className="projects-img" />
                <Card.Body>
                  <Card.Title className="projects-card-title">
                    Team Minion
                  </Card.Title>
                  <button className="projects-button" onClick={handleShow3}>
                    Mehr erfahren
                  </button>
                  <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show3}
                    onHide={handleClose2}
                  >
                    <div className="projects-modal-container">
                      <Modal.Header>
                        <Modal.Title>
                          Frontend-Entwickler/in im MinionSquad (Freezer-Team)
                        </Modal.Title>
                        <CloseButton variant="white" onClick={handleClose3} />
                      </Modal.Header>

                      <Modal.Body>
                        <div className="projects-modal-body-space">
                          ??? Front-end web development
                        </div>
                        <div className="projects-modal-body-space">
                          ??? Einf??hrung in Angular und Typescript
                        </div>
                        <div>
                          ??? Scrum
                        </div>
                      </Modal.Body>

                      <Modal.Footer>
                        <button
                          onClick={handleClose3}
                          className="projects-modal-button"
                        >
                          Schliessen
                        </button>
                      </Modal.Footer>
                    </div>
                  </Modal>
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
