import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Users, Zap, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      skills: ["Python", "C++", "JavaScript", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-6 h-6" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      skills: ["React.js", "Node.js", "Express.js", "Django", "Redux", "Tailwind CSS"]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman"]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-6 h-6" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "Data Analysis"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      skills: ["Leadership", "Teamwork", "Problem Solving", "Time Management", "Communication", "Adaptability"]
    },
    {
      title: "Currently Learning",
      icon: <Zap className="w-6 h-6" />,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      skills: ["TypeScript", "Next.js", "Docker", "AWS", "GraphQL", "Microservices"]
    }
  ];

  const achievements = [
    {
      title: "Hackathon Achievement",
      description: "2nd place in 'Design Thinking and Innovation' Hackathon",
      detail: "Competed against 50+ teams",
      icon: "🏆"
    },
    {
      title: "Competitive Programming",
      description: "200+ LeetCode problems solved",
      detail: "Rating: 1742, Active on CodeChef",
      icon: "💻"
    },
    {
      title: "Academic Excellence",
      description: "Consistent academic performance",
      detail: "Current SGPA: 8.33",
      icon: "🎓"
    }
  ];

  const certifications = [
    "NPTEL: Software Engineering",
    "HackerRank Python Certification",
    "Google AI/ML Tech Camp",
    "TensorFlow & Model Deployment"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Skills & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${category.bgColor} ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements and Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">🏆 Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                        <p className="text-foreground/80 mb-1">{achievement.description}</p>
                        <p className="text-sm text-accent">{achievement.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">📜 Certifications</h3>
            <Card className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground/90">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="text-center p-4 hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Months Experience</div>
              </Card>
              <Card className="text-center p-4 hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;