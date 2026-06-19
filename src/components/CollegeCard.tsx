import React, { useRef, useEffect } from 'react';
import { College } from '../data/colleges';
import { Award, MapPin, Sparkles, Plus, Check, ExternalLink, Calendar, Code, Zap, Music, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';

interface CollegeCardProps {
  college: College;
  isComparing: boolean;
  onToggleCompare: () => void;
  onViewDetails: () => void;
  activeEventFilter: string;
  key?: React.Key;
}

export default function CollegeCard({ college, isComparing, onToggleCompare, onViewDetails, activeEventFilter }: CollegeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Synchronize dynamic model comparison shifts with GSAP
  useEffect(() => {
    if (!cardRef.current) return;
    
    if (isComparing) {
      gsap.to(cardRef.current, {
        borderColor: '#3b82f6', // blue-500
        backgroundColor: 'rgba(24, 24, 27, 0.8)', // bg-zinc-900/80
        boxShadow: '0 0 28px rgba(59, 130, 246, 0.16)',
        duration: 0.45,
        ease: 'power2.out'
      });
    } else {
      gsap.to(cardRef.current, {
        borderColor: 'rgba(39, 39, 42, 0.8)', // border-zinc-800/80
        backgroundColor: 'rgba(24, 24, 27, 0.3)', // bg-zinc-900/3
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.01)',
        duration: 0.45,
        ease: 'power2.out'
      });
    }
  }, [isComparing]);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    gsap.killTweensOf(cardRef.current);
    gsap.to(cardRef.current, {
      y: -6,
      scale: 1.025,
      force3D: true, // GPU acceleration override
      borderColor: isComparing ? '#3b82f6' : 'rgba(59, 130, 246, 0.55)', // Elegant high-contrast border
      backgroundColor: 'rgba(24, 24, 27, 0.65)',
      boxShadow: isComparing 
        ? '0 12px 35px rgba(59, 130, 246, 0.22)' 
        : '0 12px 30px rgba(59, 130, 246, 0.15)', // Highly attractive neon glow container
      duration: 0.35,
      ease: 'power3.out'
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.killTweensOf(cardRef.current);
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1.0,
      force3D: true, // GPU acceleration override
      borderColor: isComparing ? '#3b82f6' : 'rgba(39, 39, 42, 0.8)',
      backgroundColor: isComparing ? 'rgba(24, 24, 27, 0.8)' : 'rgba(24, 24, 27, 0.3)',
      boxShadow: isComparing 
        ? '0 0 28px rgba(59, 130, 246, 0.12)' 
        : '0 0 15px rgba(255, 255, 255, 0.01)',
      duration: 0.35,
      ease: 'power2.out'
    });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 will-change-transform`}
    >
      {/* Absolute Glow Node */}
      <div className="absolute top-0 right-12 w-24 h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-500/0 group-hover:via-blue-400/80 group-hover:to-blue-500/0 transition-all duration-700" />

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
                  <motion.div 
                    key={cat} 
                    whileHover={{ scale: 1.025, x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`flex items-center justify-between gap-2 p-2 rounded-xl transition-all ${
                      isFiltered 
                        ? 'bg-zinc-900/75 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.16)]' 
                        : 'bg-black/55 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/40'
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
                      <motion.a
                        href={searchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 bg-blue-950/35 hover:bg-blue-900/20 border border-blue-500/30 hover:border-blue-500/70 rounded-lg cursor-pointer shadow-[0_0_8px_rgba(59,130,246,0.12)] transition-all"
                        title="Search details on Google AI"
                      >
                        <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
                        <span>Search 🔎</span>
                      </motion.a>
                    </div>
                  </motion.div>
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
