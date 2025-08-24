import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Code, Database, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute inset-0 code-particles"></div>
      
      {/* Floating tech icons */}
      <div className="absolute top-20 left-10 text-primary/20 animate-bounce delay-1000">
        <Code size={24} />
      </div>
      <div className="absolute top-40 right-20 text-accent/20 animate-bounce delay-2000">
        <Database size={20} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary-glow/20 animate-bounce delay-500">
        <Globe size={22} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="profile-ring hover-lift hover-glow">
            <img
              src={profilePhoto}
              alt="Akhil Nemalipuri"
              className="w-40 h-40 object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
              Akhil Nemalipuri
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in delay-200">
              Full-Stack Developer | AI/ML Enthusiast | Problem Solver
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
            Passionate about creating innovative web solutions and solving complex problems. 
            Currently mastering the MERN stack and diving deep into AI/ML technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in delay-600">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="https://github.com/Akhilakhi1327" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://linkedin.com/in/akhil-nemalipuri" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Location */}
          <p className="text-muted-foreground animate-fade-in delay-800">
            📍 Visakhapatnam, India
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;