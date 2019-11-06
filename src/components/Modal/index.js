import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import emailIcon from "../../images/emailIcon.png";
import "./modal.css";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button style={{ background: "none", border: "none" }} onClick={this.toggle}><img src={emailIcon} alt="emailIcon" className="icons"></img></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Contact Info</ModalHeader>
                    <ModalBody>
                        <h6>Please feel free to contact me via the following:</h6>
                      <div>
                        <b>Email:</b> hmmoon@hotmail.com
                        <br />
                        <b>Phone:</b> 720-982-7130 
                      </div>
                      </ModalBody>
                    <ModalFooter>
                        <Button color="primary" ><a href="mailto:hmmoon@hotmail.com?Subject=" target="_top" style={{color:"white", textDecoration:"none"}}>Email Now</a></Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;