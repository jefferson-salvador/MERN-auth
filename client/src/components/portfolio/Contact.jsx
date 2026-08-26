import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./shared/SectionHeading";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const lastSubmitTime = useRef(0);

  const openModal = () => {
    setIsModalOpen(true);
    setStatus({ type: "", message: "" });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStatus({ type: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    // Check for empty fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "All fields are required.",
      });
      return false;
    }

    // Validate name length
    if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      setStatus({
        type: "error",
        message: "Name must be between 2 and 100 characters.",
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return false;
    }

    // Validate subject length
    if (formData.subject.trim().length < 3 || formData.subject.trim().length > 200) {
      setStatus({
        type: "error",
        message: "Subject must be between 3 and 200 characters.",
      });
      return false;
    }

    // Validate message length
    if (formData.message.trim().length < 10 || formData.message.trim().length > 2000) {
      setStatus({
        type: "error",
        message: "Message must be between 10 and 2000 characters.",
      });
      return false;
    }

    // Check for spam patterns
    const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'click here', 'buy now'];
    const messageContent = (formData.message + formData.subject).toLowerCase();
    const hasSpam = spamKeywords.some(keyword => messageContent.includes(keyword));

    if (hasSpam) {
      setStatus({
        type: "error",
        message: "Your message contains prohibited content.",
      });
      return false;
    }

    // Check for excessive links
    const linkCount = (formData.message.match(/https?:\/\//gi) || []).length;
    if (linkCount > 3) {
      setStatus({
        type: "error",
        message: "Too many links in your message.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Rate limiting: 60 seconds cooldown between submissions
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime.current;
    const cooldownPeriod = 60000; // 60 seconds

    if (timeSinceLastSubmit < cooldownPeriod && lastSubmitTime.current !== 0) {
      const remainingTime = Math.ceil((cooldownPeriod - timeSinceLastSubmit) / 1000);
      setStatus({
        type: "error",
        message: `Please wait ${remainingTime} seconds before sending another message.`,
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          to_name: "Jefferson Salvador",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      lastSubmitTime.current = now;
      setCooldown(true);

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        closeModal();
        setCooldown(false);
      }, 2000);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <SectionHeading number="05" title="Get In Touch" />

          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a
                  href="mailto:jeffsalvador.dev@gmail.com"
                  className="contact-link"
                >
                  jeffsalvador.dev@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">GitHub</span>
                <a
                  href="https://github.com/jefferson-salvador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/jefferson-salvador
                </a>
              </div>
            </div>

            <p className="contact-cta">Let's build something great together.</p>

            <button
              onClick={openModal}
              className="btn btn-primary contact-btn"
            >
              Send Me a Message
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Send Message</h3>
              <button
                onClick={closeModal}
                className="modal-close"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  rows="6"
                  className="form-textarea"
                  placeholder="Your message..."
                />
                <span className="form-hint">
                  {formData.message.length}/2000 characters
                </span>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || cooldown}
                className="btn btn-primary contact-btn"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
