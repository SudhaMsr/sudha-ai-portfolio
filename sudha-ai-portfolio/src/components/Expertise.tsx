import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faRobot, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

import { training } from "../content";

function Expertise() {
  return (
    <div className="container" id="training">
      <div className="skills-container">
        <h1>Training & Expertise</h1>
        <p className="section-lead">Practical AI education designed around what people need to do with the technology — not just what the technology can do.</p>
        <div className="skills-grid">
          {training.map((item, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={item.icon} size="3x"/>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="flex-chips">
                <span className="chip-title">Topics:</span>
                {item.labels.map((label, i) => <Chip key={i} className='chip' label={label} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
