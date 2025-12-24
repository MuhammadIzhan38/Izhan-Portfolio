// src/components/ProjectCard.jsx
/*import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(timer);
    }, 30); // Typing speed
    return () => clearInterval(timer);
  }, [text]);

  return <p>{displayedText}<span className="cursor">|</span></p>;
};

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Logic: Advance gets 3 images, Normal gets 2 (sliced from array)
  const imageCount = project.type === 'advance' ? 3 : 2;
  const displayImages = project.images.slice(0, imageCount);

  return (
    <>
      <div className="project-card">
        <h3 className="card-title">{project.title}</h3>
        
        
        <div className="card-tech">
          {project.tech.map((icon, i) => <span key={i}>{icon}</span>)}
        </div>

       
        <div className="card-images">
          {displayImages.map((img, i) => (
             // Placeholder if image fails or for demo
            <div key={i} style={{flex: 1, background: '#222', height: '100px', borderRadius: '5px', overflow:'hidden'}}>
               <img src={img} alt="project" onError={(e) => e.target.style.display='none'} />
            </div>
          ))}
        </div>

        <div className="card-actions">
          <a href={project.link} target="_blank" rel="noreferrer" className="action-btn btn-visit">Visit Site</a>
          <button onClick={() => setShowModal(true)} className="action-btn btn-info">Info</button>
        </div>
      </div>

     
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
                <h2> {project.title}</h2>
              </div>
              <div className="modal-body">
                <Typewriter text={project.description} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
*/





import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(timer);
    }, 30); // Typing speed
    return () => clearInterval(timer);
  }, [text]);

  return <p>{displayedText}<span className="cursor">|</span></p>;
};

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Logic: Advance gets 3 images, Normal gets 2
  const imageCount = project.type === 'advance' ? 3 : 2;
  const displayImages = project.images.slice(0, imageCount);

  // Helper to calculate rotation for the fan/tilt effect
  const getRotation = (index, total) => {
    if (total === 1) return 0;
    const step = 25; // Degree difference between cards
    const start = -((total - 1) * step) / 2;
    return start + (index * step);
  };

  return (
    <>
      {/* --- PROJECT CARD ---
        The main card structure remains the same, but classes are updated for new styles.
      */}
      <div className="project-card">
        <h3 className="card-title">{project.title}</h3>
        
        {/* Logos */}
        <div className="card-tech">
          {project.tech.map((icon, i) => <span key={i}>{icon}</span>)}
        </div>

        {/* --- NEW GLASS/TILT IMAGES CONTAINER ---
          Replaced 'card-images' with 'card-images-container' and 'glass-img' elements.
        */}
        <div className="card-images-container">
          {displayImages.map((img, i) => (
            <div 
              key={i} 
              className="glass-img" 
              style={{ '--r': getRotation(i, displayImages.length) }}
            >
              <img 
                src={img} 
                alt="project preview" 
                onError={(e) => e.target.style.display='none'} 
              />
            </div>
          ))}
        </div>

        {/* --- NEW KEYCAP BUTTONS ---
          Replaced 'action-btn btn-visit' and 'action-btn btn-info' with 'keycap-btn'.
        */}
        <div className="card-actions">
          <a href={project.link} target="_blank" rel="noreferrer" className="keycap-btn">
            Visit Site
          </a>
          <button onClick={() => setShowModal(true)} className="keycap-btn">
            Info
          </button>
        </div>
      </div>

      {/* --- INFO MODAL (Modal styles remain consistent with the Cyber theme) ---
      */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
                <h2>{project.title}</h2>
              </div>
              <div className="modal-body">
                <Typewriter text={project.description} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;


