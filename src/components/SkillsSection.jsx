// src/components/SkillsSection.jsx
/*import React from 'react';
import './SkillsSection.css';
import { skills } from '../data/projectsData';

const SkillsSection = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Technical Skills</h2>
      
      <div className="tech-list">
        <ul>
          {skills.techList.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="logo-grid">
        {skills.logos.map((group, i) => (
          <div key={i} className="logo-group">
            {group.icons.map((icon, idx) => (
              <React.Fragment key={idx}>
                <span className="skill-icon">{icon}</span>
               
                {idx < group.icons.length - 1 && <span className="arrow">=&gt;</span>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
*/



import React from 'react';
import './SkillsSection.css';
import { skills } from '../data/projectsData';

const SkillsSection = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Technical Skills</h2>
      
      <div className="tech-list">
        <ul>
          {skills.techList.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="logo-grid">
        {skills.logos.map((group, i) => {
          // Assuming the first icon is the Parent language, and the rest are children/frameworks
          const parentIcon = group.icons[0];
          const childIcons = group.icons.slice(1);

          return (
            <div key={i} className="logo-group-cyber">
              
              {/* Parent Logo (Larger) */}
              <span className="parent-skill skill-icon-hover">
                {parentIcon}
              </span>

              {/* Child Logos (Smaller, Container) */}
              {childIcons.length > 0 && (
                <div className="child-skills-container">
                  {childIcons.map((icon, idx) => (
                    <span key={idx} className="child-skill skill-icon-hover">
                      {icon}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;