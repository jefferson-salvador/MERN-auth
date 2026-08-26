import React from "react";
import SectionHeading from "./shared/SectionHeading";
import { education } from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <SectionHeading
          number="05"
          title="Education"
        />

        <div className="education-content">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <div className="education-details">
                <p className="education-school">{edu.school}</p>
                <p className="education-location">{edu.location}</p>
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="education-achievements">
                    <h4 className="achievements-title">Achievements</h4>
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
