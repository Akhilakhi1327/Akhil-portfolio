import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";

const EducationSection: React.FC = () => {
  const educationItems = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Gayatri Vidya Parishad College of Engineering",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "Nov 2022 – June 2026",
      score: "SGPA: 8.33",
      scoreType: "College SGPA",
      status: "Pursuing",
      color: "from-blue-500/20 via-indigo-500/10 to-transparent",
      borderColor: "border-blue-500/30 hover:border-blue-500/60",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      highlights: [
        "Specialized in Data Structures & Algorithms, Full-Stack Development, & Relational Databases",
        "Active member of Coding & Technical Student Associations",
        "Consistently maintained high academic standing with 8.33 SGPA"
      ]
    },
    {
      degree: "Intermediate (BIE AP) - MPC",
      institution: "Narayana Junior College",
      location: "Srikakulam, Andhra Pradesh",
      period: "Jun 2020 – Mar 2022",
      score: "88%",
      scoreType: "Board Percentage",
      status: "Completed",
      color: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "border-purple-500/30 hover:border-purple-500/60",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      highlights: [
        "Major subjects in Mathematics, Physics, and Chemistry (MPC)",
        "Secured 88% in Board of Intermediate Education, Andhra Pradesh",
        "Strong foundation in problem solving and analytical thinking"
      ]
    },
    {
      degree: "10th Class SSC (AP Board)",
      institution: "Maitreya Vidya Mandir",
      location: "Srikakulam, Andhra Pradesh",
      period: "Jun 2019 – May 2020",
      score: "CGPA: 9.3",
      scoreType: "Secondary Score",
      status: "Completed",
      color: "from-amber-500/20 via-cyan-500/10 to-transparent",
      borderColor: "border-amber-500/30 hover:border-amber-500/60",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      icon: <Award className="w-6 h-6 text-amber-400" />,
      highlights: [
        "Achieved 9.3 CGPA in Secondary School Certificate (SSC AP)",
        "Excellence in Science, Mathematics, and Computer Fundamentals",
        "Active participant in school level competitions and academic quizzes"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Education <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">& Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Formal academic training and qualifications that shaped my foundation in Computer Science & Information Technology.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationItems.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass-card p-6 sm:p-8 rounded-3xl border ${item.borderColor} bg-gradient-to-b ${item.color} space-y-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group`}
            >
              <div className="space-y-4">
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.score}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{item.period}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300">{item.institution}</div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider">Key Highlights</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/5 font-mono">
                <span>Status: <strong className="text-white">{item.status}</strong></span>
                <span>{item.scoreType}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
