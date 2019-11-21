import React from "react";
import { Container, Row, Col } from "reactstrap";
import profilePic from "../images/profPic.jpg";

class About extends React.Component {
    render() {

        return (
            <Container>
                <Row style={{ padding: "50px", textAlign: "center" }}>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <h1>About Hanmi</h1>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <img src={profilePic}
                            style={{ float: "left", width:"200px", height:"auto", paddingRight:"20px"}} />
                        <p>My name is Hanmi Moon and I am a front end web developer. I attended the University of Denver Full Stack Web Development program in February 2019 and graduated May 2019. </p>
                        <p>I was born and raised in the beautiful and mountainous state of Colorado. 
                            I have a Bachelor of Science degree in Biology and was pursuing nursing when I was first introduced to the world of web development.
                            After spending all my life studying science, it was refreshing to have a means in which I could explore my creative freedom and to share my work through a very social and obtainable platform.
                        </p>
                        <p>I am skilled with React.js, CSS, Javascript, Jquery, and HTML5. I am familiar with backend technology such as, Node.js, MySQL, JSON, and Sequelize.  </p>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
            </Container>
        )

    }
}

export default About;