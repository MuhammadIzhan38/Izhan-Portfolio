import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <h1 className="home-headline">
          Hi, I'm <span className="name-highlight">Muhammad Izhan</span>
        </h1>
        <h2 className="home-subheading">
          I Build <span className="digital-highlight">Digital Solutions</span>
          <br />
          <span className="benefit-text">That Drive Growth and Engage Users</span>
        </h2>
        {/* Changed button to anchor tag for scrolling */}
        <a href="#about">
            <button className="portfolio-btn">
            View My Portfolio
            </button>
        </a>
      </div>
    </section>
  );
};

export default Home;