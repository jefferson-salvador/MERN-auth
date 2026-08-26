import React from "react";
import SectionHeading from "./shared/SectionHeading";
import TechBadge from "./shared/TechBadge";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <SectionHeading
          number="04"
          title="Featured Projects"
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>

              <div className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
