import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-background">
        <div className="dot" />
      </div>
      <div className="header-content">
        <h1 className="header-name">Izhan</h1>
        <nav className="header-nav">
          
          <a href="#home" className="button">
            <span>Home</span>
          </a>

          <a href="#about" className="button">
             <span>About</span>
          </a>

          <a href="#skills-projects" className="button">
             <span>Skills/Projects</span>
          </a>

          <a href="#contact" className="button">
             <span>Contact</span>
          </a>

        </nav>
      </div>
    </header>
  );
}
