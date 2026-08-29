import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "experience", "skills", "projects", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4" : "bg-transparent py-6"}`} role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          className="text-2xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          onClick={() => scrollToSection("hero")}
          aria-label="Go to top"
        >
          JS
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-mono" role="menubar">
          {navLinks.map((link) => (
            <li key={link.id} role="none">
              <button
                className={`text-sm font-medium transition-colors relative ${activeSection === link.id ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"}`}
                onClick={() => scrollToSection(link.id)}
                role="menuitem"
              >
                <span className="text-zinc-400 dark:text-zinc-600 mr-1.5">//</span>
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-zinc-900 dark:bg-zinc-100" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer z-[101]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[2px] bg-zinc-900 dark:bg-zinc-100 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}></span>
          <span className={`w-6 h-[2px] bg-zinc-900 dark:bg-zinc-100 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-[2px] bg-zinc-900 dark:bg-zinc-100 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}></span>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-[99] md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute right-0 top-0 h-full w-64 bg-zinc-50 dark:bg-zinc-900 p-8 pt-24 shadow-2xl flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={`text-lg font-medium text-left transition-colors ${activeSection === link.id ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
