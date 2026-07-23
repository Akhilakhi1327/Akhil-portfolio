import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import CursorGlow from "@/components/CursorGlow";
import ResumeModal from "@/components/ResumeModal";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ToastContainer from "@/components/ToastContainer";

const Index: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${
      theme === "dark" 
        ? "bg-[#0B0F19] text-white selection:bg-[#7C3AED]/30 selection:text-[#06B6D4]" 
        : "bg-[#F8FAFC] text-slate-900 selection:bg-cyan-500/30 selection:text-cyan-700"
    } overflow-x-hidden font-sans`}>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background Atmosphere & Particles */}
      {theme === "dark" && <BackgroundAtmosphere />}
      
      {/* Radial Cursor Glow Follower */}
      <CursorGlow />

      {/* Navigation Bar with Theme Switcher */}
      <Navigation 
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Global Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Index;
