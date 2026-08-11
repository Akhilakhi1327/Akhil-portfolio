import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Wrench, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
  borderColor: string;
  span?: string;
  skills: {
    name: string;
    iconUrl: string;
  }[];
}

const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      category: "CORE LANGUAGES",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/20 to-blue-500/10",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "ML & AI",
      category: "MACHINE LEARNING",
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      accent: "from-amber-500/20 to-orange-500/10",
      borderColor: "border-amber-500/30",
      skills: [
        { name: "TensorFlow", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "Scikit-Learn", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "XGBoost", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
        { name: "LightGBM", iconUrl: "https://raw.githubusercontent.com/microsoft/LightGBM/master/docs/logo/LightGBM_logo_black_text.svg" },
        { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", iconUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Matplotlib_logo.svg" }
      ]
    },
    {
      title: "Frameworks & Technologies",
      category: "FULL STACK",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      accent: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/30",
      span: "md:col-span-2 lg:col-span-2",
      skills: [
        { name: "React.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "REST APIs", iconUrl: "https://cdn-icons-png.flaticon.com/512/1014/1014224.png" },
        { name: "JWT", iconUrl: "https://jwt.io/img/pic_logo.svg" },
        { name: "Postman", iconUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      category: "DEVOPS",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      accent: "from-emerald-500/20 to-cyan-500/10",
      borderColor: "border-emerald-500/30",
      span: "md:col-span-2 lg:col-span-4",
      skills: [
        { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Render", iconUrl: "https://intellyx.com/wp-content/uploads/2019/08/Render-cloud-intellyx-BC-logo.png" },
        { name: "Vercel", iconUrl: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
        { name: "CI/CD", iconUrl: "https://cdn-icons-png.flaticon.com/512/825/825555.png" }
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
            Languages, frameworks, databases, and software tools.
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
              className={`glass-card p-6 sm:p-8 rounded-3xl border ${cat.borderColor} bg-gradient-to-br ${cat.accent} space-y-6 flex flex-col hover:scale-[1.01] transition-transform duration-300 ${cat.span || ""}`}
            >
              {/* Category Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                    {cat.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      — {cat.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">{cat.title}</h3>
                  </div>
                </div>
              </div>

              {/* Skills List with Icons - Flex Wrap for Pill Design */}
              <div className="flex flex-wrap gap-3 pt-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/60 border border-white/5 hover:border-white/20 hover:bg-slate-900/90 transition-all group shadow-sm"
                  >
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="w-5 h-5 object-contain shrink-0 group-hover:scale-110 transition-transform bg-white/5 rounded-sm"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
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