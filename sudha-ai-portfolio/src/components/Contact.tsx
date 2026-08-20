import React from "react";
import "../assets/styles/Contact.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">

          <h1>Let's work together.</h1>

          <p>
            Open to freelance AI, machine learning and data science projects,
            as well as practical AI training and technical collaborations.
          </p>

          <div className="contact-actions">

            <div className="email-display">
              sudhamsr23@gmail.com
            </div>

            <a
              className="linkedin-contact-button"
              href="https://www.linkedin.com/in/sudhamsr/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </a>

          </div>

          <div className="contact-details">
            <span>Freelancing</span>
            <span>Hands-on labs</span>
            <span>Remote & in-person</span>
            <span>Bristol, UK</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
