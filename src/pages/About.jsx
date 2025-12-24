import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      
     

      <div className="about-content-wrapper">
        
        
        <div className="left-details">
          <div className="card water-drop-card">
            <div className="text-content">
              <h2 className="about-title crystal-text">Muhammad Izhan</h2>
              <h3 className="about-subtitle crystal-text">Software Engineer & Full Stack Innovator</h3>
              
              <p className="about-bio crystal-text">
                I don't just build websites; I engineer <strong>intelligent digital ecosystems</strong>. 
                <br /><br />
                Specializing in the <strong>MERN Stack</strong>, <strong>Python/Django</strong>, and <strong>PHP/Laravel</strong>, 
                I fuse robust architectural logic with modern front-end aesthetics. 
                <br /><br />
                My passion lies in bridging the gap between human interaction and machine intelligence—developing 
                custom <strong>AI Chatbots</strong> and integrated solutions that drive real business growth.
              </p>
            </div>
          </div>
        </div>

       
        <div className="right-action">
         
          <a href="/images/Portfolio-resume" download className="resume-link">
            <button className="resume-button">
              Download Resume
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;