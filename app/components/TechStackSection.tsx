"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiSocketdotio,
  SiCloudinary,
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";
import type { ComponentType } from "react";

interface TechItem {
  name: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
  color: string;
}

const techStack: TechItem[] = [
  { name: "React Native", Icon: SiReact, color: "group-hover:text-cyan-400" },
  { name: "Expo", Icon: SiExpo, color: "group-hover:text-white" },
  { name: "TypeScript", Icon: SiTypescript, color: "group-hover:text-blue-400" },
  { name: "JavaScript", Icon: SiJavascript, color: "group-hover:text-yellow-400" },
  { name: "React", Icon: SiReact, color: "group-hover:text-cyan-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "group-hover:text-white" },
  { name: "Firebase", Icon: SiFirebase, color: "group-hover:text-amber-400" },
  { name: "Node.js", Icon: SiNodedotjs, color: "group-hover:text-green-400" },
  { name: "Socket.io", Icon: SiSocketdotio, color: "group-hover:text-white" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "group-hover:text-teal-400" },
  { name: "Cloudinary", Icon: SiCloudinary, color: "group-hover:text-blue-300" },
  { name: "Git", Icon: SiGit, color: "group-hover:text-orange-400" },
  { name: "GitHub", Icon: SiGithub, color: "group-hover:text-white" },
  { name: "Figma", Icon: SiFigma, color: "group-hover:text-pink-400" },
  { name: "OpenAI", Icon: HiOutlineSparkles, color: "group-hover:text-green-300" },
];

export default function TechStackSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Tools I Work With"
          subtitle="My go-to technologies for building production-ready applications"
        />

        <div
          ref={ref}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <tech.Icon
                className={`text-white/20 transition-colors duration-300 ${tech.color}`}
                size={32}
              />
              <span className="text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
