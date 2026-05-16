import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91 6238075734", color: "from-purple-500 to-pink-500" },
  { icon: Clock, label: "Working Hours", value: "Monday – Friday, 7am – 5pm", color: "from-blue-500 to-purple-500" },
  { icon: MapPin, label: "Location", value: "Kochi, Ernakulam", color: "from-cyan-500 to-blue-500" },
  { icon: Mail, label: "Email", value: "contact@febinbaby.com", color: "from-emerald-500 to-cyan-500" },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/8 dark:bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/8 dark:bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Let's <span className="gradient-text">Talk</span> With Me.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Intro */}
            <div className="glass rounded-2xl p-6">
              <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-2">
                I Create Products Not Just Arts
              </p>
              <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-3">Ready to Start?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                I focus on building useful, functional, and real-world solutions, not just designs
                that look good. Every design I create is driven by purpose, user needs, and problem-solving.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactDetails.map((detail, i) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="glass rounded-xl p-4 flex items-center gap-4 hover:border-purple-300/30 dark:hover:border-white/20 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${detail.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">{detail.label}</p>
                      <p className="text-gray-800 dark:text-white text-sm font-medium">{detail.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

              <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2">Your Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      placeholder="Febin Baby"
                      className="w-full bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-purple-400/60 dark:focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2">Email Address</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="febin@example.com"
                      className="w-full bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-purple-400/60 dark:focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Project Collaboration"
                    className="w-full bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-purple-400/60 dark:focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required
                    rows={5} placeholder="Tell me about your project..."
                    className="w-full bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-purple-400/60 dark:focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(139,92,246,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20 transition-all disabled:opacity-70"
                >
                  {sent ? (
                    "Message Sent! ✓"
                  ) : sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
