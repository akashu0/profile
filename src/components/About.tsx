import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Coffee, Code } from "lucide-react";

const stats = [
  { icon: Code, value: "2.5+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
  { icon: Award, value: "20+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
  { icon: Users, value: "15+", label: "Happy Clients", color: "from-cyan-500 to-emerald-500" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee", color: "from-orange-500 to-pink-500" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-400/8 dark:bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/8 dark:bg-cyan-600/10 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-3xl border border-dashed border-purple-500/20"
            />

            <div className="relative rounded-3xl overflow-hidden border border-black/8 dark:border-white/10 shadow-2xl">
              <img
                src="/img.jpeg"
                alt="About Febin"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-4"
              >
                <p className="text-white font-semibold text-sm mb-1">Flutter Developer</p>
                <p className="text-gray-300 text-xs">Kochi, Ernakulam • Available for projects</p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {["Flutter", "Dart", "React", "UI/UX"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Designing With{" "}
              <span className="gradient-text">Passion</span> While Exploring The World
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              Designing with passion while exploring the world means creating designs with love and
              dedication, inspired by new places, cultures, and experiences. It reflects a mindset
              of learning, traveling, and turning real-world ideas into creative and meaningful designs.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.04 }}
                    className="glass rounded-2xl p-5 hover:border-purple-300/30 dark:hover:border-white/20 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
