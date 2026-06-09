import React, { useState } from 'react';
import { BookOpen, Calendar, HelpCircle, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ExamInfo {
  name: string;
  fullName: string;
  timeline: string;
  eligibility: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Extreme';
  scope: string;
  strategy: string[];
}

const CONST_EXAMS: ExamInfo[] = [
  {
    name: "JEE Advanced",
    fullName: "Joint Entrance Examination - Advanced",
    timeline: "Usually conducted in late May annually",
    eligibility: "Top 2.5 Lakh rank holders in JEE Main",
    difficulty: "Extreme",
    scope: "Gate to 23 premier IITs (Indian Institutes of Technology)",
    strategy: [
      "Target high-level conceptual physics, multiple correct answers & matrix-match columns",
      "Focus intensely on advanced organic mechanisms & logical mathematics questions",
      "Solve past 15 years' IIT JEE subjective & objective papers thoroughly"
    ]
  },
  {
    name: "JEE Main",
    fullName: "Joint Entrance Examination - Main",
    timeline: "Conducted in two sessions (Session 1: Jan, Session 2: Apr)",
    eligibility: "Class 12 pass with Physics, Chemistry & Math",
    difficulty: "Hard",
    scope: "Gate to all NITs, IIITs, GFTIs and key Central Universities",
    strategy: [
      "Thoroughly master NCERT textbooks for Chemistry (especially Inorganic)",
      "Practice high-speed calculation & mathematical formulas regularly",
      "Give at least 20 computer-based mock papers of exactly 3 hours length"
    ]
  },
  {
    name: "BITSAT",
    fullName: "Birla Institute of Technology and Science Admission Test",
    timeline: "Conducted in late May & June (multiple sessions options)",
    eligibility: "Class 12 pass with 75% aggregate in PCM and minimum 60% individually",
    difficulty: "Hard",
    scope: "Admission to BITS Pilani, BITS Goa and BITS Hyderabad campuses",
    strategy: [
      "Master speed and accuracy - there are 130 questions in 3 hours with bonus items",
      "Incorporate regular practice for English Proficiency & Logical Reasoning sections",
      "Solve specific online mock patterns designed with tight negative markings"
    ]
  },
  {
    name: "State CETs (MHT-CET, WBJEE, COMEDK, etc.)",
    fullName: "State Common Entrance Tests",
    timeline: "Conducted between April and June depending on state boards",
    eligibility: "Domicile requirements vary; overall open category quotas allocated",
    difficulty: "Medium",
    scope: "Entry to top State Government & State Private engineering institutions",
    strategy: [
      "Target specific local board books and textbooks closely",
      "Solve COMEDK, WBJEE past papers - speed is the differentiating parameter",
      "Understand counseling reservation indices & cutoff graphs for each state"
    ]
  }
];

export default function ExamsCatalog() {
  const [selectedExam, setSelectedExam] = useState<ExamInfo>(CONST_EXAMS[0]);

  return (
    <div className="bg-zinc-900/60 border border-zinc-805 rounded-2xl p-6 text-left space-y-6">
      <div className="flex items-center gap-3">
        <span className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
          <BookOpen className="w-5 h-5" />
        </span>
        <div>
          <h2 className="text-xl font-display font-bold text-zinc-100">National Testing Roadmaps</h2>
          <p className="text-xs text-zinc-500 font-light">Navigating complex admission entries to premier technologic nodes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left selector menu */}
        <div className="flex flex-col gap-2.5">
          {CONST_EXAMS.map(ex => (
            <button
              key={ex.name}
              onClick={() => setSelectedExam(ex)}
              className={`p-3.5 text-left rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-center ${selectedExam.name === ex.name ? 'bg-zinc-900 border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.06)]' : 'bg-black border-zinc-905 hover:bg-zinc-900/80 hover:border-zinc-800 text-zinc-400'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-200">{ex.name}</span>
                <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-bold ${ex.difficulty === 'Extreme' ? 'bg-red-950/20 text-red-400 border border-red-900/30' : ex.difficulty === 'Hard' ? 'bg-amber-950/20 text-amber-500 border border-amber-900/30' : 'bg-blue-950/20 text-blue-400 border border-blue-900/30'}`}>
                  {ex.difficulty}
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 mt-1 line-clamp-1">{ex.fullName}</span>
            </button>
          ))}
        </div>

        {/* Right facts card */}
        <div className="md:col-span-2 bg-black/40 border border-zinc-900 p-5 rounded-xl space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-display font-bold text-zinc-100">{selectedExam.fullName}</h3>
              <p className="text-[11px] text-blue-400 font-mono mt-0.5">📌 {selectedExam.scope}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-black p-3 rounded-lg border border-zinc-905">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Normal Timeline</span>
                <span className="text-zinc-300 font-medium">{selectedExam.timeline}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Entry Criteria</span>
                <span className="text-zinc-300 font-medium">{selectedExam.eligibility}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Preparation Strategy & Drills:</span>
              <div className="space-y-2">
                {selectedExam.strategy.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-light text-zinc-350">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p>{st}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800/60 pt-3 flex items-center justify-between text-[11px] text-zinc-550 font-mono">
            <span>Difficulty rating: <strong className="text-zinc-300 uppercase">{selectedExam.difficulty}</strong></span>
            <span className="inline-flex items-center gap-1 text-zinc-400">
              Target early preparation <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
