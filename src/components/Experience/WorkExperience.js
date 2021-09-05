import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import "./WorkExperience.css";
import WorkplaceLogo from "../../assets/images/experience-page/workspace.png"
import AnalyticsLogo from "../../assets/images/experience-page/analytics.png"
import WebBuilding from "../../assets/images/experience-page/web-building.png"
import Coding from "../../assets/images/experience-page/coding.png"
import Widhya from "../../assets/images/experience-page/widhya.jpg"
import TFS from "../../assets/images/experience-page/TSF.png"
// import TSPS from "../../assets/images/experience-page/TSPS.png"
import Techanalogy from "../../assets/images/experience-page/Techanalogy.jpg"
import ScriptFellow from "../../assets/images/experience-page/ScriptFoundation.png"

export class WorkExperience extends Component {
    render() {
        return (
            <div id="experiences">
                <Fade left>
                    <div>
                        <div className="exp-Bg">Work Experience</div>
                        <h2 className="exp-Fr">Work Experience</h2>
                    </div>
                </Fade>
                <div className="work-exp">
                    <Fade bottom cascade>
                        <ul className="work-exp-list">


                            <li>
                                <div className="exp">
                                    <img src={ScriptFellow} className="exp__image" alt="" />
                                    <div className="exp__overlay">
                                        <div className="exp__header">
                                            <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                                <path />
                                            </svg>
                                            <img alt="devloper" className="exp__thumb" width="60px" src={Coding} />
                                            <div className="exp__header-text">
                                                <h3 className="exp__title">Script Fellow'21</h3>
                                                <span className="exp__status">Contributor to Hack-OV8<br />
                                                    Aug' 21 - present</span>
                                            </div>
                                        </div>
                                        <p className="exp__description">Selected among 200 Fellows from 1800+ applications.
                                            Contributing in project Hack-OV8: Platform only for Hackathons</p>
                                    </div>
                                </div>
                            </li>


                            {/* <Fade top > */}
                            <li>
                                <div className="exp">
                                    <img src={Techanalogy} className="exp__image" alt="" />
                                    <div className="exp__overlay">
                                        <div className="exp__header">
                                            <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                                <path />
                                            </svg>
                                            <img alt="devloper" className="exp__thumb" width="80px" src={WorkplaceLogo} />
                                            <div className="exp__header-text">
                                                <h3 className="exp__title">Tech Analogy</h3>
                                                <span className="exp__status">Software Developer Intern<br />
                                                    June' 21 - present</span>
                                            </div>
                                        </div>
                                        <p className="exp__description">Applying my knowledge to work on real world applications by creating projects.</p>
                                    </div>
                                </div>
                            </li>
                            {/* </Fade>


                        <Fade left > */}
                            <li>
                                <div className="exp">
                                    <img src={TFS} className="exp__image" alt="" />
                                    <div className="exp__overlay">
                                        <div className="exp__header">
                                            <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                                <path />
                                            </svg>
                                            <img className="exp__thumb" alt="Data Science" width="50px" src={AnalyticsLogo} />
                                            <div className="exp__header-text">
                                                <h3 className="exp__title" style={{ fontSize: "20px" }}>The Sparks Foundation</h3>
                                                <span className="exp__status" style={{ fontSize: "15px" }}>Data Science & Business Analytics Intern<br />
                                                    March' 21 - April' 21</span>
                                            </div>
                                        </div>
                                        <p className="exp__description">Learned valuable skills and knowledge
                                            on how to apply textbook concepts to solve real-world problems.</p>
                                    </div>
                                </div>
                            </li>
                            {/* </Fade>

                        <Fade right> */}
                            <li>
                                <div className="exp">
                                    <img src={Widhya} className="exp__image" alt="" />
                                    <div className="exp__overlay">
                                        <div className="exp__header">
                                            <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                                <path />
                                            </svg>
                                            <img alt="Web-Developer" className="exp__thumb" width="80px" src={WebBuilding} />
                                            <div className="exp__header-text">
                                                <h3 className="exp__title">Widhya</h3>
                                                <span className="exp__status">Frontend Developer Intern<br />
                                                    Jan' 21 - Feb' 21</span>
                                            </div>
                                        </div>
                                        <p className="exp__description">Worked as a Frontend Developer Intern and secured 40 position out of 600 interns.</p>
                                    </div>
                                </div>
                            </li>
                            {/* </Fade>

                        <Fade top> */}
                            {/* <li>
                                <div className="exp">
                                    <img src={TSPS} className="exp__image" alt="" />
                                    <div className="exp__overlay">
                                        <div className="exp__header">
                                            <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                                <path />
                                            </svg>
                                            <img alt="devloper" className="exp__thumb" width="60px" src={Coding} />
                                            <div className="exp__header-text">
                                                <h3 className="exp__title">The Six PM Show</h3>
                                                <span className="exp__status">Associate Lead<br />
                                                    Nov' 20 - present</span>
                                            </div>
                                        </div>
                                        <p className="exp__description">Responsible for handling the official site of the team. Helping fellow leads and associates with their tasks.</p>
                                    </div>
                                </div>
                            </li> */}
                            {/* </Fade> */}
                        </ul>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default WorkExperience
