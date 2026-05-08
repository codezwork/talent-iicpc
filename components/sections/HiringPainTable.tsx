"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Check, X } from "lucide-react";

export default function HiringPainTable() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".pain-row");

    rows.forEach((row) => {
      const trad = row.querySelector(".trad-text");
      const iicpc = row.querySelector(".iicpc-text");
      const icon = row.querySelector(".iicpc-icon");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        }
      });

      // Typewriter effect equivalent for IICPC side, with strikethrough on Trad
      tl.fromTo(iicpc, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 })
        .fromTo(icon, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.3 }, "-=0.3")
        .to(trad, { textDecoration: "line-through", opacity: 0.4, duration: 0.3 }, "-=0.2");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Comparison</p>
        <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight">The Old Way vs. IICPC</h2>
        
        <div className="flex flex-col border-t border-slate-200">
          {/* Header */}
          <div className="grid grid-cols-2 py-6 border-b border-slate-200 uppercase text-xs tracking-widest text-slate-500 font-medium">
            <div>Traditional Hiring</div>
            <div className="text-slate-900 font-bold flex items-center gap-2">IICPC Talent Portal</div>
          </div>

          {/* Rows */}
          <PainRow trad="Resume Spam (1000+ applicants)" iicpc="Pre-vetted Top 5% Only" />
          <PainRow trad="Generic Leetcode Interviews" iicpc="Proven Competitive Performance" />
          <PainRow trad="Low Offer Acceptance Rate" iicpc="High Conversion & Intent" />
          <PainRow trad="6-8 Weeks Time-to-Hire" iicpc="7-14 Days Time-to-Hire" />
        </div>
      </div>
    </section>
  );
}

function PainRow({ trad, iicpc }: { trad: string; iicpc: string }) {
  return (
    <div className="pain-row grid grid-cols-2 py-8 border-b border-slate-200 items-center">
      <div className="trad-text text-base md:text-xl text-slate-500 flex items-start gap-4">
        <X className="shrink-0 mt-1 w-5 h-5" />
        {trad}
      </div>
      <div className="iicpc-text flex items-start gap-4 text-base md:text-xl font-bold text-slate-900">
        <Check className="iicpc-icon text-[#0056D2] shrink-0 mt-1 w-5 h-5" />
        {iicpc}
      </div>
    </div>
  );
}
