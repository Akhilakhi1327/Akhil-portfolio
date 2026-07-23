import React from "react";
import { motion } from "framer-motion";
import { Github, GitBranch, Star, Code2, ExternalLink, Activity, Sparkles } from "lucide-react";

const GitHubStatsSection: React.FC = () => {
  const username = "Akhilakhi1327";

  const statCards = [
    {
      label: "GitHub Profile",
      value: "@Akhilakhi1327",
      detail: "Active contributor & open source enthusiast",
      icon: <Github className="w-6 h-6 text-purple-400" />,
      gradient: "from-purple-500/10 to-purple-900/20",
      border: "border-purple-500/20 hover:border-purple-500/50",
    },
    {
      label: "Projects on GitHub",
      value: "10+",
      detail: "Full-stack web apps, tools & experiments",
      icon: <GitBranch className="w-6 h-6 text-cyan-400" />,
      gradient: "from-cyan-500/10 to-cyan-900/20",
      border: "border-cyan-500/20 hover:border-cyan-500/50",
    },
    {
      label: "LeetCode Rating",
      value: "1742",
      detail: "200+ problems solved across all difficulties",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-500/10 to-blue-900/20",
      border: "border-blue-500/20 hover:border-blue-500/50",
    },
    {
      label: "Hackathon Rank",
      value: "2nd Place",
      detail: "Design Thinking & Innovation (50+ teams)",
      icon: <Star className="w-6 h-6 text-amber-400" />,
      gradient: "from-amber-500/10 to-amber-900/20",
      border: "border-amber-500/20 hover:border-amber-500/50",
    },
  ];

  return (
    <section id="github-stats" className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>CODING ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            GitHub &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Coding Stats
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Consistent coding activity, open-source contributions, and competitive programming milestones.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCards.map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-5 sm:p-6 border ${card.border} bg-gradient-to-br ${card.gradient} transition-all duration-300 hover:scale-105 hover:shadow-xl space-y-3`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-slate-900/60 border border-white/10">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{card.label}</span>
              </div>
              <div className="font-extrabold text-white text-2xl sm:text-3xl font-heading">{card.value}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{card.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <Github className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">GitHub Contribution Graph</h3>
                <p className="text-xs text-slate-400 font-mono">@{username} — Daily coding activity</p>
              </div>
            </div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Streak Stats Image */}
          <div className="overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col items-center gap-4 p-4">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=7C3AED&fire=06B6D4&currStreakLabel=06B6D4&sideLabels=94A3B8&currStreakNum=ffffff&sideNums=ffffff&dates=64748b`}
              alt="GitHub Streak Stats"
              className="w-full max-w-2xl rounded-xl"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=7C3AED&icon_color=06B6D4&text_color=94A3B8&bg_color=00000000&rank_icon=github`}
              alt="GitHub Stats"
              className="w-full max-w-md rounded-xl"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          {/* Language Stats */}
          <div className="overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 flex items-center justify-center p-4">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=7C3AED&text_color=94A3B8&bg_color=00000000&langs_count=8`}
              alt="Top Languages"
              className="w-full max-w-xs rounded-xl"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Stats powered by GitHub Readme Stats • Updates in real time</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GitHubStatsSection;
