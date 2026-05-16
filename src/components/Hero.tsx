import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@febinbaby.com", label: "Email" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollDown = () =>
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/6 dark:bg-blue-600/8 rounded-full blur-[140px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,80,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100,80,200,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Available for work</span>
            </motion.div>

            <motion.p
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2 tracking-wide"
            >
              I'm Software Engineer
            </motion.p>

            <motion.h1
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="gradient-text">Febin</span>{" "}
              <span className="text-gray-900 dark:text-white">Baby</span>
            </motion.h1>

            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mb-10"
            >
              I'm a passionate Flutter developer with over 2.5 years of experience building
              high-quality, responsive, and user-friendly mobile applications for Android and iOS.
              I specialize in creating clean UI designs, maintaining scalable code architecture,
              and integrating smooth animations and modern features.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.35)" }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold text-base shadow-lg shadow-purple-500/25 transition-all"
              >
                Get In Touch
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="px-8 py-3.5 rounded-xl glass border border-black/8 dark:border-white/10 text-gray-800 dark:text-white font-semibold text-base hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="show"
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass border border-black/8 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-purple-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-cyan-500/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl scale-110" />

            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-black/8 dark:border-white/10 shadow-2xl">
                <img src="/profilepic.jpg" alt="Febin Baby" className="w-full h-full object-cover" />
              </div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-6 glass-strong rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                <p className="text-gray-900 dark:text-white font-bold text-lg">2.5+ Years</p>
              </motion.div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-6 glass-strong rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
                <p className="text-gray-900 dark:text-white font-bold text-lg">20+ Done</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-white transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
