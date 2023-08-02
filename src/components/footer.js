import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a
          href="https://github.com/Penguuuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
