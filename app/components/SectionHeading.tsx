"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  subtitle: string;
  label?: string;
}

export default function SectionHeading({ title, subtitle, label }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16 lg:mb-20"
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full"
        >
          {label}
        </motion.span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      <p className="text-white/40 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
