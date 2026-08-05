"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT } from "../lib/constants";
import SectionHeading from "./SectionHeading";
import { HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineCode } from "react-icons/hi";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const highlights = [
    { icon: HiOutlineCode, label: "Clean Code", desc: "Writing maintainable, scalable code" },
    { icon: HiOutlineLightningBolt, label: "Performance", desc: "Optimized for speed & efficiency" },
    { icon: HiOutlineSparkles, label: "Modern UI", desc: "Beautiful, intuitive interfaces" },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Passionate Developer"
          subtitle="Transforming ideas into production-ready mobile applications"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-pink-500/20 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 glass">
                <img
                  src="images/profilepic.jpg"
                  alt="Syed Wasi Ul Hassan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 glass-strong rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold text-violet-300">React Native</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass-strong rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold text-cyan-300">AI Enthusiast</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base lg:text-lg text-white/60 leading-relaxed">
              {ABOUT.intro}
            </p>

            <p className="text-base lg:text-lg text-white/50 leading-relaxed">
              {ABOUT.experience}
            </p>

            <div>
              <p className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-3">
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {ABOUT.learning.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-white/40 italic">
              {ABOUT.closing}
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-xl glass text-center group hover:bg-white/5 transition-colors"
                >
                  <Icon className="w-6 h-6 text-violet-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-semibold text-white/80">{label}</p>
                  <p className="text-[10px] text-white/30 mt-1 hidden sm:block">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
