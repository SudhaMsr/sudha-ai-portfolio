import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Main.scss";
import profilePhoto from "../assets/images/sudha-profile.png";

function Main() {
  return (
    <div className="container" id="home">
      <div className="about-section">

        <div className="hero-badge">
          AI & DATA SCIENCE | ML | APPLIED AI
        </div>

        <img
          className="hero-avatar"
          src={profilePhoto}
          alt="Sudha Rani Maddala"
        />

        <div className="content">

          <div className="social_icons">
            <a
              href="https://github.com/SudhaMsr"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/sudhamsr/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://medium.com/@sudhamsr"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </div>

          <h1>
            Sudha Rani
            <br />
            Maddala
          </h1>

          <p>
            Machine Learning Engineer | Applied AI & Data Scientist
          </p>

          <div className="hero-intro">
            I build practical AI systems across machine learning, NLP,
            computer vision, speech AI and generative AI — and share
            practical insights through technical work and projects.
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-button primary">
              View projects
            </a>

            <a href="#training" className="hero-button secondary">
              AI training
            </a>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/SudhaMsr"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/sudhamsr/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://medium.com/@sudhamsr"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </div>

        </div>
      </div>

      <div className="hero-strip">
        <div>
          <strong>MSc</strong>
          <span>
            Data Science
            <br />
            University of Bristol
          </span>
        </div>

        <div>
          <strong>Top 100</strong>
          <span>
            Google Developer
            <br />
            Solution Challenge
          </span>
        </div>

        <div>
          <strong>AI/ML</strong>
          <span>
            NLP • CV • RAG
            <br />
            Speech & Real-time AI
          </span>
        </div>

        <div>
          <strong>UK</strong>
          <span>
            Bristol-based
            <br />
            Open to UK roles
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
