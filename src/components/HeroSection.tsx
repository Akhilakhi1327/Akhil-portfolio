import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, Terminal, Code, Database, Sparkles, Briefcase, Star } from "lucide-react";
import profilePhoto from "@/assets/profile-standing-new.jpg";

interface HeroSectionProps {
  onOpenResume?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "React & Node.js Developer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(90);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 px-4 md:px-8 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography & Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 relative z-20 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">Open to Opportunities</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">CrowdStrike Intern</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white leading-[1.1]">
              Hi, I'm <br className="hidden sm:block" />
              <span className="gradient-text-primary block mt-2">Akhil Nemalipuri</span>
            </h1>

            {/* Terminal Typing Effect */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-2xl font-mono text-slate-300">
              <Terminal className="mr-3 text-slate-500 w-6 h-6" />
              <span>{displayText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-1 w-2.5 h-6 sm:h-7 bg-white inline-block"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Crafting elegant, high-performance web applications. Focused on seamless user experiences, scalable backend architecture, and writing clean, maintainable code.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-slate-200 font-semibold rounded-full px-8 py-6 shadow-xl shadow-white/10 transition-all duration-300"
              asChild
            >
              <a href="/Akhil_Nemalipuri_Resume.pdf" download="Akhil_Nemalipuri_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent hover:bg-white/5 text-white font-semibold rounded-full px-8 py-6 backdrop-blur-md transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Akhilakhi1327/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akhil-nemalipuri-087750321/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Akhil_Nemalipuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 font-bold font-mono text-sm flex items-center justify-center w-[46px] h-[46px]"
                aria-label="LeetCode"
              >
                &lt;/&gt;
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Sleek Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative mt-12 lg:mt-0"
        >
          {/* Subtle Glow Behind Image */}
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

          {/* Clean Portrait Frame */}
          <div className="relative z-10 group">
            <div className="absolute -inset-0.5 rounded-[32px] bg-gradient-to-b from-white/20 to-white/0 opacity-50 group-hover:opacity-100 transition duration-700 blur-[2px]" />
            <div className="relative p-2 rounded-[32px] bg-black/40 border border-white/10 backdrop-blur-xl">
              <img
                src={profilePhoto}
                alt="Akhil Nemalipuri Portrait"
                className="w-72 h-[420px] sm:w-80 sm:h-[480px] object-cover rounded-[24px] grayscale-[20%] hover:grayscale-0 transition duration-500"
              />
            </div>
            
            {/* Floating Minimalist Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 glass-card px-5 py-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl backdrop-blur-2xl"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-wide">React & Node.js</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">MERN Stack Expert</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;