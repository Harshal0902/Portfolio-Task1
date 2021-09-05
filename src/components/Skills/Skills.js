import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Skill from "../../assets/images/Skill.svg"
import Tilt from "react-parallax-tilt";

import Python from "../../assets/images/skill-section/python.png"
import Cpp from "../../assets/images/skill-section/cpp.png"
import C from "../../assets/images/skill-section/c.png"
import Js from "../../assets/images/skill-section/javaScript.png"
import TypeScript from "../../assets/images/skill-section/typescript.png"
import ReactJs from "../../assets/images/skill-section/react.png"
import Tensorflow from "../../assets/images/skill-section/tensorflow.png"
import Cloud from "../../assets/images/skill-section/google-cloud.png"
import MongoDBImg from "../../assets/images/skill-section/mongodb.png"
import SASS from "../../assets/images/skill-section/sass.png"
import Tailwind from "../../assets/images/skill-section/tailwindcss.png"
import Bootstrap from "../../assets/images/skill-section/bootstrap.png"

export class Skills extends Component {
    render() {
        return (
            <div>
                <Fade left >
                    <div>
                        <h2 className="skillsbg">Skills</h2>
                        <div className="skillsfr">Skills</div>
                    </div>
                </Fade>
                <Container fluid className="skills_section" id="skills">
                    <Container>
                        <Row>
                            <Col md={4} className="mySkills">
                                <Fade left>
                                    <img alt="My skills" src={Skill} className="img_skill" />
                                </Fade>
                            </Col>

                            <Col md={8} className="skills_description">
                                <Fade top>
                                    <p className="skills_intro">Tech I'm familiar with..</p>
                                </Fade>

                                <div class="skill_images">
                                    <ul>

                                        <Flip left>
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="Python" >
                                                        <img className="My_Skill" alt="python" src={Python} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="200">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="C++" >
                                                        <img className="My_Skill" alt="C++" src={Cpp} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="300">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="C" >
                                                        <img className="My_Skill" alt="C" src={C} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="400">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="JavaScript" >
                                                        <img className="My_Skill" alt="JavaScript" src={Js} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="500">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="TypeScript" >
                                                        <img className="My_Skill" alt="TypeScript" src={TypeScript} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="600">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="ReactJs" >
                                                        <img className="My_Skill" id="React-logo" alt="ReactJs" src={ReactJs} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="600">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="Cloud" >
                                                        <img className="My_Skill" alt="Cloud" src={Cloud} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="700">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="TensorFlow" >
                                                        <img className="My_Skill" alt="Tensorflow" src={Tensorflow} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="800">
                                            <li style={{ width: "90px" }}>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="MongoDB" >
                                                        <img className="My_Skill" alt="MongoDB" src={MongoDBImg} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="900">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="Tailwind CSS" >
                                                        <img className="My_Skill" style={{ marginLeft: "-5px" }} alt="Tailwind CSS" src={Tailwind} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="1000">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="SASS" >
                                                        <img className="My_Skill" alt="SASS" src={SASS} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                        <Flip left delay="1100">
                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="Bootstrap" >
                                                        <img className="My_Skill" alt="Bootstrap" src={Bootstrap} /></span>
                                                </Tilt>
                                            </li>
                                        </Flip>

                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Skills
