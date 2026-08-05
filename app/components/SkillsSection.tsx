"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "language", label: "Languages" },
  { key: "tools", label: "Tools" },
  { key: "ai", label: "AI" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tech Stack & Expertise"
          subtitle="Technologies and tools I use to build exceptional applications"
        />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                activeCategory === cat.key
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                  : "text-white/40 hover:text-white/60 bg-white/3 border border-white/5 hover:border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              layout
              className="group relative p-4 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <p className="text-sm font-semibold text-white/80 mb-3 group-hover:text-white transition-colors">
                  {skill.name}
                </p>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.04, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                  />
                </div>
                <p className="text-[10px] text-white/30 mt-1.5 text-right font-mono">
                  {skill.level}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
