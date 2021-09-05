import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Tilt from "react-parallax-tilt";
import Fade from 'react-reveal/Fade';
import "./About.css";
import myImg from "../../assets/images/HRDP.jpg"
import Hi from "../../assets/images/Hi.gif"
import Type from "./Type";

function About() {
    return (
        <Container fluid className="about-section" id="about">
            <Fade bottom duration="2000">
                <Container>
                    <Row>
                        <Col md={8} className="about-description">

                            <div className="text_center">
                                <h1 style={{ fontSize: "2.6em" }} className="about-intro">Hi <img alt='Hii' src={Hi} width="50px" style={{ marginBottom: "20px" }}></img>, I'm Harshal Raikwar</h1>
                                <Type />
                            </div>

                            <p className="about-body" >

                                <main id="container">
                                    <div id="terminal">

                                        <section id="terminal__bar">
                                            <div id="bar__buttons">
                                                <button className="bar__button" id="bar__button--exit">&#10005;</button>
                                                <button className="bar__button">&#9472;</button>
                                                <button className="bar__button">&#9723;</button>
                                            </div>
                                            <p id="bar__user">harshal@ubuntu: ~</p>
                                        </section>

                                        <section id="terminal__body">
                                            <div id="terminal__prompt">
                                                <span id="terminal__prompt--user">harshal@ubuntu:</span>
                                                <span id="terminal__prompt--location">~</span>
                                                <span id="terminal__prompt--bling">$ cat about.txt</span>
                                            </div>
                                            <div id="terminal_bio">Hi, my name is Harshal Raikwar. I am a 3rd Year Student at SRM-IST pursuing my Bachelor's Degree in Computer Science and Engineering. I'm passionate about working on open source products & I like to code things from scratch, and enjoy bringing ideas to life in the browser.<br />
                                                <br />
                                                I am a <i>
                                                    <b> Web Developer</b></i> and <i><b>Machine Learning enthusiast.</b>
                                                </i>
                                                <br />
                                                <br />
                                                I am currently a part of the&nbsp;<i>
                                                    <b>Microsoft Learn Student Ambassador </b>
                                                </i>
                                                community.
                                                <br /><br />
                                                I love playing around with web design and hopefully creating something that makes people smile.
                                                <br />
                                            </div>
                                            <div id="terminal__prompt" >
                                                <span id="terminal__prompt--user">harshal@ubuntu:</span>
                                                <span id="terminal__prompt--location">~</span>
                                                <span id="terminal__prompt--bling">$</span>
                                                <span id="terminal__prompt--cursor"></span>
                                            </div>
                                        </section>

                                    </div>
                                </main>

                                <a rel="My Resume" href="https://drive.google.com/file/d/1Af-KFrAAwKeqHxUrP9h0k5Cu5syyu7oa/view?usp=sharing" target="blank"><div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>My Resume
                                </div></a>

                            </p>
                            <br />

                            <div className="text_center_link">

                                <div class="social-btns">
                                    <a class="social__btn github" href="https://github.com/Harshal0902" target="blank"><i class="fa fa-github"></i></a>
                                    <a class="social__btn linkedin" href="https://www.linkedin.com/in/harshal0902" target="blank"><i class="fa fa-linkedin"></i></a>
                                    <a class="social__btn medium" href="https://harshalraikwar07.medium.com" target="blank"><i class="fa fa-medium"></i></a>
                                    <a class="social__btn stack-overflow" href="https://stackoverflow.com/users/15463638/harshal0902" target="blank"><i class="fa fa-stack-overflow"></i></a>
                                    <a class="social__btn twitter" href="https://twitter.com/HarshalRaikwar6" target="blank"><i class="fa fa-twitter"></i></a>
                                    <a class="social__btn instagram" href="https://www.instagram.com/harshal_0902/" alt="Harshal_0902" target="blank"><i class="fa fa-instagram"></i></a>
                                </div>

                            </div>

                        </Col>
                        <Col md={4} className="myAvtar">
                            <Tilt>
                                <img src={myImg} className="img-fluid" alt="Me" />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </Container>
    );
}
export default About;
