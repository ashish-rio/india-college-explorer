import React from 'react';
import { College } from '../data/colleges';
import { X, Globe, Calendar, Award, BookOpen, Flame, Briefcase, TrendingUp, Check, Plus, ShieldCheck, Sparkles, Code, Zap, Music, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CollegeDetailsDrawerProps {
  college: College | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleCompare: () => void;
  isComparing: boolean;
  activeEventFilter?: string;
}

export default function CollegeDetailsDrawer({ college, isOpen, onClose, onToggleCompare, isComparing, activeEventFilter }: CollegeDetailsDrawerProps) {
  if (!isOpen || !college) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm p-0 sm:p-4"
      >
        {/* Backdrop Closing click helper */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

        {/* Sliding Panel */}
        <motion.div
          initial={{ x: "40px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "40px", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative z-10 w-full max-w-xl h-full sm:h-[calc(100vh-2rem)] bg-zinc-950 border-l border-zinc-900 rounded-none sm:rounded-2xl flex flex-col justify-between overflow-hidden shadow-2xl"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 bg-zinc-950/40 border-b border-b-zinc-900">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-blue-500/10 border border-blue-900/35 text-blue-400 font-bold uppercase tracking-wider">
                Institution Profile Details
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 px-2.5 rounded-lg bg-black border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-mono text-xs cursor-pointer"
            >
              CLOSE [ESC]
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6 text-left">
            {/* Title & Location details */}
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-medium text-zinc-100 leading-tight">{college.name}</h2>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5 font-light">
                <span>📍 Located in <strong>{college.city}, {college.state}</strong></span>
              </p>
            </div>

            {/* Core Metrics Bento Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/50 p-4 border border-zinc-900 rounded-xl space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-mono block">Institution Type</span>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-semibold text-zinc-100">{college.type} Institute</span>
                </div>
              </div>
              <div className="bg-black/50 p-4 border border-zinc-900 rounded-xl space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-mono block">Founded Year</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-450" />
                  <span className="text-sm font-semibold text-zinc-100">{college.established} ({new Date().getFullYear() - college.established} Years Old)</span>
                </div>
              </div>
            </div>

            {/* Admissions widget */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Admissions & Core Branches</h3>
              <div className="p-4 bg-black/40 border border-zinc-900 rounded-xl space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-zinc-500 block">EXAMS ACCEPTED FOR ADMISSION:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {college.examAccepted.map(ex => (
                      <span key={ex} className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-200">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1 border-t border-zinc-900 pt-2.5">
                   <span className="text-[10px] font-mono text-zinc-500 block">POPULAR ENGINEERING BRANCHES DESIRED:</span>
                  <p className="text-xs text-zinc-300 font-semibold leading-relaxed">
                    Computer Science & Engineering (AI/ML), Electronics & Communications, Electrical & Electronics, Mechanical Engineering, Biotechnology.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom campus culture events and conclaves */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">📅 Live Campus Events & Registration</h3>
              </div>

              <div className="space-y-3">
                {college.events
                  ?.filter(evt => !activeEventFilter || activeEventFilter === 'All' || evt.category === activeEventFilter)
                  .map((evt) => {
                    const cat = evt.category;
                    const catMeta = {
                      Hackathon: { icon: Code, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                      Techfest: { icon: Zap, color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
                      Culture: { icon: Music, color: "text-zinc-300 bg-zinc-850/20 border-zinc-800/35" },
                      Sports: { icon: Trophy, color: "text-zinc-350 bg-zinc-850/20 border-zinc-800/35" }
                    }[cat as 'Hackathon' | 'Techfest' | 'Culture' | 'Sports'];

                    const IconCmp = catMeta.icon;
                    // AI-style custom search query designed to trigger Google AI Overviews instantly
                    const aiSearchQuery = `Show details, registration process, dates, official links, and prize details for ${college.name} (${cat}) event`;
                    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(aiSearchQuery)}`;

                    return (
                      <div key={cat} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-black/50 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors">
                        <div className="flex items-center gap-3 max-w-full sm:max-w-[65%] min-w-0">
                          <span className={`p-2 rounded-xl border flex-shrink-0 ${catMeta.color}`}>
                            <IconCmp className="w-4 h-4" />
                          </span>
                          <div className="min-w-0">
                            <span className="block text-[8px] font-mono font-extrabold uppercase tracking-widest text-zinc-500 leading-none mb-1">{cat} Details</span>
                            <h4 className="text-xs sm:text-sm font-semibold text-zinc-200 truncate" title={evt.name}>
                              {evt.name}
                            </h4>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3.5 flex-shrink-0">
                          <a
                            href={searchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 bg-blue-950/35 hover:bg-blue-900/20 border border-blue-500/30 hover:border-blue-500/70 transition-all duration-300 rounded-xl cursor-pointer shadow-[0_0_12px_rgba(59,130,246,0.12)]"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                            <span>AI Search 🔎</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="p-4 bg-black/40 border border-zinc-900 rounded-xl flex items-start gap-3 mt-3">
                <span className="p-2 bg-blue-500/10 text-blue-405 rounded-lg">
                  <Flame className="w-5 h-5" />
                </span>
                <div className="text-xs text-zinc-400 leading-relaxed text-left">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">POPULAR ANNUAL FESTIVAL:</span>
                  <p className="text-zinc-200 font-semibold text-sm mt-0.5">✨ {college.famousFest}</p>
                  <p className="mt-1 font-light text-zinc-400">One of India's most highly anticipated college festivals attracting participants from 100+ national universities competing for prizes, innovations, and cultural showcases.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 bg-black border-t border-zinc-900 flex items-center justify-between gap-3">
            <button
              onClick={onToggleCompare}
              className={`flex-grow inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${isComparing ? 'bg-blue-500/15 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800'}`}
            >
              {isComparing ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5px]" />
                  <span>Listed in Compare</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Compare</span>
                </>
              )}
            </button>

            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(college.name + " official website portal")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-black font-sans font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Search Official Site 🔎</span>
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
