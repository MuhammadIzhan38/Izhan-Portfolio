// src/components/ProjectFilters.jsx
import React from 'react';
import './ProjectFilters.css';
import { categories } from '../data/projectsData';

const ProjectFilters = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="filter-container">
      {categories.map((cat, index) => (
        <button 
          key={index} 
          className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;