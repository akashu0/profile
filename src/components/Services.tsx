import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Smartphone, Globe, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(139,92,246,0.18)",
    description:
      "I create clean, modern, and user-focused interface designs that make apps and websites easy to use. My goal is to combine visual appeal with functionality for a seamless user experience.",
    tags: ["Figma", "Prototyping", "User Research", "Wireframing"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.18)",
    description:
      "With 2.5+ years of experience in Flutter, I build fast, responsive, and feature-rich mobile apps. I focus on writing scalable code, beautiful UI, and smooth animations for both Android and iOS.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    icon: Globe,
    title: "Web Development",
    color: "from-cyan-500 to-emerald-500",
    glow: "rgba(6,182,212,0.18)",
    description:
      "I develop responsive, high-performing websites that look great on all devices. From design to deployment, I ensure every site is optimized for speed, usability, and modern design standards.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div
        className="glass rounded-2xl p-8 hover:border-purple-300/30 dark:hover:border-white/20 transition-all duration-300 h-full relative overflow-hidden"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${service.glow}`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
      >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full`} />

        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-4">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-black/4 dark:bg-white/5 border border-black/6 dark:border-white/8 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
        >
          Learn More <ArrowUpRight className="w-4 h-4 text-purple-500" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/8 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-400/8 dark:bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Delivering end-to-end digital solutions — from design to deployment — with precision and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
