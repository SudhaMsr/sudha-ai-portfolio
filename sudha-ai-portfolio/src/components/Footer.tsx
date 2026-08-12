import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/SudhaMsr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/sudhamsr/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:sudhamsr23@gmail.com"><EmailIcon/></a>
      </div>
      <p>Sudha Rani Maddala · AI & Data Science Training · Bristol, UK</p>
    </footer>
  );
}
export default Footer;
