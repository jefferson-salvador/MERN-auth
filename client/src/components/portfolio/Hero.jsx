import profileImage from "../../assets/profile.png";
import { motion, useReducedMotion } from "motion/react";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 flex items-center justify-center min-h-dvh">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center w-full gap-12">
        {/* Visual Asset - Editorial Image */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-2xl">
              <img
                src={profileImage}
                alt="Jefferson Salvador - Full Stack Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 inset-4 border border-zinc-200 dark:border-zinc-700 rounded-full"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-center max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-100 mb-6 leading-[1.1]">
            Jefferson Salvador
          </h1>

          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-4 font-mono text-sm text-zinc-500 dark:text-zinc-400 tracking-wide">
              <span className="text-zinc-400 dark:text-zinc-600">&lt;full-stack-dev&gt;</span>
              <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
              <span className="text-zinc-400 dark:text-zinc-600">/&gt;</span>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-sm">
              v2.0 Portfolio
            </div>
          </div>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-[50ch]">
            Building scalable web applications and backend systems with modern technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 font-medium rounded-sm transition-all"
              onClick={() => scrollToSection("projects")}
            >
              View Work
            </button>
            <a
              href="/assets/SALVADOR_JEFFERSON-Resume.pdf"
              download="SALVADOR_JEFFERSON-Resume.pdf"
              className="px-6 py-3 bg-transparent border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-medium rounded-sm transition-all flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
