import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "AICTE-Google AI/ML Program",
      duration: "Jan 2024 – Apr 2024",
      location: "Remote",
      type: "Internship",
      description: [
        "Built machine learning models in Python using Scikit-learn and Pandas for data analysis and prediction",
        "Focused on comprehensive data preprocessing, feature engineering, and model evaluation metrics",
        "Developed a mini-project predicting student performance using regression algorithms",
        "Gained hands-on experience with TensorFlow and model deployment techniques"
      ],
      skills: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Machine Learning", "Data Analysis"]
    }
  ];

  const education = [
    {
      institution: "GVP College of Engineering",
      degree: "B.Tech in Information Technology",
      duration: "2022 – 2026",
      grade: "SGPA: 8.33",
      status: "Pursuing"
    },
    {
      institution: "Narayana Jr. College",
      degree: "Intermediate (MPC)",
      duration: "2020 – 2022",
      grade: "88%",
      status: "Completed"
    },
    {
      institution: "Maitreya Vidya Mandir",
      degree: "High School",
      duration: "2019 – 2020",
      grade: "CGPA: 9.3",
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="mr-3 text-primary" size={24} />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-foreground/90 flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="mr-3 text-accent" size={24} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <Badge 
                        variant={edu.status === "Pursuing" ? "default" : "secondary"}
                        className={edu.status === "Pursuing" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {edu.duration}
                      </div>
                      <div className="text-primary font-medium">
                        {edu.grade}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;