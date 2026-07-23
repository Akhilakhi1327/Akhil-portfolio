import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Sparkles, Code2, Award, Terminal, CheckCircle2, Rocket, Brain, Laptop, Server, Zap } from "lucide-react";
import standingPhoto from "@/assets/profile-standing-new.jpg";

const AboutSection = () => {
  const timelineItems = [
    {
      year: "Nov 2025 – Apr 2026",
      title: "Frontend Developer Intern",
      subtitle: "CrowdStrike",
      type: "Internship",
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/40 bg-emerald-500/10",
      description: "Contributed to developing enterprise cybersecurity frontend modules with React.js, Redux, JavaScript, HTML5, CSS3, and Tailwind CSS. Built reusable modular UI components, integrated REST APIs, and optimized render performance."
    },
    {
      year: "Jan 2024 – Apr 2024",
      title: "AICTE–Google AI/ML Virtual Intern",
      subtitle: "AICTE & Google EduSkills",
      type: "Internship",
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/40 bg-cyan-500/10",
      description: "Completed certified virtual internship on machine learning using Python, Scikit-learn, and Pandas. Built predictive models for student academic performance evaluation."
    },
    {
      year: "Nov 2022 – June 2026",
      title: "B.Tech in Information Technology",
      subtitle: "Gayatri Vidya Parishad College of Engineering",
      type: "Education",
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/40 bg-blue-500/10",
      description: "Pursuing B.Tech in Information Technology at GVPCE, Visakhapatnam (SGPA: 8.33). Specialized in Data Structures & Algorithms, Full-Stack Web Development, OOPs, and Relational Databases."
    }
  ];

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
                I am a B.Tech Information Technology student at <strong className="text-white">Gayatri Vidya Parishad College of Engineering</strong> (SGPA: 8.33) and a <strong className="text-cyan-400">Frontend Developer Intern at CrowdStrike</strong>.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Specialized in building full-stack web applications using <span className="text-purple-300 font-medium">React.js, Node.js, Express.js, MongoDB, and MySQL</span>. Solved <strong className="text-white">200+ problem challenges on LeetCode (Rating: 1742)</strong> with strong foundation in Data Structures, Algorithms, C++, and Python.
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

        {/* Education & Experience Timeline */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white font-heading">
              Education & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Professional Journey</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`glass-card p-6 rounded-3xl border ${item.color} space-y-4 hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-slate-900/80 border border-white/10">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-300">
                    {item.year}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base font-heading">{item.title}</h4>
                  <div className="text-xs font-semibold text-purple-300 mt-0.5">{item.subtitle}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;