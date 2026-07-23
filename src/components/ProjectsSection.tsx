import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, CheckCircle, Briefcase, Truck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import elitehireImg from "@/assets/elitehire.jpg";
import trackfleetImg from "@/assets/trackfleet.jpg";
import induvaImg from "@/assets/induva.jpg";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
  featuredIcon: React.ReactNode;
  accentGradient: string;
  borderColor: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: "elitehire",
      title: "EliteHire - Job Portal Web Application",
      subtitle: "Full-Stack Career & Recruitment Platform",
      category: "Full Stack Web App",
      description: "Full-stack job portal featuring role-based JWT authentication, ATS scoring, resume uploads via Multer, real-time application tracking, and an admin dashboard.",
      highlights: [
        "Developed EliteHire with JWT auth & role-based access for students & recruiters.",
        "Modular backend with search, filtering, pagination, job saving, and admin dashboard.",
        "Implemented ATS scoring, status actions, Multer uploads & integrated SMTP email."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT", "Multer"],
      image: elitehireImg,
      githubUrl: "https://github.com/Akhilakhi1327/EliteHire",
      liveDemoUrl: "https://elitehire-portal.vercel.app",
      featuredIcon: <Briefcase className="w-5 h-5 text-purple-400" />,
      accentGradient: "from-purple-500 to-blue-500",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      id: "trackfleet",
      title: "TrackFleet - Courier Tracking System",
      subtitle: "Full-Stack Package & Logistics System",
      category: "Logistics & Tracking",
      description: "Full-stack courier tracking system with role-based authentication for users, administrators, and delivery personnel. Features auto-generated tracking IDs and shipment management.",
      highlights: [
        "Role-based auth for users, administrators, and delivery personnel.",
        "Shipment management modules with auto-generated tracking IDs & order history.",
        "Admin dashboard for shipment creation, delivery assignment & secure MySQL operations."
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Bootstrap", "Express.js"],
      image: trackfleetImg,
      githubUrl: "https://github.com/Akhilakhi1327/TrackFleet",
      liveDemoUrl: "https://trackfleet.vercel.app",
      featuredIcon: <Truck className="w-5 h-5 text-emerald-400" />,
      accentGradient: "from-cyan-400 to-emerald-400",
      borderColor: "group-hover:border-emerald-500/50"
    },
    {
      id: "house-of-induva",
      title: "House Of Induva",
      subtitle: "Fashion Catalog E-Commerce Website",
      category: "Luxury E-Commerce",
      description: "A luxury fashion catalog e-commerce platform designed for apparel browsing, dynamic category filtering, interactive product image showcases, shopping cart persistence, and checkout experience.",
      highlights: [
        "Interactive fashion product catalog with high-res galleries.",
        "Dynamic shopping cart & instant price calculations.",
        "Responsive luxury UI aesthetics optimized for mobile and desktop."
      ],
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
      image: induvaImg,
      githubUrl: "https://github.com/Akhilakhi1327/House-Of-Induva",
      liveDemoUrl: "https://house-of-induva.vercel.app",
      featuredIcon: <ShoppingBag className="w-5 h-5 text-cyan-400" />,
      accentGradient: "from-blue-500 to-cyan-400",
      borderColor: "group-hover:border-cyan-500/50"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative z-10">
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
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Production-grade full-stack web applications engineered with modular backends, robust REST APIs, and modern responsive frontends.
          </p>
        </motion.div>

        {/* Project Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group glass-card overflow-hidden border border-white/10 rounded-3xl transition-all duration-500 flex flex-col justify-between hover:shadow-2xl ${project.borderColor}`}
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-52 w-full overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-black/30" />

                  {/* Top Badge & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-md">
                      {project.featuredIcon}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                    <p className="text-xs font-medium text-purple-400 mt-0.5">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-1">
                    <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Highlights</h5>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-[11px]">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-2 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/80 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <Button
                  size="sm"
                  className={`flex-1 bg-gradient-to-r ${project.accentGradient} text-white font-semibold text-xs rounded-xl py-4 shadow-lg transition-transform duration-300 hover:scale-[1.02]`}
                  asChild
                >
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="w-4 h-4 mr-1.5" /> Live Demo
                  </a>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/15 bg-slate-900/60 hover:bg-white/10 text-white font-semibold text-xs rounded-xl px-4 py-4 backdrop-blur-md transition-transform duration-300 hover:scale-105"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;