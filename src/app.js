import React, { useState } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Content from "./components/content";
import Footer from "./components/footer";
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