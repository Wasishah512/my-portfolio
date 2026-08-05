"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { HiOutlineStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Project Manager",
    text: "Wasi delivered an outstanding mobile application with real-time features. His attention to detail and clean code quality exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Startup Founder",
    text: "Working with Wasi was a pleasure. He understood our requirements quickly and built a high-performance app with beautiful UI and smooth animations.",
    rating: 5,
  },
  {
    name: "Ali R.",
    role: "Tech Lead",
    text: "Exceptional React Native developer. Wasi's expertise in Firebase and real-time communications made our project a success. Highly recommended!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          subtitle="Feedback from clients and collaborators"
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <HiOutlineStar key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-sm text-white/50 leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80">{t.name}</p>
                  <p className="text-xs text-white/30">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
