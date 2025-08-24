import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm an aspiring software developer passionate about full-stack web development 
                and problem-solving. With hands-on experience in the MERN stack and a strong 
                foundation in computer science fundamentals, I love creating innovative solutions 
                that make a difference.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                Currently pursuing B.Tech in Information Technology at GVP College of Engineering, 
                I'm constantly expanding my skill set and working on exciting projects that challenge 
                me to grow as a developer.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not coding, you'll find me solving algorithmic challenges on LeetCode, 
                contributing to open-source projects, or exploring the latest trends in AI/ML technologies.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin size={20} className="text-accent" />
              <span className="text-lg">Visakhapatnam, India</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" size="sm" className="hover-lift" asChild>
                <a href="https://github.com/Akhilakhi1327" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="sm" className="hover-lift" asChild>
                <a href="https://linkedin.com/in/akhil-nemalipuri" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="sm" className="hover-lift" asChild>
                <a href="https://leetcode.com/u/Akhil_Nemalipuri" target="_blank" rel="noopener noreferrer">
                  <Code2 className="mr-2 h-4 w-4" />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">LeetCode Problems</div>
                <div className="text-xs text-accent mt-1">Rating: 1742</div>
              </CardContent>
            </Card>

            <Card className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.33</div>
                <div className="text-sm text-muted-foreground">Current SGPA</div>
                <div className="text-xs text-accent mt-1">B.Tech IT</div>
              </CardContent>
            </Card>

            <Card className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2nd</div>
                <div className="text-sm text-muted-foreground">Hackathon Place</div>
                <div className="text-xs text-accent mt-1">50+ Teams</div>
              </CardContent>
            </Card>

            <Card className="hover-lift glow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Months</div>
                <div className="text-xs text-accent mt-1">AI/ML Internship</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;