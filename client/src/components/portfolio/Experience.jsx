import React from "react";
import SectionHeading from "./shared/SectionHeading";
import ExperienceCard from "./shared/ExperienceCard";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <SectionHeading
          number="02"
          title="Experience"
        />

        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-block">
              <div className="experience-header">
                <div>
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="role-title">{exp.role}</p>
                </div>
                <p className="period">{exp.period}</p>
              </div>

              <div className="projects-grid">
                {exp.projects.map((project, idx) => (
                  <ExperienceCard key={idx} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
