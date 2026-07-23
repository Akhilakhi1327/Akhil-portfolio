import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles, Sun, Moon, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onOpenResume?: () => void;
  theme?: "dark" | "light";
  toggleTheme?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenResume, theme = "dark", toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 glass-nav border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Bot Icon instead of heart/love symbol */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10.5px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-white tracking-wide text-sm flex items-center gap-1">
                Akhil Nemalipuri
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/30 to-[#06B6D4]/30 rounded-full border border-purple-500/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA, Theme Switcher & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Mode Switcher */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
              </button>
            )}

            <Button
              onClick={onOpenResume}
              size="sm"
              className="hidden sm:inline-flex bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:from-purple-600 hover:to-blue-600 text-white font-medium text-xs px-4 py-2 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Resume
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-b border-white/10 px-4 pt-2 pb-6"
          >
            <div className="flex flex-col space-y-2 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Code2 className="w-4 h-4 text-purple-400 opacity-60" />
                </a>
              ))}
              <div className="pt-2 flex items-center gap-2">
                {toggleTheme && (
                  <Button
                    onClick={toggleTheme}
                    variant="outline"
                    className="flex-1 border-white/10 text-slate-300 rounded-xl text-sm py-2.5"
                  >
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </Button>
                )}
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="flex-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white rounded-xl text-sm py-2.5"
                >
                  View Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;