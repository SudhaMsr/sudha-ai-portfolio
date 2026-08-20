import React from "react";
import { education } from "../content";
import "../assets/styles/Education.scss";

function Education() {
  return (
    <section id="education" className="section-container">
      <div className="section-heading">
        <span>BACKGROUND</span>
        <h2>Education</h2>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-date">{item.date}</div>

            <h3>{item.degree}</h3>

            <h4>{item.institution}</h4>

            <p className="education-location">{item.location}</p>

            <p>{item.text}</p>

            <div className="education-tags">
              {item.highlights.map((highlight, i) => (
                <span key={i}>{highlight}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
