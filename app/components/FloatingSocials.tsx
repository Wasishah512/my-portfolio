"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { icon: FiGithub, href: PERSONAL.github, label: "GitHub" },
  { icon: FiLinkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: PERSONAL.whatsapp, label: "WhatsApp" },
];

export default function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center gap-4"
    >
      {links.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-violet-400 transition-colors"
          whileHover={{ scale: 1.2, y: -2 }}
          title={label}
        >
          <Icon className="w-[18px] h-[18px]" />
        </motion.a>
      ))}
      <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
    </motion.div>
  );
}
