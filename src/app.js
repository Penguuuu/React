import React, { useState } from "react";
import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Footer from "./footer";
import "./app.css";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("About Me");

  const handleNavClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="app">
      <Header />
      <Navigation selectedSection={selectedSection} onNavClick={handleNavClick} />
      <Content selectedSection={selectedSection} />
      <Footer />
    </div>
  );
};

export default App;
