"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';
import { default as gsapCore } from 'gsap';

gsapCore.registerPlugin(useGSAP);

interface CandidateSlideOutProps {
  candidate: any | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CandidateSlideOut({ candidate, isOpen, onClose }: CandidateSlideOutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      // Slide in
      gsapCore.to(containerRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsapCore.fromTo(panelRef.current, 
        { x: '100%' },
        { x: '0%', duration: 0.5, ease: 'expo.out' }
      );
    } else {
      // Slide out
      gsapCore.to(panelRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'expo.in'
      });
      gsapCore.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        ease: 'power2.in',
        delay: 0.1
      });
    }
  }, [isOpen]);

  if (!candidate && !isOpen) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 invisible flex justify-end"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        ref={panelRef}
        className="relative w-full md:w-1/2 lg:w-[600px] h-full bg-black border-l border-slate-800 flex flex-col shadow-2xl translate-x-full"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="font-mono uppercase tracking-widest text-slate-400 text-xs">
            Dossier / {candidate?.id || 'Unknown'}
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-10 custom-scrollbar">
          
          {/* Header Identity */}
          <div>
            <h2 className="text-4xl font-bold font-mono uppercase tracking-tight text-white mb-2">
              {candidate?.firstName} {candidate?.lastName}
            </h2>
            <div className="text-slate-400 font-mono text-sm uppercase">
              {candidate?.preferredRole || 'Candidate'} — {candidate?.university}
            </div>
          </div>

          {/* The Signal (Key Metrics) */}
          <div className="border border-slate-800 p-6 bg-slate-950/50">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#0056D2] mb-6 border-b border-slate-800 pb-2">The Signal</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">CF Rank</div>
                <div className="text-xl font-mono text-white">{candidate?.codeforcesRank || 'N/A'}</div>
                <div className="text-slate-500 font-mono text-xs mt-1">({candidate?.codeforcesRating || 'N/A'})</div>
              </div>
              <div>
                <div className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">LeetCode</div>
                <div className="text-xl font-mono text-white">{candidate?.leetcodeRating || 'N/A'}</div>
              </div>
              <div>
                <div className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">ICPC Reg.</div>
                <div className="text-sm font-mono text-white">{candidate?.icpcRegionals || 'N/A'}</div>
              </div>
              <div>
                <div className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">IOI Medal</div>
                <div className="text-sm font-mono text-white">{candidate?.ioIMedalist || 'N/A'}</div>
              </div>
            </div>
          </div>

          {/* R2 Video Placeholder */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Technical Screen</h3>
            <div className="aspect-video bg-slate-900 border border-slate-800 flex items-center justify-center group cursor-pointer hover:border-slate-600 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 bg-black border border-slate-700 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">Play R2 Recording</div>
              </div>
            </div>
          </div>

          {/* Raw Data Dump (Show all available fields) */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Full Payload</h3>
            <div className="grid grid-cols-1 gap-y-3">
              {candidate && Object.entries(candidate).map(([key, value]) => {
                // Skip what we already showed prominently
                if (['id', 'firstName', 'lastName', 'codeforcesRank', 'codeforcesRating', 'leetcodeRating'].includes(key)) return null;
                return (
                  <div key={key} className="flex flex-col md:flex-row md:items-baseline py-1 border-b border-slate-800/50">
                    <span className="w-48 text-[11px] font-mono text-slate-500 uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-sm font-mono text-slate-200">{Array.isArray(value) ? value.join(', ') : String(value)}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Action Bar */}
        <div className="p-6 border-t border-slate-800 bg-black flex gap-4">
          <button className="flex-1 bg-[#0056D2] hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-widest py-4 transition-colors">
            Shortlist
          </button>
          <button className="flex-1 border border-slate-700 hover:border-slate-500 bg-transparent text-white font-mono text-xs uppercase tracking-widest py-4 transition-colors">
            Request Interview
          </button>
        </div>
      </div>
    </div>
  );
}
