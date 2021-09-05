import React from 'react';
import Fade from 'react-reveal/Fade';
import "./ProjectItem.css"
import ProjectImg from '../../assets/images/project-page/minecraft.jpeg';
import GitHUbImg from "../../assets/images/project-page/github.png"
import WebImg from "../../assets/images/project-page/website.png"

export default function ProjectItem({
  img = ProjectImg,
  textColor = "black",
  title = 'Project Name',
  desc = 'This is a Project',
  stack = 'Tech Stack',
  git = 'https://github.com',
  website = '/#',
}) {
  return (
    <section id="main">
      <Fade bottom cascade>
        <div className="container_proj">
          <div className="card">
            <div className="imgBx">
              <img src={img} alt="" />
            </div>
            <div className="content">
              <div className="contentBx">
                <h3 style={{ color: textColor }}>{title}<br />
                  <span>{stack}
                    <br />
                    {desc}</span>
                </h3>
                <ul className="sci">
                  <li >
                    <a rel="noreferrer" href={git} target="_blank"><img alt="github" width="45px" height="45px" style={{marginBottom: "-5px"}} src={GitHUbImg} /></a>
                  </li>
                  <li className="web">
                    <a rel="noreferrer" href={website} target="_blank"><img alt="web" width="45px" height="45px" src={WebImg} /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
