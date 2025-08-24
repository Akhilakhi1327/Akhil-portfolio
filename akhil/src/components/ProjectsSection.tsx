import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Shield, Users, Truck } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EliteHire",
      description: "Comprehensive job portal built with MERN stack and Redux for state management, featuring role-based authentication and real-time notifications.",
      longDescription: "A full-featured job portal that connects job seekers with employers. Built with modern web technologies and best practices for scalability and user experience.",
      features: [
        "JWT Authentication & Authorization",
        "Role-based access control (Job Seekers, Recruiters, Admin)",
        "Resume upload and management system",
        "Advanced job search and filtering",
        "Admin dashboard with analytics",
        "Real-time notifications"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Multer"],
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      github: "#",
      demo: "#"
    },
    {
      title: "TrackFleet",
      description: "Real-time courier tracking system built with Node.js and MySQL, supporting multiple user roles and comprehensive package management.",
      longDescription: "A sophisticated courier management system that provides real-time tracking capabilities for packages with multi-role access control.",
      features: [
        "Real-time package tracking",
        "Multi-role system (User, Admin, Delivery)",
        "Package status management",
        "Route optimization",
        "Delivery notifications",
        "Analytics dashboard"
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "Socket.io", "JWT", "RESTful APIs"],
      icon: <Truck className="w-6 h-6" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${project.bgColor} ${project.color}`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift" asChild>
            <a href="https://github.com/Akhilakhi1327" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;