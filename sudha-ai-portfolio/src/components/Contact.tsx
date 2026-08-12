import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Bring a real business problem.</h1>
          <p>Let's design a practical AI training session around your audience, learning goals and use cases.</p>
          <div className="contact-actions">
            <Button variant="contained" startIcon={<EmailIcon/>} href="mailto:sudhamsr23@gmail.com">Email Sudha</Button>
            <Button variant="outlined" startIcon={<LinkedInIcon/>} href="https://www.linkedin.com/in/sudhamsr/" target="_blank" rel="noreferrer">Connect on LinkedIn</Button>
          </div>
          <div className="contact-details">
            <span>Corporate workshops</span><span>Hands-on labs</span><span>Remote & in-person</span><span>Bristol, UK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
