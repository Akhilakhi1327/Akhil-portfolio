import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle2, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Akhil_Nemalipuri_Resume.pdf';
    link.download = 'Akhil_Nemalipuri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-[#0B0F19]/95 border-white/10 backdrop-blur-xl text-white rounded-3xl p-6 md:p-8 max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-white font-heading">
                Akhil Nemalipuri
              </DialogTitle>
              <DialogDescription className="text-slate-400 text-sm">
                Software Developer • CrowdStrike Intern
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="my-4 space-y-4 text-xs sm:text-sm text-slate-300">
          
          {/* Contact Bar */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex flex-wrap justify-between gap-3 text-xs">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Visakhapatnam, India</span>
            <a href="tel:+919390093962" className="flex items-center gap-1.5 hover:text-purple-300"><Phone className="w-3.5 h-3.5 text-purple-400" /> +91 9390093962</a>
            <a href="mailto:akhilnemalipuri493@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-300"><Mail className="w-3.5 h-3.5 text-blue-400" /> akhilnemalipuri493@gmail.com</a>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
            <h4 className="font-semibold text-white flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Summary
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Aspiring Software Developer passionate about full-stack web development and problem-solving. Experienced in building scalable applications using React.js, Node.js, Express.js, and MongoDB. Strong foundation in Data Structures & Algorithms and backend development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5">
              <div className="font-medium text-purple-400 text-xs uppercase tracking-wider mb-1">Experience</div>
              <div className="font-semibold text-white">CrowdStrike</div>
              <div className="text-xs text-slate-400">Frontend Developer Intern (Nov 2025 – Apr 2026)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5">
              <div className="font-medium text-cyan-400 text-xs uppercase tracking-wider mb-1">Education</div>
              <div className="font-semibold text-white">GVP College of Engineering</div>
              <div className="text-xs text-slate-400">B.Tech IT (SGPA: 8.33)</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5">
            <div className="font-medium text-blue-400 text-xs uppercase tracking-wider mb-2">Official Links</div>
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="https://www.linkedin.com/in/akhil-nemalipuri-087750321/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                LinkedIn Profile <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://github.com/Akhilakhi1327/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline flex items-center gap-1">
                GitHub Repository <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://leetcode.com/u/Akhil_Nemalipuri" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-1">
                LeetCode Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto border-white/10 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl"
          >
            Close
          </Button>
          <Button
            onClick={handleDownload}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl shadow-lg shadow-purple-500/25"
          >
            <Download className="w-4 h-4 mr-2" /> Download PDF Resume
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
