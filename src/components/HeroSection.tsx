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
    "React & Node.js Developer",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(40);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(90);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badges Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {/* Live Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-md shadow-lg shadow-purple-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">CrowdStrike Intern & Full-Stack Developer</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </div>

            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/40 backdrop-blur-md shadow-lg shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-300">Open to Opportunities</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-none">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                Akhil Nemalipuri
              </span>
            </h1>

            {/* Animated Typing Text */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
              <span className="font-heading font-bold text-xl sm:text-3xl text-slate-300 flex items-center">
                <Terminal className="w-6 h-6 mr-2.5 text-cyan-400" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 font-mono">
                  {displayText}
                </span>
                <span className="animate-pulse text-cyan-400 ml-1 font-bold">|</span>
              </span>
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Aspiring Software Developer passionate about full-stack web development and problem-solving. Experienced in building scalable web applications with{" "}
            <strong className="text-white">React.js, Node.js, Express.js, MongoDB, Data Structures & Algorithms, C++, and Python</strong>.
          </p>

          {/* Quick Stats Strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 py-2">
            {[
              { icon: <Star className="w-3.5 h-3.5 text-amber-400" />, label: "8.33 SGPA" },
              { icon: <Code className="w-3.5 h-3.5 text-cyan-400" />, label: "200+ LeetCode" },
              { icon: <Briefcase className="w-3.5 h-3.5 text-purple-400" />, label: "CrowdStrike Intern" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs font-medium text-slate-300">
                {s.icon} {s.label}
              </div>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] hover:opacity-95 text-white font-semibold rounded-2xl px-7 py-6 shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-105"
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
              className="border-white/15 bg-slate-900/50 hover:bg-white/10 text-white font-semibold rounded-2xl px-7 py-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5 text-cyan-400" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Akhilakhi1327/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akhil-nemalipuri-087750321/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Akhil_Nemalipuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 font-bold text-xs"
                aria-label="LeetCode Profile"
              >
                &lt;/&gt;
              </a>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-3 font-mono">
              <span className="flex items-center gap-1"><Code className="w-3.5 h-3.5 text-purple-400" /> React & Node.js</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Database className="w-3.5 h-3.5 text-blue-400" /> MongoDB & MySQL</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Glowing Back Aura */}
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-purple-600/30 via-blue-600/30 to-cyan-500/20 blur-[75px] pointer-events-none animate-pulse-slow" />

          {/* Floating Ring 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-purple-500/30 pointer-events-none"
          />

          {/* Floating Ring 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] rounded-full border border-cyan-400/20 pointer-events-none"
          />

          {/* Profile Card Frame */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Gradient Border Portrait Container */}
            <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] shadow-2xl shadow-purple-500/30">
              <div className="p-2 rounded-[22px] bg-[#0B0F19] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Akhil Nemalipuri Portrait"
                  className="w-64 h-80 sm:w-72 sm:h-96 object-cover rounded-[18px] shadow-inner border border-white/10"
                />
              </div>
            </div>

            {/* Floating CrowdStrike Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-2 sm:-bottom-2 sm:-right-4 glass-card px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 shadow-xl backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                CS
              </div>
              <div>
                <div className="text-xs font-bold text-white font-heading">CrowdStrike</div>
                <div className="text-[10px] text-cyan-400 font-mono">Frontend Developer Intern</div>
              </div>
            </motion.div>

            {/* Floating LeetCode Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -left-2 sm:-top-2 sm:-left-4 glass-card px-3.5 py-2 rounded-2xl border border-white/15 flex items-center gap-2.5 shadow-xl backdrop-blur-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                200+
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">LeetCode Solved</div>
                <div className="text-[9px] text-slate-400 font-mono">Rating: 1742</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;