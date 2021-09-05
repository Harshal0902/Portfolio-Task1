import React, { useEffect, useState } from 'react';
import "./Projects.css"
import ProjectsInfo from './ProjectInfo';
import ProjectItem from './ProjectItem';
import Fade from 'react-reveal/Fade';

export default function Project() {

    const [searchText, setSearchText] = useState('');
    const [projectsData, setProjectsData] = useState(ProjectsInfo);
    useEffect(() => {
        if (searchText === '') return;
        setProjectsData(() =>
            ProjectsInfo.filter((item) =>
                item.stacks.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText]);
    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
            setProjectsData(ProjectsInfo);
        }
    };

    return (
        <>
            <div id="projects">
                <Fade left>
                    <div>
                        <h2 className="projectbg">Projects</h2>
                        <div className="projectfr">Projects</div>
                    </div>
                </Fade>

                <div className="container_project">
                    <div className="projects__searchBar">
                        <Fade left>
                            <form role="search" id="form">
                                <input type="search" id="search__input"
                                    value={searchText}
                                    onChange={handleChange}
                                    placeholder="Search for tech stacks"
                                    aria-label="Search through section tech stack content" />
                                <button><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
                            </form>
                        </Fade>
                    </div>
                    <div className="projects__allItems">
                        {projectsData.map((item) => (
                            <ProjectItem
                                key={item.id}
                                textColor={item.textColor}
                                title={item.name}
                                desc={item.desc}
                                stack={item.stacks}
                                img={item.img}
                                git={item.github}
                                website={item.web}
                            />
                        ))}
                    </div>
                </div>

            </div>
            <Fade bottom>
                <div className="btn_center">
                    <a href="https://github.com/Harshal0902" target="blank"><div className="btn" style={{ color: "white" }}>More Projects
                    </div></a>

                    {/* <a href="https://github.com/Harshal0902" target="blank"><div className="btn" style={{ color: "white", width: "250px" }}>Hackathon Projects<div className="btn2"></div>
                </div></a> */}
                </div>
            </Fade>
        </>

    )
}
