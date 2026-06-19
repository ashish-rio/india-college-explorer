import React from 'react';

export default function CollegeSkeleton() {
  return (
    <div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.01)] min-h-[380px]">
      <div className="space-y-4">
        {/* Header (Type & Checkbox) */}
        <div className="flex items-center justify-between gap-2 border-b border-zinc-800/60 pb-3">
          <div className="w-28 h-5 bg-zinc-800/70 rounded-lg" />
          <div className="w-7 h-7 bg-zinc-800/50 rounded-lg" />
        </div>

        {/* Name and Location */}
        <div className="space-y-2 text-left">
          <div className="h-5 bg-zinc-800/85 rounded-md w-3/4" />
          <div className="flex items-center gap-1.5 pt-1">
            <div className="w-3.5 h-3.5 bg-zinc-800/40 rounded-full flex-shrink-0" />
            <div className="h-3 bg-zinc-800/50 rounded-md w-1/3" />
          </div>
        </div>

        {/* Exams Accepted */}
        <div className="space-y-2 text-left pt-1">
          <div className="w-24 h-2 bg-zinc-800/40 rounded" />
          <div className="flex flex-wrap gap-1">
            <div className="w-12 h-5 bg-zinc-800/60 rounded-lg" />
            <div className="w-16 h-5 bg-zinc-800/60 rounded-lg" />
            <div className="w-10 h-5 bg-zinc-800/60 rounded-lg" />
          </div>
        </div>

        {/* Event Hub */}
        <div className="pt-3.5 border-t border-zinc-800/60 text-left space-y-3">
          <div className="h-2.5 bg-zinc-800/60 rounded w-1/3" />
          
          <div className="space-y-2">
            {[1, 2].map((idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between gap-2 p-2 rounded-xl bg-black/30 border border-zinc-900/60"
              >
                <div className="flex items-center gap-2 max-w-[60%] min-w-0 flex-1">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800/70 flex-shrink-0" />
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="w-8 h-1.5 bg-zinc-800/40 rounded" />
                    <div className="w-24 h-3 bg-zinc-800/65 rounded" />
                  </div>
                </div>

                <div className="w-16 h-6 bg-blue-900/10 border border-blue-900/20 rounded-lg flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-zinc-800/40 flex items-center justify-between">
        <div className="w-20 h-3 bg-zinc-800/40 rounded" />
        <div className="w-16 h-3 bg-zinc-800/60 rounded" />
      </div>
    </div>
  );
}
