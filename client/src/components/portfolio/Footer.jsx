import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Jefferson Salvador. All rights reserved.
        </p>
        <a
          href="https://github.com/jefferson-salvador"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="Visit my GitHub profile"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
