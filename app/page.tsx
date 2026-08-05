"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <FloatingSocials />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TechStackSection />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        {/* <TestimonialsSection /> */}
        <GitHubStatsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
