import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./shared/SectionHeading";
import TechBadge from "./shared/TechBadge";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col h-full relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.name}
                </h3>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 select-none">
                  // 0{index + 1}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed flex-1 text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>

              <div className="pt-6 mt-auto border-t border-zinc-200/60 dark:border-zinc-800/60 font-mono text-xs">
                <p className="text-zinc-900 dark:text-zinc-100">
                  <span className="text-zinc-400 dark:text-zinc-500 font-normal mr-2">SYS.IMPACT:</span>
                  {project.impact}
                </p>
              </div>

              {/* Hover effect accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-100 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
