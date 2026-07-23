import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "CrowdStrike",
      role: "Frontend Developer Intern",
      period: "Nov 2025 – Apr 2026",
      location: "Remote / Cyber Security",
      type: "Internship",
      logoText: "CS",
      color: "from-purple-600 to-indigo-600",
      borderColor: "border-purple-500/30",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      bullets: [
        "Worked as a Frontend Developer Intern at CrowdStrike, contributing to the development of responsive and scalable web applications using React.js, Redux, JavaScript, HTML, CSS, and Tailwind CSS.",
        "Built reusable UI components, integrated REST APIs, and optimized application performance.",
        "Collaborated with the development team using Git and GitHub while following modern frontend development best practices."
      ],
      skills: ["React.js", "Redux", "JavaScript", "HTML", "CSS", "Tailwind CSS", "REST APIs", "Git", "GitHub"]
    },
    {
      company: "AICTE–Google AI/ML",
      role: "Virtual Intern",
      period: "Jan 2024 – Apr 2024",
      location: "Remote / AI Lab",
      type: "Virtual Internship",
      logoText: "G",
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-500/30",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      bullets: [
        "Completed a certified internship on machine learning using Python, focusing on data preprocessing, model building, and evaluation.",
        "Worked with Scikit-learn and Pandas to develop a mini-project predicting student performance.",
        "Gained hands-on experience with model evaluation metrics like accuracy, precision, and recall."
      ],
      skills: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Model Evaluation", "Data Preprocessing"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Professional <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Internships</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real-world software engineering experience working with leading global technology & cybersecurity organizations.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`glass-card p-6 sm:p-8 border border-white/10 ${exp.borderColor} rounded-3xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300`}
            >
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/10 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                {/* Header Left: Logo & Title */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${exp.color} flex items-center justify-center text-white font-extrabold text-xl shadow-xl shrink-0`}>
                    {exp.logoText}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{exp.role}</h3>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        {exp.type}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs font-normal flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Responsibilities */}
              <div className="mt-6 space-y-3 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Responsibilities & Achievements</h4>
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-4 flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;