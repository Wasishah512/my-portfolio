"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { HiOutlineDownload, HiOutlineEye, HiOutlineMail } from "react-icons/hi";
import { SiReact, SiTypescript, SiFirebase, SiExpo, SiNodedotjs } from "react-icons/si";

const floatingIcons = [
  { Icon: SiReact, x: "10%", y: "20%", delay: 0, color: "text-cyan-400/20" },
  { Icon: SiTypescript, x: "85%", y: "15%", delay: 0.5, color: "text-blue-400/20" },
  { Icon: SiFirebase, x: "75%", y: "70%", delay: 1, color: "text-amber-400/20" },
  { Icon: SiExpo, x: "15%", y: "75%", delay: 1.5, color: "text-white/10" },
  { Icon: SiNodedotjs, x: "90%", y: "45%", delay: 2, color: "text-green-400/20" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[140px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} hidden lg:block`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
          transition={{
            opacity: { delay: delay + 1, duration: 0.5 },
            scale: { delay: delay + 1, duration: 0.5 },
            y: { delay: delay + 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for projects
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/50 font-medium mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-gradient">{PERSONAL.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/80">
            {PERSONAL.role}
          </h2>
        </motion.div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Building Mobile Apps &amp; AI Solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm sm:text-base text-white/30 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {PERSONAL.headline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl text-sm font-semibold text-white shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineEye className="w-4 h-4" />
            View Projects
          </motion.a>

          {/* <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineMail className="w-4 h-4" />
            Hire Me
          </motion.a> */}

          <motion.a
            href="images/My-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 border border-white/10 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:border-white/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineDownload className="w-4 h-4" />
            Resume
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "4+", label: "Projects" },
            { value: "5+", label: "Technologies" },
            { value: "100%", label: "Dedication" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-white/30 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
