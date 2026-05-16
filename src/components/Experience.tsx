import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Palette, Globe, PenTool, TrendingUp } from "lucide-react";

const experiences = [
  {
    icon: Palette,
    role: "UI/UX Designer",
    period: "2023 – 2025",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(139,92,246,0.15)",
    description:
      "I create clean, modern, and user-focused interface designs that make apps and websites easy to use. My goal is to combine visual appeal with functionality for a seamless user experience.",
  },
  {
    icon: PenTool,
    role: "Web Designer",
    period: "2023 – 2025",
    color: "from-blue-500 to-purple-500",
    glow: "rgba(59,130,246,0.15)",
    description:
      "I design modern, responsive, and visually appealing websites focused on user experience. My goal is to create clean layouts that work perfectly across all devices and reflect each brand's identity.",
  },
  {
    icon: Globe,
    role: "Web Developer",
    period: "2023 – 2025",
    color: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.15)",
    description:
      "I develop responsive, high-performing websites that look great on all devices. From design to deployment, I ensure every site is optimized for speed, usability, and modern design standards.",
  },
  {
    icon: Briefcase,
    role: "Graphic Designer",
    period: "2023 – 2025",
    color: "from-emerald-500 to-cyan-500",
    glow: "rgba(16,185,129,0.15)",
    description:
      "I create eye-catching visuals, logos, and branding materials that communicate ideas clearly and creatively. My designs focus on simplicity, consistency, and strong brand identity.",
  },
  {
    icon: TrendingUp,
    role: "Marketing",
    period: "2023 – 2025",
    color: "from-orange-500 to-pink-500",
    glow: "rgba(249,115,22,0.15)",
    description:
      "I help businesses grow online through strategic marketing, social media management, and content creation. Focused on increasing visibility, engagement, and audience reach through creative digital campaigns.",
  },
];

function ExperienceCard({
  exp,
  index,
  isLeft,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = exp.icon;

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isLeft ? "flex-row-reverse md:flex-row" : "flex-row-reverse"}`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="w-full md:w-[calc(50%-2rem)] group"
      >
        <div
          className="glass rounded-2xl p-6 hover:border-purple-300/30 dark:hover:border-white/20 transition-all duration-300 relative overflow-hidden"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${exp.glow}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "";
          }}
        >
          <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color} opacity-70`} />

          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{exp.role}</h3>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-clip-text text-transparent border border-black/8 dark:border-white/10 mb-3 inline-block`}>
                {exp.period}
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2">{exp.description}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center mx-8 relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg flex-shrink-0`}
          style={{ boxShadow: `0 0 15px ${exp.glow}` }}
        />
      </div>

      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function Experience() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-400/8 dark:bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/8 dark:bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A timeline of my professional journey, skills acquired, and roles I've embraced.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 dark:via-white/10 to-transparent" />
          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.role} exp={exp} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
