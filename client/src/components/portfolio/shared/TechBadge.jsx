import React from "react";

const TechBadge = ({ tech }) => {
  return (
    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 rounded-sm text-xs font-mono border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      {tech}
    </span>
  );
};

export default TechBadge;
