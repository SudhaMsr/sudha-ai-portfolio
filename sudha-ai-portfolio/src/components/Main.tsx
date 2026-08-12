import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="hero-badge">AI & DATA SCIENCE TRAINING</div>
        <div className="hero-avatar" aria-hidden="true">SR</div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/SudhaMsr" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sudhamsr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:sudhamsr23@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
          <h1>Sudha Rani<br/>Maddala</h1>
          <p>AI & Data Science Practitioner | Corporate AI Training Facilitator</p>
          <div className="hero-intro">
            I help teams understand and apply AI through practical, hands-on training — from Generative AI and RAG to Python, machine learning and computer vision.
          </div>
          <div className="hero-actions">
            <a href="#training" className="hero-button primary">Explore training</a>
            <a href="#contact" className="hero-button secondary">Work with me</a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/SudhaMsr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sudhamsr/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:sudhamsr23@gmail.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
      <div className="hero-strip">
        <div><strong>MSc</strong><span>Data Science<br/>University of Bristol</span></div>
        <div><strong>Top 100</strong><span>Google Developer<br/>Solution Challenge</span></div>
        <div><strong>AI/ML</strong><span>NLP • CV • RAG<br/>Real-time AI</span></div>
        <div><strong>UK</strong><span>Bristol-based<br/>Remote & in-person</span></div>
      </div>
    </div>
  );
}

export default Main;
