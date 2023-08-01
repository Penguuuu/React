import React from "react";

const Navigation = ({ selectedSection, onNavClick }) => {
  const navTitles = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      <ul>
        {navTitles.map((title) => (
          <li
            key={title}
            className={selectedSection === title ? "active" : ""}
            onClick={() => onNavClick(title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
