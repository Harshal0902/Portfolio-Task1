import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import "./VolExp.css";
import Crosswoc from "../../assets/images/experience-page/crosswoc.png";
import MLSA from "../../assets/images/experience-page/MLSA.jpg";
import Aaruush from "../../assets/images/experience-page/aaruush.jpg";
import LGMSoC from "../../assets/images/experience-page/LetsGrowMore_SoC.jpg";

export class VolExp extends Component {
    render() {
        return (
            <div>
                <Fade left>
                    <div>
                        <div className="vol_exp-Bg">Volunteer Experience</div>
                        <h2 className="vol_exp-Fr">Volunteer Experience</h2>
                    </div>
                </Fade>
                <div className="cards-list">

                    <Fade bottom >
                        <div className="card">
                            <div className="card-image">
                                <img alt="LGMSoC" src={LGMSoC} rel="" />
                            </div>
                            <div className="card-title title-black">
                                <p>Mentor(LGM SoC)</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade left >
                        <div className="card">
                            <div className="card-image">
                                <img alt="MLSA" src={MLSA} rel="" />
                            </div>
                            <div className="card-title title-black">
                                <p>Beta MLSA</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade right >
                        <div className="card">
                            <div className="card-image">
                                <img alt="CrossWoc" src={Crosswoc} rel="" />
                            </div>
                            <div className="card-title title-black">
                                <p>Mentor</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade bottom >
                        <div className="card">
                            <div className="card-image">
                                <img alt="Aaruush" src={Aaruush} rel="" />
                            </div>
                            <div className="card-title title-black">
                                <p>Event Coordinator</p>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>
        )
    }
}

export default VolExp
