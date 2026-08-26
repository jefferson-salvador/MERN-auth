import React from "react";
import TechBadge from "./TechBadge";

const ExperienceCard = ({ project }) => {
  return (
    <div className="experience-card">
      <h3 className="project-name">{project.name}</h3>

      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
