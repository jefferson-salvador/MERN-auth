import React from "react";

const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignmentClasses = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-16 flex flex-col ${alignmentClasses}`}>
      {eyebrow && (
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-6 block font-mono" aria-hidden="true">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 mb-4">
        {title}
      </h2>
      {subtitle && <p className={`text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed ${align === "center" ? "max-w-2xl" : "max-w-2xl"}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
