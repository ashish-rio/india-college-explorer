import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, ArrowRight, Sparkles, Server, Map, Shield } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
  totalColleges: number;
  totalStates: number;
}

export default function WelcomeScreen({ onEnter, totalColleges, totalStates }: WelcomeScreenProps) {
  // Stagger animations container helper
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* 
        Engineering blueprints background grid overlay 
        Creates a high-end structural tech look immediately
      */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
        }}
      />

      {/* Floating glowing background orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 40, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[90px] pointer-events-none" 
      />

      {/* Main Interactive Welcome Panel card container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="z-10 max-w-2xl w-full text-center space-y-8 px-4"
      >
        {/* Registry Badge */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/80 text-[10px] font-mono text-zinc-300 uppercase tracking-widest leading-none shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-bold">National Engineering Registry</span>
            <span className="text-zinc-650">•</span>
            <span className="text-blue-450 font-bold">EVENT HUB v2.1</span>
          </div>
        </motion.div>

        {/* Brand Display Typography */}
        <div className="space-y-3.5">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white leading-none"
          >
            National College <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-305 to-indigo-400 font-extrabold select-none">
              Explorer & Guide
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light max-w-lg mx-auto"
          >
            Direct access engine mapping verified IITs, NITs, IIITs, state, central, and top private universities. Explore admissions, dates, prize pools, and live campus event schedules.
          </motion.p>
        </div>

        {/* Elegant Bento Grid Metrics */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-lg mx-auto py-2"
        >
          <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-900 px-3 py-4 rounded-2xl space-y-1 hover:border-zinc-800/60 transition-all">
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight flex items-center justify-center gap-1">
              <span>{totalStates}</span>
              <Map className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block font-semibold">States & UTs</span>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-900 px-3 py-4 rounded-2xl space-y-1 hover:border-zinc-800/60 transition-all">
            <div className="text-xl sm:text-2xl font-mono font-bold text-blue-400 tracking-tight flex items-center justify-center gap-1">
              <span>520+</span>
              <Server className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block font-semibold">Mapped Hubs</span>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-900 px-3 py-4 rounded-2xl space-y-1 hover:border-zinc-800/60 transition-all">
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight flex items-center justify-center gap-1">
              <span>100%</span>
              <Shield className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block font-semibold">Govt Audited</span>
          </div>
        </motion.div>

        {/* Premium Enter button with interactive scaling and glowing scanner */}
        <motion.div variants={itemVariants} className="pt-2">
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center gap-3.5 px-9 py-4 bg-white hover:bg-zinc-100 text-black font-sans font-bold text-xs tracking-widest uppercase rounded-2xl transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.06)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.18)] cursor-pointer select-none overflow-hidden"
          >
            {/* Sweeping laser light overlay */}
            <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            
            <span>Enter Dashboard</span>
            <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1 duration-350 ease-out" />
          </button>
        </motion.div>
      </motion.div>

      {/* Standard bottom watermark */}
      <div className="absolute bottom-6 left-6 right-6 text-center text-[10px] text-zinc-650 font-mono tracking-wider select-none">
        © {new Date().getFullYear()} NATIONAL DIRECTORY REGISTRY • DESIGNED FOR MODERN CAREERS
      </div>
    </div>
  );
}
