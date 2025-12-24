// src/pages/ProjectsPage.jsx
import React, { useState } from 'react';
import ProjectFilters from '../components/ProjectFilters';
import ProjectCard from '../components/ProjectCard';
import SkillsSection from '../components/SkillsSection';
import { projects } from '../data/projectsData';
import './ProjectsPage.css'; // See CSS below

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const getFilteredProjects = () => {
    if (activeCategory === "All") {
      // If All, we return specific structure handled in JSX
      return projects; 
    }
    return projects.filter(p => p.category === activeCategory);
  };

  const filtered = getFilteredProjects();
  const advanceProjects = filtered.filter(p => p.type === 'advance');
  const normalProjects = filtered.filter(p => p.type === 'normal');

  return (
    <div  id="skills-projects" className="projects-page">
      <h1 className="main-heading">My Projects</h1>
      
      <ProjectFilters 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* ADVANCE SECTION */}
      {advanceProjects.length > 0 && (
        <div className="section-block">
          {activeCategory === "All" && <h3 className="sub-heading">Advanced Projects</h3>}
          <div className="grid-advance">
            {advanceProjects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      )}

      {/* NORMAL SECTION */}
      {normalProjects.length > 0 && (
        <div className="section-block">
          {activeCategory === "All" && <h3 className="sub-heading">Standard Projects</h3>}
          <div className="grid-normal">
            {normalProjects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      )}

      {/* SKILLS SECTION */}
      <SkillsSection />
    </div>
  );
};

export default ProjectsPage;