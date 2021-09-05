import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import DevImage from "../../assets/images/developer-illustration.png";

function Contact() {
    return (
        <Container fluid className="contact_section" id="contact">
            <Container>
                <Row>
                    <Col md={6} className="contact_description">
                        <Fade left>
                            <h1 className="contact_left"> &lt;Harshal Raikwar/&gt;</h1>
                            <p className="contact_body">
                                "There are three responses to a piece of design — yes, no, and WOW! Wow is that I aim for."
                            </p>
                            <br />
                            <img fill="dark" src={DevImage} className="img-dev" alt="avatar" />
                        </Fade>
                    </Col>

                    <Col md={6}>
                        <Fade right cascade>
                            <h1 className="formLogo" >Reach Out to Me</h1>

                            <p className="formEmail">Hate forms? Send an <a href="mailto:harshalraikwar07@gmail.com" className="fromEmail__mail">email</a> instead.</p>

                            <form action="https://formspree.io/f/maylzqqd" method="POST" className="contact_right">

                                <fieldset>
                                    <textarea type="text" required className="form_control_input" id="Name"
                                        placeholder="Your name" name="Sender's Name" />
                                </fieldset>
                                <fieldset>
                                    <textarea type="email" required className="form_control_input" id="Email"
                                        placeholder="Your email" name="Sender's Email" />
                                </fieldset>
                                <fieldset>
                                    <textarea className="form_control_textarea" required name="Message" id="Message" placeholder="Message"></textarea>
                                </fieldset>

                                <button type="submit" id="formBtn" className="btn" >SEND</button>

                            </form>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Contact;
