"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { HiOutlineExternalLink, HiX } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

export default function ProjectsSection() {
  const reactNativeProjects = PROJECTS.filter((project) =>
    (project as any).tech?.includes("React Native")
  );

  const nextJsProjects = PROJECTS.filter((project) =>
    (project as any).tech?.includes("Next.js")
  );

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills and experience"
        />

        {/* React Native Projects */}
        {reactNativeProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/10" />

              <h3 className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
                React Native Projects
              </h3>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {reactNativeProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}

        {/* Next.js Projects */}
        {nextJsProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/10" />

              <h3 className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
                Next.js Projects
              </h3>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {nextJsProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const isReactNative = (project as any).tech?.includes("React Native");

  // Close modal with Escape key
  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: index * 0.15,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="group relative rounded-2xl overflow-hidden glass hover:bg-white/5 transition-all duration-500"
      >
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-[1px] rounded-2xl bg-dark-900/95 group-hover:bg-dark-800/95 transition-colors" />

        <div className="relative">
          {/* Project Image */}
          <div
            className={`relative overflow-hidden ${
              isReactNative
                ? "h-64 sm:h-72 flex items-center justify-center"
                : "h-48 sm:h-56"
            }`}
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
            />

            {isReactNative ? (
              /* React Native Phone Image */
              <div className="relative h-[90%] aspect-[9/18] rounded-[2rem] overflow-hidden border-[5px] border-dark-800 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent pointer-events-none" />
              </div>
            ) : (
              /* Next.js / Web Image */
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent pointer-events-none" />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* GitHub */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/80 border border-white/30 shadow-2xl hover:bg-black transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className="w-5 h-5 text-white" />
              </motion.a>

              {/* Demo */}
              {isReactNative ? (
                <motion.button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="p-3 rounded-xl bg-black/80 border border-white/30 shadow-2xl hover:bg-black transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Watch ${project.title} demo`}
                >
                  <HiOutlineExternalLink className="w-5 h-5 text-white" />
                </motion.button>
              ) : (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/80 border border-white/30 shadow-2xl hover:bg-black transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Open ${project.title} demo`}
                >
                  <HiOutlineExternalLink className="w-5 h-5 text-white" />
                </motion.a>
              )}
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

      {/* React Native Video Modal */}
      <AnimatePresence>
        {isVideoOpen && isReactNative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-dark-900 border border-white/10 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-xs text-white/40 mt-1">
                    Project Demo
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="Close video"
                >
                  <HiX className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Video */}
              <div className="relative bg-black flex items-center justify-center">
                <video
                  key={project.demo}
                  src={project.demo}
                  controls
                  playsInline
                  className="w-full max-h-[75vh] object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}