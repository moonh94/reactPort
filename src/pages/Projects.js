import React from "react";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
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
                                    src="https://via.placeholder.com/150" alt="Card image cap"
                                    className="projectPic"></img>
                                <strong>My Music Search</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Search for tour dates in your city!
                                    Is your favorite artist not touring at the moment? No problem, we'll generate a list of artists based on their genre.
                                    What a great way to expand your music knowledge and purchase concert tickets.
                                    <br />
                                    <a href="">Link Here</a>
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
                                    src="https://via.placeholder.com/150" alt="Card image cap"
                                    className="projectPic"></img>
                                <strong>303 Box</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Explore and learn what it takes to be a Colorado native by subscribing to the 303 Box! With a purchase of a monthly subscription, you will receive
                                    popular Colorado based goodies. Did you not enjoy all the items included in your first 303 Box?
                                    You can edit your shipment by choosing the items and their quanities through your account. Experience Colorado at the comfort of your home.
                                    <br />
                                    <a href="">Link Here</a>
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
                                    src="https://via.placeholder.com/150" alt="Card image cap"
                                    className="projectPic"></img>
                                <strong>GIF Yourself</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Looking to pass some time? Treat yourself to some GIFs with GIF Yourself. You'll have unlimited access to all sorts of GIFs all day long.
                                <br />
                                    <a href="">Link Here</a>
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
                                    src="https://via.placeholder.com/150" alt="Card image cap"
                                    className="projectPic"></img>
                                <strong>Psychic Game</strong>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    Can you guess what letter I'm thinking of? Take a peek at one of the earlier projects I have done.
                                    You have 10 chances to guess the letter I am thinking of. Good luck!
                                <br />
                                    <a href="">Link Here</a>
                                </div>
                            </p>
                        </div>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
            </Container>

            // <Container style={{ textAlign: "center" }}>
            //     <Row style={{ padding: "50px", textAlign: "center" }}>
            //         <Col sm="2"></Col>
            //         <Col sm="8">
            //             <h1>Projects</h1>
            //         </Col>
            //         <Col sm="2"></Col>
            //     </Row>
            //     <Row style={{ padding: "0px 50px 50px 50px" }}>
            //         <Col sm="2"></Col>
            //         <Col sm="4">
            //             <div>
            //                 <Card className="card">
            //                     <CardImg src="https://via.placeholder.com/350" alt="Card image cap" />
            //                     <CardBody>
            //                         <CardTitle><strong>My Music Search</strong></CardTitle>
            //                         <CardText style={{height:"200px"}}>
            //                             <p style={{ textAlign: "left" }}>
            //                                 Search for tour dates in your city!
            //                                 Is your favorite artist not touring at the moment? No problem, we'll generate a list of artists based on their genre.
            //                                 What a great way to expand your music knowledge and purchase concert tickets.
            //                             </p></CardText>
            //                         <Button>GO</Button>
            //                     </CardBody>
            //                 </Card>
            //             </div>
            //         </Col>
            //         <Col sm="4">
            //             <div>
            //                 <Card>
            //                     <CardImg top width="50%" src="https://via.placeholder.com/150" alt="Card image cap" />
            //                     <CardBody>
            //                         <CardTitle><strong>303 Box</strong></CardTitle>
            //                         <CardText style={{height:"200px"}}>
            //                             <p style={{ textAlign: "left" }}>
            //                                 Explore and learn what it takes to be a Colorado native by subscribing to the 303 Box! With a purchase of a monthly subscription, you will receive
            //                                 popular Colorado based goodies. Did you not enjoy all the items included in your first 303 Box?
            //                                 You can edit your shipment by choosing the items and their quanities through your account. Experience Colorado at the comfort of your home.
            //                             </p></CardText>
            //                         <Button>GO</Button>
            //                     </CardBody>
            //                 </Card>
            //             </div>

            //         </Col>
            //         <Col sm="2"></Col>
            //     </Row>
            //     <Row style={{ padding: "0px 50px 50px 50px" }}>
            //         <Col sm="2"></Col>
            //         <Col sm="4">
            //         <div>
            //                 <Card>
            //                     <CardImg top width="50%" src="https://via.placeholder.com/150" alt="Card image cap" />
            //                     <CardBody>
            //                         <CardTitle><strong>GIF Yourself</strong></CardTitle>
            //                         <CardText style={{height:"200px"}}>
            //                             <p style={{ textAlign: "left" }}>
            //                                 Looking to pass some time? Treat yourself to some GIFs with GIF Yourself. You'll have unlimited access to all sorts of GIFs all day long. 
            //                             </p></CardText>
            //                         <Button>GO</Button>
            //                     </CardBody>
            //                 </Card>
            //             </div>
            //         </Col>
            //         <Col sm="4">
            //         <div>
            //                 <Card>
            //                     <CardImg top width="50%" src="https://via.placeholder.com/150" alt="Card image cap" />
            //                     <CardBody>
            //                         <CardTitle><strong>Psychic Game</strong></CardTitle>
            //                         <CardText style={{height:"200px"}}>
            //                             <p style={{ textAlign: "left" }}>
            //                                Can you guess what letter I'm thinking of? Take a peek at one of the earlier projects I have done. 
            //                                You have 10 chances to guess the letter I am thinking of. Good luck!
            //                             </p></CardText>
            //                         <Button a href="https://moonh94.github.io/psychic-game/">GO</Button>
            //                     </CardBody>
            //                 </Card>
            //             </div>
            //         </Col>
            //         <Col sm="2"></Col>
            //     </Row>
            // </Container>
        )
    }
}

export default Projects;