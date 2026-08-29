import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./shared/SectionHeading";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="About"
          title="Background"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
