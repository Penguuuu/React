import React from "react";
import "../index.css";
import myPhoto from "../img/self.jpg"; // Import the image

const AboutMe = () => {
  return (
    <section id="aboutSection"> {/* Add the id here */}
      <h2>About Me</h2>
      <div className="profile-container">
        <img src={myPhoto} alt="Profile Picture" className="SelfImg" />
        <p>
          {/* Add your short bio here */}
          Hello, my name is Peng. This is my portfolio. Thanks for viewing it!
        </p>
      </div>
    </section>
  );
};


const Contact = () => {
  return (
    <section className="content-section" id="contactSection">
      <h2>Contact</h2>
      <p>Email: Email@email.com</p>
    </section>
  );
};

const Resume = () => {
  return (
    <section className="content-section">
      <h2>Resume</h2>
      <p>No resume entered - will add at a later date</p>
    </section>
  );
};

const Content = ({ selectedSection }) => {
  return (
    <div className="content">
      {selectedSection === "About Me" && <AboutMe />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Resume" && <Resume />}
    </div>
  );
};

export default Content;
