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
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <button
          className="nav-logo"
          onClick={() => scrollToSection("hero")}
          aria-label="Go to top"
        >
          JS
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav" role="menubar">
          {navLinks.map((link) => (
            <li key={link.id} role="none">
              <button
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => scrollToSection(link.id)}
                role="menuitem"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)}>
            <ul className="nav-links mobile-nav" role="menu">
              {navLinks.map((link) => (
                <li key={link.id} role="none">
                  <button
                    className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                    onClick={() => scrollToSection(link.id)}
                    role="menuitem"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
