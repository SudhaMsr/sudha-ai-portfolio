import React from "react";
import { awards, volunteering } from "../content";
import "../assets/styles/Recognition.scss";

function Recognition() {
  return (
    <section id="recognition" className="section-container">

      <div className="section-heading">
        <span>BEYOND THE CLASSROOM</span>
        <h2>Awards & Recognition</h2>
      </div>

      <div className="recognition-grid">
        {awards.map((award, index) => (
          <div className="recognition-card" key={index}>
            <div className="recognition-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{award.title}</h3>

            <h4>{award.organisation}</h4>

            <p>{award.text}</p>
          </div>
        ))}
      </div>

      <div className="section-heading volunteering-heading">
        <span>COMMUNITY</span>
        <h2>Volunteering</h2>
      </div>

      <div className="volunteering-list">
        {volunteering.map((item, index) => (
          <div className="volunteering-item" key={index}>
            <div className="volunteering-index">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div>
              <h3>{item.title}</h3>
              <h4>{item.organisation}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Recognition;
