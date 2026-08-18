"use client";

import { motion } from "framer-motion";
import { PERSONAL, NAV_LINKS } from "@/lib/constants";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="text-xl font-bold tracking-tight inline-block mb-3">
              <span className="text-gradient">{PERSONAL.name.split(" ")[0]}</span>
              <span className="text-white/60">.</span>
            </a>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              {PERSONAL.role} — Building mobile apps, Web apps and AI solutions with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/30 hover:text-white/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* More */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              More
            </h4>
            <div className="space-y-2">
              {NAV_LINKS.slice(5).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/30 hover:text-white/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="block text-sm text-white/30 hover:text-white/60 transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: PERSONAL.github },
                { icon: FiLinkedin, href: PERSONAL.linkedin },
                { icon: FaWhatsapp, href: PERSONAL.whatsapp },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/30 hover:text-white hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/30 hover:text-white hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
