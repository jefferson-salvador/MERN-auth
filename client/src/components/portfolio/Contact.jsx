import { useState, useRef } from "react";
import { motion } from "motion/react";
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "All fields are required.",
      });
      return false;
    }

    if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      setStatus({
        type: "error",
        message: "Name must be between 2 and 100 characters.",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return false;
    }

    if (formData.subject.trim().length < 3 || formData.subject.trim().length > 200) {
      setStatus({
        type: "error",
        message: "Subject must be between 3 and 200 characters.",
      });
      return false;
    }

    if (formData.message.trim().length < 10 || formData.message.trim().length > 2000) {
      setStatus({
        type: "error",
        message: "Message must be between 10 and 2000 characters.",
      });
      return false;
    }

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

    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime.current;
    const cooldownPeriod = 60000;

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
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionHeading eyebrow="Contact" title="Get In Touch" align="center" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-16 w-full max-w-2xl">
              <div className="flex-1 p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm text-center">
                <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                  Email
                </span>
                <a
                  href="mailto:jeffsalvador.dev@gmail.com"
                  className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 break-all transition-colors"
                >
                  jeffsalvador.dev@gmail.com
                </a>
              </div>

              <div className="flex-1 p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm text-center">
                <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                  GitHub
                </span>
                <a
                  href="https://github.com/jefferson-salvador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
                >
                  github.com/jefferson-salvador
                </a>
              </div>
            </div>

            <p className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-8">
              Let's build something great together.
            </p>

            <button
              onClick={openModal}
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 font-medium rounded-sm transition-all w-full sm:w-auto"
            >
              Send Me a Message
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center z-[1000] p-4 md:p-8" onClick={closeModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-sm p-8 md:p-12 max-w-2xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Send Message</h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm transition-colors"
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
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
                  className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors resize-y min-h-[120px] leading-relaxed"
                  placeholder="Your message..."
                />
                <span className="text-right text-xs text-zinc-400 font-mono mt-1">
                  {formData.message.length}/2000 characters
                </span>
              </div>

              {status.message && (
                <div className={`p-4 text-sm text-center rounded-sm ${
                  status.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400"
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || cooldown}
                className="mt-2 p-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 font-medium rounded-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Contact;
