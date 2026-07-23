import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Instagram, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ToastContainer";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message Sent! 🎉", "Akhil will get back to you shortly. Thanks for reaching out!");
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Akhilakhi1327/",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akhil-nemalipuri-087750321/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10"
    },
    {
      name: "Email",
      url: "mailto:akhilnemalipuri493@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/akhil_nemalipuri",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Get In <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a project idea, job opportunity, or tech discussion? Drop a message below or connect with me via social channels.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 space-y-6 border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white font-heading">Contact Details</h3>

              <div className="space-y-4">
                <a
                  href="mailto:akhilnemalipuri493@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email</div>
                    <div className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">
                      akhilnemalipuri493@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919390093962"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Phone & Location</div>
                    <div className="font-semibold text-white text-sm">
                      +91 9390093962 • Visakhapatnam, India
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Social Profiles</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-2xl bg-slate-900/80 border border-white/10 text-slate-300 font-medium text-xs flex items-center gap-3 transition-all duration-300 hover:scale-105 ${social.color}`}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 border-white/10 rounded-3xl relative overflow-hidden">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300 font-mono">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300 font-mono">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300 font-mono">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Role"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300 font-mono">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] hover:opacity-95 text-white font-semibold text-sm rounded-2xl py-6 shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;