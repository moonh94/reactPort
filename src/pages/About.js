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
                            style={{ float: "left", width:"200px", height:"300px", paddingRight:"20px"}} />
                        <p>My name is Hanmi Moon and I am a front end web developer. I attended the University of Denver Full Stack Web Development program in February 2019 and graduated May 2019. </p>
                        <p>I was born and raised in the beautiful and mountainous state, Colorado.
                           I have a Bachelor of Science degree in Biology and was pursuing nursing when I realized I was following the wrong career path all this time.
                           After quickly realizing that becoming a nurse wasn't the my calling, I began the search for a new career.
                           It didn't take long until web development peaked my interest. The creative freedom that came with this title was refreshing and eyeopening.
                           My friend introduced me to the full stack program and I instantly fell for web development and its entirety.</p>
                    </Col>
                    <Col sm="2"></Col>
                </Row>
            </Container>
        )

    }
}

export default About;