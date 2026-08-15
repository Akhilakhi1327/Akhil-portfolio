import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Sparkles, Code2, Award, Terminal, CheckCircle2, Rocket, Brain, Laptop, Server, Zap } from "lucide-react";
import standingPhoto from "@/assets/profile-standing-new.jpg";

const AboutSection = () => {

  const highlights = [
    { icon: <Laptop className="w-5 h-5 text-cyan-400" />, title: "Full-Stack Development", desc: "Crafting end-to-end web applications using React.js, Node.js, Express.js, and MongoDB/MySQL." },
    { icon: <Brain className="w-5 h-5 text-purple-400" />, title: "Data Structures & Algorithms", desc: "Strong problem solver with 200+ solved LeetCode problems (Rating: 1742)." },
    { icon: <Server className="w-5 h-5 text-emerald-400" />, title: "Backend Architecture", desc: "Designing RESTful APIs, JWT role-based authentication, and efficient database schemas." },
    { icon: <Zap className="w-5 h-5 text-amber-400" />, title: "Cybersecurity Frontend Experience", desc: "Hands-on experience at CrowdStrike building high-throughput, enterprise-grade React interfaces." }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Engineering Solutions with <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Passion & Precision</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Full-Stack Software Developer & CrowdStrike Frontend Intern with a solid foundation in computer science and full-stack web technologies.
          </p>
        </motion.div>

        {/* Main Grid: Story Card + Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="glass-card p-4 rounded-3xl border border-white/10 relative overflow-hidden flex-1 flex flex-col justify-between group">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={standingPhoto}
                  alt="Akhil Nemalipuri Standing Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

                {/* Overlaid Badges */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="glass-card p-3 rounded-xl border border-white/15 backdrop-blur-md flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Visakhapatnam, AP, India
                    </span>
                    <span className="text-emerald-400 font-mono font-bold text-[11px]">SGPA 8.33</span>
                  </div>
                </div>
              </div>

              {/* Recruiter Summary Highlight */}
              <div className="pt-4 px-2 space-y-2">
                <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-cyan-400" /> High-Impact Software Engineer
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focusing on full-stack architecture, clean code practices, responsive UI systems, and backend optimization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Executive Recruiter Bio Box */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-400" /> Executive Professional Summary
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Dynamic Software Developer and former Frontend Intern at CrowdStrike, blending robust full-stack engineering with applied Machine Learning expertise.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Adept at architecting scalable web applications (<span className="text-purple-300 font-medium">React.js, Node.js, MERN</span>) and integrating predictive ML models to build intelligent systems. Backed by exceptional algorithmic problem-solving skills (<strong className="text-white">LeetCode Rating: 1742, 200+ solved</strong>) and a strong foundation in C++ and Python, I am passionate about delivering optimized, data-driven software solutions.
              </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl border border-white/10 space-y-1.5 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-white/10">{h.icon}</div>
                    <h4 className="font-bold text-white text-xs sm:text-sm font-heading">{h.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;