import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./shared/SectionHeading";
import { education } from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          align="center"
        />

        <div className="flex flex-col gap-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{edu.degree}</h3>
                <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 shrink-0">{edu.period}</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{edu.school}</p>
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{edu.location}</p>
                {edu.description && (
                  <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">{edu.description}</p>
                )}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Highlights</h4>
                    <ul className="flex flex-col gap-3">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-zinc-600 dark:text-zinc-400 pl-5 relative leading-relaxed">
                          <span className="absolute left-0 top-0 text-zinc-400 dark:text-zinc-500">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
