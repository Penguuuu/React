import React, { useState } from "react";
import "../index.css";
import myPhoto from "../img/self.jpg";

const AboutMe = () => {
  return (
    <section id="aboutSection"> 
      <h2>About Me</h2>
      <div className="profile-container">
        <img src={myPhoto} alt="Profile Picture" className="SelfImg" />
        <p>
          Hello, my name is Peng. This is my portfolio. Thanks for viewing it!
        </p>
      </div>
    </section>
  );
};



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email or save the message to a database
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="content-section" id="contactSection">
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

const Resume = () => {


  
  return (
    <section className="content-section">
      <h2>Resume</h2>
      <p className="resume-Info">No resume entered - will add at a later date</p>
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
