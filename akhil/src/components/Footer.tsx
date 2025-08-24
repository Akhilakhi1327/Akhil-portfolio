import { Heart, Github, Linkedin, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Akhil Nemalipuri
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Full-Stack Developer passionate about creating innovative solutions and solving complex problems through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Akhilakhi1327"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/akhil-nemalipuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Akhil_Nemalipuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> using React & Tailwind CSS
            </p>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Akhil Nemalipuri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;