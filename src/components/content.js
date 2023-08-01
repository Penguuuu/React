import React from "react";
import "./style/content.css";

const AboutMe = () => {
  return (
    <section className="content-section">
      <h2>About Me</h2>
      {/* Add Developer's photo/avatar and short bio here */}
    </section>
  );
};

const Portfolio = () => {
  return (
    <section className="content-section">
      <h2>Portfolio</h2>
      {/* Add titled images with links to deployed applications and GitHub repositories */}
    </section>
  );
};

const Contact = () => {
  return (
    <section className="content-section">
      <h2>Contact</h2>
      {/* Add a contact form with fields for name, email address, and message */}
    </section>
  );
};

const Resume = () => {
  return (
    <section className="content-section">
      <h2>Resume</h2>
      {/* Add a link to a downloadable resume and list of proficiencies */}
    </section>
  );
};

const Content = ({ selectedSection }) => {
  return (
    <div className="content">
      {selectedSection === "About Me" && <AboutMe />}
      {selectedSection === "Portfolio" && <Portfolio />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Resume" && <Resume />}
    </div>
  );
};

export default Content;
