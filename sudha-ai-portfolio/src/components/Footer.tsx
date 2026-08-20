import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/SudhaMsr" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/sudhamsr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
        <a href="https://medium.com/@sudhamsr" target="_blank" rel="noreferrer" aria-label="Medium"><FontAwesomeIcon icon={faMedium} /></a>
        <a href="mailto:sudhamsr23@gmail.com" aria-label="Email"><EmailIcon /></a>
      </div>
      <p>Sudha Rani Maddala · Machine Learning · AI & Data Science · Bristol, UK</p>
    </footer>
  );
}
export default Footer;
