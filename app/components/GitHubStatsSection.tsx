"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { FiGithub, FiStar, FiGitPullRequest, FiActivity } from "react-icons/fi";

const stats = [
  { icon: FiGithub, label: "Repositories", value: "10+" },
  { icon: FiStar, label: "Stars Earned", value: "5+" },
  { icon: FiGitPullRequest, label: "Contributions", value: "100+" },
  { icon: FiActivity, label: "Active Days", value: "365+" },
];

const intensities = [
  "bg-white/3",
  "bg-violet-500/20",
  "bg-violet-500/40",
  "bg-violet-500/60",
  "bg-violet-500/80",
];

export default function GitHubStatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GitHub"
          title="GitHub Activity"
          subtitle="Open source contributions and coding activity"
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl glass hover:bg-white/5 transition-all text-center"
            >
              <stat.icon className="w-6 h-6 text-violet-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-xs text-white/30 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="p-6 rounded-2xl glass"
        >
          <h3 className="text-sm font-semibold text-white/60 mb-4">Contribution Activity</h3>
          <div className="grid grid-cols-[repeat(52,1fr)] gap-0.5">
           {Array.from({ length: 364 }).map((_, i) => {
  const intensity = intensities[(i * 7) % intensities.length];

  return (
    <div
      key={i}
      className={`aspect-square rounded-[2px] ${intensity}`}
    />
  );
})}          </div>
          <div className="flex items-center justify-end gap-1 mt-3">
            <span className="text-[10px] text-white/20">Less</span>
            {["bg-white/3", "bg-violet-500/20", "bg-violet-500/40", "bg-violet-500/60", "bg-violet-500/80"].map(
              (c, i) => (
                <div key={i} className={`w-3 h-3 rounded-[2px] ${c}`} />
              )
            )}
            <span className="text-[10px] text-white/20">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
