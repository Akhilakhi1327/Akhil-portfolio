import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Wrench, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
  borderColor: string;
  skills: {
    name: string;
    iconUrl: string;
  }[];
}

const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Programming Languages",
      category: "LANGUAGES",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/20 to-blue-500/10",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "SQL", iconUrl: "https://cdn-icons-png.flaticon.com/512/2888/2888909.png" }
      ]
    },
    {
      title: "Frameworks & Tech",
      category: "TECHNOLOGIES",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      accent: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "React.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Redux Toolkit", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "REST APIs", iconUrl: "https://cdn-icons-png.flaticon.com/512/1014/1014224.png" },
        { name: "JWT Auth", iconUrl: "https://jwt.io/img/pic_logo.svg" },
        { name: "Postman", iconUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Multer", iconUrl: "https://cdn-icons-png.flaticon.com/512/3208/3208726.png" },
        { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "TensorFlow", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "Scikit-Learn", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "OOPs", iconUrl: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png" },
        { name: "Open APIs", iconUrl: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }
      ]
    },
    {
      title: "ML & AI",
      category: "MACHINE LEARNING",
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      accent: "from-amber-500/20 to-orange-500/10",
      borderColor: "border-amber-500/30",
      skills: [
        { name: "XGBoost", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
        { name: "LightGBM", iconUrl: "https://raw.githubusercontent.com/microsoft/LightGBM/master/docs/logo/LightGBM_logo_black_text.svg" },
        { name: "SHAP", iconUrl: "https://shap.readthedocs.io/en/latest/_static/shap_header.png" },
        { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", iconUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Matplotlib_logo.svg" },
        { name: "Seaborn", iconUrl: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
        { name: "Predictive Maintenance", iconUrl: "https://cdn-icons-png.flaticon.com/512/2045/2045558.png" }
      ]
    },
    {
      title: "Cloud & DevOps",
      category: "INFRASTRUCTURE",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      accent: "from-emerald-500/20 to-cyan-500/10",
      borderColor: "border-emerald-500/30",
      skills: [
        { name: "Render", iconUrl: "https://intellyx.com/wp-content/uploads/2019/08/Render-cloud-intellyx-BC-logo.png" },
        { name: "Vercel", iconUrl: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
        { name: "GitHub CI/CD", iconUrl: "https://cdn-icons-png.flaticon.com/512/825/825555.png" },
        { name: "Docker (basics)", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Env Management", iconUrl: "https://cdn-icons-png.flaticon.com/512/1004/1004733.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative z-10">
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
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Skills & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-mono">
            Languages, frameworks, databases, and software tools from official resume.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-6 rounded-3xl border ${cat.borderColor} bg-gradient-to-br ${cat.accent} space-y-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Category Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10">
                    {cat.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      — {cat.category}
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading">{cat.title}</h3>
                  </div>
                </div>
              </div>

              {/* Skills List with Icons */}
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/20 hover:bg-slate-900/90 transition-all group"
                  >
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="w-5 h-5 object-contain shrink-0 group-hover:scale-110 transition-transform"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;