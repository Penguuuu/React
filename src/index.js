import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css'; // Make sure this line is importing the combined CSS file
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
