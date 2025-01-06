import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Connect with me on LinkedIn, explore my GitHub, or send me an email!</p>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/tanzinels/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="contact-icon" />
          </a>
          <a
            href="https://github.com/zinels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="mailto:tanz.riyan@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope className="contact-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
