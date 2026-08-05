"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import {
  HiOutlineDeviceMobile,
  HiOutlineViewGridAdd,
  HiOutlineFire,
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineGlobe,
} from "react-icons/hi";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  smartphone: HiOutlineDeviceMobile,
  layers: HiOutlineViewGridAdd,
  flame: HiOutlineFire,
  zap: HiOutlineLightningBolt,
  code: HiOutlineCode,
  brain: HiOutlineSparkles,
  globe: HiOutlineGlobe,
};

const glowColors = [
  "from-violet-500/10 to-violet-600/5",
  "from-cyan-500/10 to-cyan-600/5",
  "from-amber-500/10 to-orange-600/5",
  "from-green-500/10 to-emerald-600/5",
  "from-blue-500/10 to-indigo-600/5",
  "from-pink-500/10 to-rose-600/5",
  "from-violet-500/10 to-purple-600/5",
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Offer"
          subtitle="Professional services to bring your ideas to life"
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
        >
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || HiOutlineCode;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-500 cursor-default"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${glowColors[i] || glowColors[0]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/35 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
