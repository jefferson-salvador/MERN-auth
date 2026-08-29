import React from "react";
import TechBadge from "./TechBadge";

const ExperienceCard = ({ project }) => {
  return (
    <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 shadow-sm rounded-lg hover:shadow-md transition-all">
      <h3 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
        {project.name}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>

      <ul className="space-y-2">
        {project.highlights.map((highlight, index) => (
          <li key={index} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-zinc-400 dark:before:text-zinc-600 font-mono">
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
