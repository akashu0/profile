import { motion } from "framer-motion";
import { Code2, Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@febinbaby.com", label: "Email" },
];

const links = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/6 dark:border-white/5 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-100/30 dark:to-purple-950/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold gradient-text">Febin Baby</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs">Software Engineer</p>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:border-purple-300/40 dark:hover:border-purple-500/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-black/6 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Febin Baby. Made with{" "}
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> in Kochi, India.
          </p>
          <p className="text-gray-400 dark:text-gray-600 text-sm">contact@febinbaby.com</p>
        </div>
      </div>
    </footer>
  );
}
