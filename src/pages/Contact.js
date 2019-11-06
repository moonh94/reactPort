import React from "react";
import { Container, Row, Col } from "reactstrap";
import Modal from "../components/Modal";
import linkedin from "../images/linkedinIcon.png";
import github from "../images/githubIcon.png";
import "./contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Container style={{ textAlign: "center" }}>
                    <Row style={{ padding: "50px" }}>
                        <Col sm="2"></Col>
                        <Col sm="8">
                            <h1>Contact</h1>
                        </Col>
                        <Col sm="2"></Col>
                    </Row>
                    <Row>
                        <Col sm="2"></Col>
                        <Col sm="8">
                            <p><Modal  /></p>
                        </Col>
                        <Col sm="2"></Col>
                    </Row>
                    <Row>
                        <Col sm="2"></Col>
                        <Col sm="8">
                            <p>
                                <a href="https://www.linkedin.com/feed/">
                                    <img src={linkedin} alt="linkedinIcon" className="icons" />
                                </a>
                            </p>
                        </Col>
                        <Col sm="2"></Col>
                    </Row>
                    <Row>
                        <Col sm="2"></Col>
                        <Col sm="8">
                            <p>
                                <a href="https://github.com/moonh94">
                                    <img src={github}  alt="githubIcon" className="icons"/></a></p>
                        </Col>
                        <Col sm="2"></Col>
                    </Row>
                </Container>
            
                { /* <div style={{
                position: "absolute", left: "50%", top: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <h1>Contact</h1>
                <p>
                    <div>
                        <img src={email} alt="emailIcon" />
                        insert modal here.
            </div>
                    <div>
                        <img src={linkedin} alt="linkedinIcon" />
                        <a href="https://www.linkedin.com/feed/">LinkedIn</a>
                    </div>
                    <div>
                        <img src={github} alt="githubIcon" />
                        <a href="https://github.com/moonh94">Github</a>
                    </div>
                </p>
            </div> */}
            </div >
        )
    }

}

export default Contact;