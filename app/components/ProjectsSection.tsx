"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills and experience"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden glass hover:bg-white/5 transition-all duration-500"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-[1px] rounded-2xl bg-dark-900/95 group-hover:bg-dark-800/95 transition-colors" />

      <div className="relative">
      
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
          <img
            src={project.image}
            alt={project.title}
            
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.github}
              className="p-3 rounded-xl glass-strong hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href={project.demo}
              className="p-3 rounded-xl glass-strong hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiOutlineExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.features.slice(0, 5).map((f) => (
              <span
                key={f}
                className="px-2 py-0.5 text-[10px] text-white/40 bg-white/3 rounded-md border border-white/5"
              >
                {f}
              </span>
            ))}
            {project.features.length > 5 && (
              <span className="px-2 py-0.5 text-[10px] text-violet-400 bg-violet-500/10 rounded-md">
                +{project.features.length - 5} more
              </span>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/15 rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
