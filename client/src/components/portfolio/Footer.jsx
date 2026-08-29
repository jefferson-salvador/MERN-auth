import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
          © {new Date().getFullYear()} JS_DEV.SYS
        </p>
        <a
          href="https://github.com/jefferson-salvador"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors font-mono"
          aria-label="Visit my GitHub profile"
        >
          [GITHUB]
        </a>
      </div>
    </footer>
  );
};

export default Footer;
