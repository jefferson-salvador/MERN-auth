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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
