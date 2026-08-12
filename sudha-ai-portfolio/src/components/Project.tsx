import React from "react";
import '../assets/styles/Project.scss';

import { projects } from "../content";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Selected Work</h1>
      <p className="projects-lead">Projects I use to connect AI concepts with practical, real-world applications.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project project-card" key={index}>
            <div className="project-number">0{index + 1}</div>
            <div className="project-content">
              {project.link !== '#' ? <a href={project.link} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a> : <h2>{project.title}</h2>}
              <div className="project-type">{project.type}</div>
              <p>{project.text}</p>
              {project.link !== '#' && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project ↗</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
