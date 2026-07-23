import React from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0B0F19]/90 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Logo & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
            <div className="w-full h-full bg-[#0B0F19] rounded-[10.5px] flex items-center justify-center font-bold text-white font-heading text-sm">
              AK
            </div>
          </div>
          <div>
            <div className="font-bold text-white text-sm font-heading flex items-center gap-1.5">
              Akhil Nemalipuri
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">
              © {new Date().getFullYear()} • Crafted with React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to Top Button */}
        <Button
          onClick={scrollToTop}
          size="sm"
          variant="outline"
          className="border-white/10 bg-slate-900/80 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 rounded-xl px-4 py-2 text-xs backdrop-blur-md transition-all duration-300 hover:scale-105"
        >
          <ArrowUp className="w-4 h-4 mr-1.5 text-cyan-400" /> Back to Top
        </Button>

      </div>
    </footer>
  );
};

export default Footer;