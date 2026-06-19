import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GraduationCap, ArrowRight, Server, Map, Shield } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
  totalColleges: number;
  totalStates: number;
}

export default function WelcomeScreen({ onEnter, totalColleges, totalStates }: WelcomeScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // continuous ambient background physics-based float sequence (GSAP animations on mount)
  useEffect(() => {
    // 1. Fluid, continuous floating glow orbs (Light Lavender/Rose accent replace traditional blue)
    if (orb1Ref.current) {
      gsap.to(orb1Ref.current, {
        scale: 1.35,
        opacity: 0.35,
        x: 50,
        y: -35,
        force3D: true,
        duration: 9.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    if (orb2Ref.current) {
      gsap.to(orb2Ref.current, {
        scale: 1.25,
        opacity: 0.4,
        x: -45,
        y: 45,
        force3D: true,
        duration: 8.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.8
      });
    }

    // 2. High-fidelity staggered loader sequence inside pure GSAP Context
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.gsap-item', 
        { opacity: 0, y: 35 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.85, 
          stagger: 0.12, 
          ease: "power3.out",
          delay: 0.15 
        }
      );

      // Micro-breathing loop for the interactive enter CTA button
      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          { 
            scale: 1,
            boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)" 
          },
          { 
            scale: 1.03,
            boxShadow: "0 0 35px rgba(139, 92, 246, 0.6)", 
            force3D: true,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Elite interactive hover kinetics
  const handleButtonMouseEnter = () => {
    if (buttonRef.current) {
      gsap.killTweensOf(buttonRef.current);
      gsap.to(buttonRef.current, {
        scale: 1.05,
        boxShadow: "0 0 45px rgba(139, 92, 246, 0.85)",
        y: -2,
        force3D: true,
        duration: 0.35,
        ease: "power2.out"
      });
    }
  };

  const handleButtonMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.03,
        y: 0,
        boxShadow: "0 0 35px rgba(139, 92, 246, 0.6)",
        force3D: true,
        duration: 0.45,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.fromTo(buttonRef.current,
            { 
              scale: buttonRef.current ? gsap.getProperty(buttonRef.current, "scale") : 1,
              y: 0,
              boxShadow: buttonRef.current ? gsap.getProperty(buttonRef.current, "boxShadow") : "0 0 15px rgba(139, 92, 246, 0.2)"
            },
            { 
              scale: 1.03,
              boxShadow: "0 0 35px rgba(139, 92, 246, 0.6)", 
              force3D: true,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut"
            }
          );
        }
      });
    }
  };

  // Graceful sequence on entering the main active directory dashboard
  const handleEnterClick = () => {
    const tl = gsap.timeline({
      onComplete: onEnter
    });

    tl.to('.gsap-item', {
      opacity: 0,
      y: -25,
      stagger: 0.05,
      duration: 0.45,
      ease: "power3.in"
    });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-zinc-100 flex flex-col justify-between items-center p-6 md:p-12 overflow-y-auto">
      {/* Precision Structural Blueprint Layer */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 45%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 85%)'
        }}
      />

      {/* Modern Soft/Warm glow ambient elements (replacing standard cold blue theme with ultra-attractive violet/gold/pink accents) */}
      <div 
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[380px] h-[380px] rounded-full bg-violet-600/15 blur-[105px] pointer-events-none opacity-30" 
      />
      <div 
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[340px] h-[340px] rounded-full bg-rose-500/15 blur-[95px] pointer-events-none opacity-35" 
      />
      <div 
        className="absolute top-1/3 right-1/3 w-[280px] h-[280px] rounded-full bg-amber-400/10 blur-[85px] pointer-events-none opacity-20" 
      />

      {/* Top spacer to balance alignment */}
      <div className="h-4 w-full md:h-12 flex-shrink-0" />

      {/* Main interactive showcase board */}
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 py-6">
        <div className="max-w-2xl w-full text-center space-y-8 px-4">
          
          {/* Logo Brand Frame */}
          <div className="gsap-item flex justify-center opacity-0">
            <div className="w-20 h-20 p-1 bg-white rounded-2xl shadow-[0_0_35px_rgba(139,92,246,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-105 border border-zinc-200/50 select-none">
              <img src="/favicon.svg" alt="College Explorer Logo" className="w-16 h-16 object-contain" />
            </div>
          </div>

          {/* Premium Status Badge */}
          <div className="gsap-item inline-block opacity-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/95 border border-zinc-800 text-[10px] font-mono text-zinc-300 uppercase tracking-widest leading-none shadow-[0_4px_16px_rgba(0,0,0,0.5)] selection:bg-transparent">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
              </span>
              <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
              <span className="font-bold text-zinc-300">Engineering College Registry</span>
              <span className="text-zinc-500">•</span>
              <span className="text-violet-400 font-extrabold">EVENT HUB v2.1</span>
            </div>
          </div>

          {/* Sleek bold display with dynamic light Sunset Pastel Blend */}
          <div className="space-y-4">
            <h1 className="gsap-item text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white leading-none opacity-0">
              College <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-rose-300 to-amber-200 font-extrabold select-none">
                Explorer & Guide
              </span>
            </h1>

            <p className="gsap-item text-zinc-400 text-xs sm:text-sm leading-relaxed font-light max-w-lg mx-auto opacity-0">
              Your predictive search discovery engine for verified IITs, NITs, IIITs, state, central, and elite private universities. Compare institutions, admission guidelines, and discover dynamic college events.
            </p>
          </div>

          {/* Grid Cards showing Key Metrics (Clean glassmorphic dark container overlays) */}
          <div className="gsap-item grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg mx-auto py-2 opacity-0">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 px-4 py-5 rounded-2xl space-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:border-zinc-700 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight flex items-center justify-center gap-1">
                <span>{totalStates}</span>
                <Map className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
              </div>
              <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block font-bold">States & UTs</span>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 px-4 py-5 rounded-2xl space-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:border-zinc-700 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-mono font-bold text-violet-300 tracking-tight flex items-center justify-center gap-1">
                <span>520+</span>
                <Server className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
              </div>
              <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block font-bold">Mapped Hubs</span>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 px-4 py-5 rounded-2xl space-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:border-zinc-700 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight flex items-center justify-center gap-1">
                <span>100%</span>
                <Shield className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              </div>
              <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 block font-bold">Govt Audited</span>
            </div>
          </div>

          {/* Solid premium light violet glowing button (SaaS High-Contrast Theme) */}
          <div className="gsap-item pt-2 opacity-0">
            <button
              ref={buttonRef}
              onClick={handleEnterClick}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="group relative inline-flex items-center gap-3.5 px-9 py-4 bg-white hover:bg-zinc-100 text-black font-sans font-bold text-xs tracking-widest uppercase rounded-2xl cursor-pointer select-none overflow-hidden transition-colors"
            >
              {/* Sweeping laser light overlay across the dark button */}
              <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <span>Enter Workspace</span>
              <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1 duration-300 ease-out" />
            </button>
          </div>
        </div>
      </div>

      {/* Traditional Human-touch Watermark Footer */}
      <div className="w-full text-center text-[10px] text-zinc-600 font-mono tracking-wider select-none py-4 mt-6 z-10 flex-shrink-0">
        © {new Date().getFullYear()} DIRECTORY REGISTRY • DESIGNED FOR MODERN CAREERS
      </div>
    </div>
  );
}
