import React from "react";
import TechBadge from "./TechBadge";

const ExperienceCard = ({ project }) => {
  return (
    <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 font-mono">
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
