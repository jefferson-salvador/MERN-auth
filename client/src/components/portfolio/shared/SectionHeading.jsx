import React from "react";

const SectionHeading = ({ number, title, subtitle }) => {
  return (
    <div className="section-heading-container">
      {number && (
        <span className="section-number" aria-hidden="true">
          {number} //
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
