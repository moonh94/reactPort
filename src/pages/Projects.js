import React from "react";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import myMusicPic from "../images/musPic.png";
import boxPic from "../images/boxPic.png";
import gifPic from "../images/gifPic.png";
import psyPic from "../images/psyPic.png"

import "./projects.css"


class Projects extends React.Component {
    render() {
        return (
            <Container>
                <Row style={{ paddingTop: "50px", textAlign: "center" }}>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <h1>Projects</h1>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
                <Row style={{ paddingTop: "50px", textAlign: "center" }}>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <div>
                            <p>
                                <img style={{ float: "left", paddingRight: "20px" }}
                                    src={myMusicPic} alt="music search pic"
                                    className="projectPic"></img>
                                <strong>My Music Search</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Search for tour dates in your city!
                                    Is your favorite artist not touring at the moment? No problem, we'll generate a list of artists based on their genre.
                                    What a great way to expand your music knowledge and purchase concert tickets.
                                    <br />
                                    <a href="https://moonh94.github.io/myMusicSearch/">Link Here</a>
                                </div>
                            </p>
                        </div>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
                <Row style={{ paddingTop: "50px", textAlign: "center" }}>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <div>
                            <p>
                                <img style={{ float: "left", paddingRight: "20px" }}
                                    src={boxPic} alt="303 box image"
                                    className="projectPic"></img>
                                <strong>303 Box</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Explore and learn what it takes to be a Colorado native by subscribing to the 303 Box! With a purchase of a monthly subscription, you will receive
                                    popular Colorado based goodies. Did you not enjoy all the items included in your first 303 Box?
                                    You can edit your shipment by choosing the items and their quanities through your account. Experience Colorado at the comfort of your home.
                                    <br />
                                    <a href="https://blooming-cove-17784.herokuapp.com/">Link Here</a>
                                </div>
                            </p>
                        </div>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
                <Row style={{ paddingTop: "50px", textAlign: "center" }}>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <div>
                            <p>
                                <img style={{ float: "left", paddingRight: "20px" }}
                                    src={gifPic} alt="gif image"
                                    className="projectPic"></img>
                                <strong>GIF Yourself</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Looking to pass some time? Treat yourself to some GIFs with GIF Yourself. You'll have unlimited access to all sorts of GIFs all day long.
                                <br />
                                    <a href="https://moonh94.github.io/giftastic/">Link Here</a>
                                </div>
                            </p>
                        </div>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
                <Row style={{ paddingTop: "50px", textAlign: "center" }}>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <div>
                            <p>
                                <img style={{ float: "left", paddingRight: "20px" }}
                                    src={psyPic} alt="psychic game image"
                                    className="projectPic"></img>
                                <strong>Psychic Game</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Can you guess what letter I'm thinking of? Take a peek at one of the earlier projects I have done.
                                    You have 10 chances to guess the letter I am thinking of. Good luck!
                                <br />
                                    <a href="https://moonh94.github.io/psychic-game/">Link Here</a>
                                </div>
                            </p>
                        </div>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;