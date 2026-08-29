import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./shared/SectionHeading";
import ExperienceCard from "./shared/ExperienceCard";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Experience"
          title="Work"
          align="center"
        />

        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{exp.company}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{exp.role}</p>
                </div>
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{exp.period}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {exp.projects.map((project, idx) => (
                  <ExperienceCard key={idx} project={project} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
