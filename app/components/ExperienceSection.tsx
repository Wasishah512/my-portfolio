"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EXPERIENCE } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";

export default function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My Journey"
          subtitle="Professional experience and continuous learning path"
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-violet-500/10 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-dark-900 border-2 border-violet-500 hidden sm:flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-violet-400 rounded-full" />
                </div>

                <div className="group p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 flex items-center justify-center shrink-0 sm:hidden">
                      {exp.type === "work" ? (
                        <HiOutlineBriefcase className="w-5 h-5 text-violet-400" />
                      ) : (
                        <HiOutlineAcademicCap className="w-5 h-5 text-cyan-400" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        <span className="px-2.5 py-0.5 text-[10px] font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full uppercase tracking-wider">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-white/40 leading-relaxed mb-3">
                        {exp.description}
                      </p>

                      {"items" in exp && exp.items && (
                        <div className="flex flex-wrap gap-2">
                          {exp.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/15 rounded-lg"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
