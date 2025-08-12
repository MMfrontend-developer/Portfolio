import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Muhammad Muhyideen. All rights reserved.</p>
      <div className="footer-links">
         <a href="#header">Header</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
         <a href="#experience">Experience</a>
          <a href="https://github.com/MMfrontend-developer" target="_blank" rel="noopener noreferrer">Designed by MM</a>
      </div>
    </div>
  </footer>
);

export default Footer;