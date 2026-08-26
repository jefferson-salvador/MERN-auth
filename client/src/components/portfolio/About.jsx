import React from "react";
import SectionHeading from "./shared/SectionHeading";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <SectionHeading
          number="01"
          title="About Me"
        />

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Full Stack Developer with around 4 years of experience building web applications
              that are maintainable, scalable, and high-quality. I specialize in creating solutions
              that solve real business problems.
            </p>
            <p>
              My work spans frontend development with React and Next.js, backend services using Go and Node.js,
              and everything in between — from REST APIs and gRPC microservices to database-driven applications
              and cloud deployments.
            </p>
            <p>
              I focus on writing clean code, collaborating effectively with teams, and continuously
              improving my craft through hands-on experience with modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
