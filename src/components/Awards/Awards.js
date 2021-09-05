import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Fade from 'react-reveal/Fade';
import "./Awards.css"
import MLSA from "../../assets/images/awards-page/MLSA Beta.png"
import Devcon from "../../assets/images/awards-page/Devcon 2021.png"
import ApScript from "../../assets/images/awards-page/ApScript Hackathon.png"
import GfGgoS from "../../assets/images/awards-page/GfG Game of Source.png"
import Hack2Connect from "../../assets/images/awards-page/Hack2Connect-Environment-winner.png"
import WinHacks from "../../assets/images/awards-page/Winhacks.png"

class Awards extends Component {
  static get CARD_STYLE() {
    return {
      textAlign: "center",
      background: "#404040",
      color: "#FFF",
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "bold",
      letterSpacing: "0.05rem",
      fontSize: "15px",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }

  render() {
    return (
      <div id="awards">
        <Fade left>
          <div>
            <h2 className="awadsBg">Awards</h2>
            <div className="awadsFg">Awards</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="awards">
            <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="WinHacks" src={WinHacks} />Winner of the Winhacks'21 Hackathon(Special Category)
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="Hack2Connect" src={Hack2Connect} />Winner of the Hack-2-Connect 3.0 Hackathon
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="GfGgoS" src={GfGgoS} />1<sup>st</sup> Runner Up of the GfG Game of Source an open-source event
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="MLSA" src={MLSA} />Microsoft Learn Student Ambassador Beta(2<sup>nd</sup> heights badge)
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="Devcon" src={Devcon} />Runner Up of HackOverflow 2021 Hackathon
              </div>
              <div style={Awards.CARD_STYLE}>
                <img className="My__Cert" alt="ApScript" src={ApScript} />Finalist of the ApScript Hackathon
              </div>
            </ReactCardCarousel>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Awards
