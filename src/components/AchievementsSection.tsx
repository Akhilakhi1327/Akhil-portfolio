import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Code2, Sparkles, CheckCircle2 } from "lucide-react";

const AchievementsSection: React.FC = () => {
  const stats = [
    {
      number: "200+",
      label: "LeetCode Solved",
      subtext: "Global Rating: 1742",
      gradient: "from-purple-500 to-pink-500",
      border: "border-purple-500/30"
    },
    {
      number: "1742",
      label: "LeetCode Rating",
      subtext: "Top Competitive Solver",
      gradient: "from-cyan-400 to-blue-500",
      border: "border-cyan-500/30"
    },
    {
      number: "8.33",
      label: "SGPA B.Tech IT",
      subtext: "GVP College of Engineering",
      gradient: "from-blue-500 to-purple-600",
      border: "border-blue-500/30"
    },
    {
      number: "2nd",
      label: "Hackathon Position",
      subtext: "50+ Teams (Design Thinking)",
      gradient: "from-emerald-400 to-cyan-500",
      border: "border-emerald-500/30"
    }
  ];

  const certificates = [
    {
      title: "Cisco Certified",
      issuer: "Cisco",
      detail: "Demonstrated proficiency in networking and IT infrastructure.",
      year: "Certified"
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      detail: "Proved skills in core Python programming and problem-solving.",
      year: "Certified"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      detail: "Foundational knowledge of network architecture and protocols.",
      year: "Certified"
    }
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "Akhil_Nemalipuri",
      rating: "200+ Solved • Rating: 1742",
      url: "https://leetcode.com/u/Akhil_Nemalipuri",
      color: "border-amber-500/40 text-amber-400 bg-amber-500/10"
    },
    {
      platform: "GitHub",
      username: "Akhilakhi1327",
      rating: "github.com/Akhilakhi1327",
      url: "https://github.com/Akhilakhi1327/",
      color: "border-purple-500/40 text-purple-400 bg-purple-500/10"
    },
    {
      platform: "CodeChef",
      username: "akhil_1327",
      rating: "2 Star Coder",
      url: "https://www.codechef.com",
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
    },
    {
      platform: "LinkedIn",
      username: "akhil-nemalipuri-087750321",
      rating: "linkedin.com/in/akhil-nemalipuri-087750321",
      url: "https://www.linkedin.com/in/akhil-nemalipuri-087750321/",
      color: "border-blue-500/40 text-blue-400 bg-blue-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>HONORS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Achievements & <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Competitive programming rankings, hackathon accolades, and industry credentials from official resume.
          </p>
        </motion.div>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-6 border ${stat.border} rounded-3xl text-center space-y-2 hover:scale-105 transition-transform duration-300`}
            >
              <div className={`text-4xl sm:text-5xl font-extrabold font-heading bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="font-bold text-white text-sm font-heading">{stat.label}</div>
              <div className="text-[11px] text-slate-400 font-mono">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Certificates & Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" /> Official Certifications
            </h3>

            <div className="space-y-4">
              {certificates.map((cert, idx) => (
                <div key={idx} className="glass-card p-5 border-white/10 rounded-2xl flex items-center justify-between gap-4 hover:border-purple-500/40 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/20 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base font-heading">{cert.title}</h4>
                      <p className="text-xs text-slate-400">{cert.issuer} • {cert.detail}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-300 shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-400" /> Competitive Coding Profiles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 border-white/10 rounded-2xl space-y-3 group hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded-lg border ${profile.color}`}>
                      {profile.platform}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <div>
                    <div className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {profile.username}
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">
                      {profile.rating}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
