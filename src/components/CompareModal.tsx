import React from 'react';
import { College } from '../data/colleges';
import { X, Award, ExternalLink, Calendar, MapPin, Briefcase, Zap, GitCompare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CompareModalProps {
  selectedColleges: College[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
}

export default function CompareModal({ selectedColleges, isOpen, onClose, onRemove }: CompareModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-zinc-950 border border-zinc-900 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl"
        >
          {/* Compare Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-zinc-950/40 border-b border-zinc-900">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <GitCompare className="w-5 h-5" />
              </span>
              <div className="text-left">
                <h2 className="text-lg font-display font-bold text-zinc-100">National College Matrix Comparison</h2>
                <p className="text-xs text-zinc-500 font-light">Analyzing {selectedColleges.length} selected key indicators side-by-side</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-1 px-2.5 rounded-lg bg-black border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-mono text-xs cursor-pointer"
            >
              CLOSE [ESC]
            </button>
          </div>

          <div className="p-6 overflow-x-auto">
            {selectedColleges.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <span className="p-4 rounded-full bg-black border border-zinc-800 inline-block text-zinc-400">
                  <Zap className="w-8 h-8 mx-auto stroke-[1.5px]" />
                </span>
                <p className="text-zinc-400 font-sans text-sm">No colleges selected yet. Please check the compare button (+) on any college card first.</p>
                <button 
                  onClick={onClose}
                  className="px-4 py-2 bg-black hover:bg-zinc-900 border border-zinc-800 text-xs rounded-lg text-blue-400 cursor-pointer"
                >
                  Return to Browser
                </button>
              </div>
            ) : (
              <div className="min-w-[600px]">
                {/* The Comparison Grid Table */}
                <table className="w-full text-zinc-300 font-sans">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="w-1/4 text-left py-4 px-2 text-xs font-mono uppercase tracking-widest text-zinc-500">Metric / Category</th>
                      {selectedColleges.map(col => (
                        <th key={col.id} className="w-1/4 text-left py-4 px-4 align-top">
                          <div className="flex item-start justify-between gap-3 text-left">
                            <div>
                              <h3 className="font-display font-medium text-zinc-100 text-sm mt-1 sm:line-clamp-2" title={col.name}>
                                {col.name}
                              </h3>
                              <p className="text-xs text-zinc-500 font-light mt-0.5">{col.city}, {col.state}</p>
                            </div>
                            
                            <button
                              onClick={() => onRemove(col.id)}
                              className="text-[10px] text-red-400 hover:text-red-300 bg-red-950/20 border border-red-900/30 p-1 px-1.5 rounded cursor-pointer self-start animate-pulse"
                            >
                              Remove
                            </button>
                          </div>
                        </th>
                      ))}
                      {/* Empty column states if less than 3 colleges compared */}
                      {Array.from({ length: Math.max(0, 3 - selectedColleges.length) }).map((_, i) => (
                        <th key={`empty_${i}`} className="w-1/4 text-center py-4 px-4 text-xs text-zinc-700 italic border-l border-zinc-900 font-light">
                          Select another to compare
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 text-xs font-light">
                    {/* Region */}
                    <tr>
                      <td className="py-3 px-2 text-zinc-500 font-mono text-[10px] uppercase">State Location</td>
                      {selectedColleges.map(col => (
                        <td key={col.id} className="py-3 px-4 font-normal text-zinc-200">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                            <span>{col.state}</span>
                          </div>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedColleges.length) }).map((_, i) => <td key={i} />)}
                    </tr>

                    {/* Institution Type */}
                    <tr>
                      <td className="py-3 px-2 text-zinc-500 font-mono text-[10px] uppercase">Institution Type</td>
                      {selectedColleges.map(col => (
                        <td key={col.id} className="py-3 px-4 font-normal text-zinc-200">
                          <div className="flex items-center gap-1.5 text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-900/30 w-fit font-bold uppercase font-mono tracking-wider">
                            {col.type}
                          </div>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedColleges.length) }).map((_, i) => <td key={i} />)}
                    </tr>

                    {/* Exams */}
                    <tr>
                      <td className="py-3 px-2 text-zinc-500 font-mono text-[10px] uppercase">Admission Exam</td>
                      {selectedColleges.map(col => (
                        <td key={col.id} className="py-3 px-4 font-mono">
                          <div className="flex flex-wrap gap-1">
                            {col.examAccepted.map(ex => (
                              <span key={ex} className="px-2 py-0.5 text-[10px] rounded bg-black border border-zinc-800 text-zinc-300">
                                {ex}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedColleges.length) }).map((_, i) => <td key={i} />)}
                    </tr>

                    {/* Year Founded */}
                    <tr>
                      <td className="py-3 px-2 text-zinc-500 font-mono text-[10px] uppercase">Established Year</td>
                      {selectedColleges.map(col => (
                        <td key={col.id} className="py-3 px-4">
                          <div className="flex items-center gap-1.5 text-zinc-300">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                            <span>{col.established} ({new Date().getFullYear() - col.established} Years Old)</span>
                          </div>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedColleges.length) }).map((_, i) => <td key={i} />)}
                    </tr>

                    {/* Famous Fest */}
                    <tr>
                      <td className="py-3 px-2 text-zinc-500 font-mono text-[10px] uppercase">Famous Fest/Conclave</td>
                      {selectedColleges.map(col => (
                        <td key={col.id} className="py-3 px-4 italic text-zinc-100 font-medium">
                          ✨ {col.famousFest}
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedColleges.length) }).map((_, i) => <td key={i} />)}
                    </tr>

                    {/* Official Portal */}
                    <tr>
                      <td className="py-3 px-2 text-zinc-500 font-mono text-[10px] uppercase">Web Portal</td>
                      {selectedColleges.map(col => (
                        <td key={col.id} className="py-4 px-4">
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(col.name + " official website portal")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-blue-450 hover:text-blue-350 text-xs font-semibold cursor-pointer"
                          >
                            <span>Search Site 🔎</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedColleges.length) }).map((_, i) => <td key={i} />)}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
