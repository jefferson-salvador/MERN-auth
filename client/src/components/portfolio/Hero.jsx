import profileImage from "../../assets/profile.png";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Profile Photo */}
        <div className="hero-visual">
          <div className="hero-profile-wrapper">
            <img
              src={profileImage}
              alt="Jefferson Salvador - Full Stack Developer"
              className="hero-profile-photo"
              loading="eager"
            />
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Jefferson Salvador</h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-description">
            Building scalable web applications and backend systems with modern technologies.
          </p>

          <div className="hero-cta">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
            <a
              href="/assets/SALVADOR_JEFFERSON-Resume.pdf"
              download="SALVADOR_JEFFERSON-Resume.pdf"
              className="btn btn-secondary"
            >
              <svg
                className="download-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '6px' }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
