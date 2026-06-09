import React from 'react';
import { College } from '../data/colleges';
import { Award, MapPin, Sparkles, Plus, Check, ExternalLink, Calendar, Code, Zap, Music, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

interface CollegeCardProps {
  college: College;
  isComparing: boolean;
  onToggleCompare: () => void;
  onViewDetails: () => void;
  activeEventFilter: string;
  key?: React.Key;
}

export default function CollegeCard({ college, isComparing, onToggleCompare, onViewDetails, activeEventFilter }: CollegeCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6, scale: 1.01, transition: { type: "spring", stiffness: 320, damping: 20 } }}
      className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/40 border transition-all duration-300 ${isComparing ? 'border-blue-500/80 bg-zinc-900/80 shadow-[0_0_25px_rgba(59,130,246,0.1)]' : 'border-zinc-800/80 hover:border-zinc-700/80'} shadow-[0_0_15px_rgba(255,255,255,0.01)] hover:shadow-[0_0_24px_rgba(59,130,246,0.06)]`}
    >
      {/* Absolute Glow Node */}
      <div className="absolute top-0 right-12 w-16 h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-500/0 group-hover:via-blue-400 group-hover:to-blue-500/0 transition-all duration-500" />

      <div className="space-y-4">
        {/* Rankings Header & Toggle Compare */}
        <div className="flex items-center justify-between gap-2 border-b border-zinc-800/60 pb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-blue-400 bg-blue-500/5 px-2.5 py-1 rounded-lg border border-blue-500/10 uppercase tracking-widest font-bold">
            <span>{college.type} Institute</span>
          </span>

          {/* Direct compare checkbox badge */}
          <button
            onClick={(e) => { e.stopPropagation(); onToggleCompare(); }}
            className={`flex items-center justify-center p-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${isComparing ? 'bg-blue-500/20 border-blue-500/60 text-blue-400' : 'bg-black border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'}`}
            title={isComparing ? "Selected for comparison" : "Add to comparison tool"}
          >
            {isComparing ? (
              <Check className="w-3.5 h-3.5 stroke-[3px]" />
            ) : (
              <Plus className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* College Name & Geo Location */}
        <div className="space-y-1 text-left">
          <h3 
            onClick={onViewDetails}
            className="text-base font-display font-medium text-zinc-100 leading-snug group-hover:text-blue-400 transition-colors duration-200 cursor-pointer line-clamp-1"
            title={college.name}
          >
            {college.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-sans font-light">
            <MapPin className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
            <span className="truncate">{college.city}, {college.state}</span>
          </div>
        </div>

        {/* ExamsAccepted Chippings */}
        <div className="space-y-1.5 text-left">
          <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block">Accepted Entrances:</span>
          <div className="flex flex-wrap gap-1">
            {college.examAccepted.map(exam => (
              <span key={exam} className="text-[10px] font-mono bg-black border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded-lg whitespace-nowrap">
                {exam}
              </span>
            ))}
          </div>
        </div>

        {/* Section-wise Campus Event Hub (Hackathon, Sports, Culture, Techfest) */}
        <div className="pt-3.5 border-t border-zinc-800/60 text-left space-y-2.5">
          <span className="text-[9px] uppercase font-mono tracking-widest text-blue-400 font-bold block">🎯 Campus Event Hub</span>
          
          <div className="space-y-2">
            {college.events
              .filter(evt => activeEventFilter === 'All' || evt.category === activeEventFilter)
              .map((evt) => {
                const cat = evt.category;
                const catMeta = {
                  Hackathon: { icon: Code, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                  Techfest: { icon: Zap, color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
                  Culture: { icon: Music, color: "text-zinc-300 bg-zinc-800/20 border-zinc-700/30" },
                  Sports: { icon: Trophy, color: "text-zinc-350 bg-zinc-800/20 border-zinc-700/30" }
                }[cat];

                const IconCmp = catMeta.icon;
                // AI-style custom search query designed to trigger Google AI Overviews instantly
                const aiSearchQuery = `Show details, registration process, dates, official links, and prize details for ${college.name} (${cat}) event`;
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(aiSearchQuery)}`;
                const isFiltered = activeEventFilter === cat;

                return (
                  <div 
                    key={cat} 
                    className={`flex items-center justify-between gap-2 p-2 rounded-xl transition-all ${
                      isFiltered 
                        ? 'bg-zinc-900/75 border border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.12)]' 
                        : 'bg-black/50 border border-zinc-900 hover:border-zinc-850'
                    }`}
                  >
                    <div className="flex items-center gap-2 max-w-[60%] min-w-0">
                      <span className={`p-1.5 rounded-lg border flex-shrink-0 ${catMeta.color}`}>
                        <IconCmp className="w-3.5 h-3.5" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[8px] font-mono font-extrabold uppercase tracking-widest text-zinc-500 leading-none mb-0.5">{cat}</span>
                        <span className="block text-xs font-semibold text-zinc-300 truncate" title={evt.name}>
                          {evt.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 flex-shrink-0">
                      <a
                        href={searchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 bg-blue-950/35 hover:bg-blue-900/20 border border-blue-500/30 hover:border-blue-500/70 rounded-lg cursor-pointer shadow-[0_0_8px_rgba(59,130,246,0.12)] transition-all"
                        title="Search details on Google AI"
                      >
                        <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
                        <span>Search 🔎</span>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Footer trigger website & famous event details */}
      <div className="mt-4 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
        <span className="flex items-center gap-1 text-zinc-650 truncate max-w-[50%]">
          <Calendar className="w-3.5 h-3.5 text-zinc-700" />
          <span>Est. {college.established}</span>
        </span>
        
        <button
          onClick={onViewDetails}
          className="inline-flex items-center gap-1 text-blue-450 hover:text-blue-350 font-semibold cursor-pointer transition-colors"
        >
          <span>More Details</span>
          <ExternalLink className="w-3 h-3 stroke-[2.5px] transition-transform duration-200 group-hover:translate-x-0.5 pointer-events-none" />
        </button>
      </div>
    </motion.div>
  );
}
