import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./shared/SectionHeading";
import TechBadge from "./shared/TechBadge";
import { skills } from "../../data/skills";

const Skills = () => {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm"
            >
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800 font-mono">
                {skills[category].title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills[category].items.map((skill, idx) => (
                  <TechBadge key={idx} tech={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
