import React from "react";
import SectionHeading from "./shared/SectionHeading";
import TechBadge from "./shared/TechBadge";
import { skills } from "../../data/skills";

const Skills = () => {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <SectionHeading
          number="03"
          title="Skills"
        />

        <div className="skills-grid">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{skills[category].title}</h3>
              <div className="skill-items">
                {skills[category].items.map((skill, index) => (
                  <TechBadge key={index} tech={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
