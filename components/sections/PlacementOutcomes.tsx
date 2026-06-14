"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const data = {
  internship: [
    { firm: "Jane Street", code: 4, quant: 1 },
    { firm: "Tower Research", code: 3, quant: 0 },
    { firm: "HRT", code: 1, quant: 2 },
    { firm: "Citadel", code: 2, quant: 0 },
  ],
  bootcamps: [
    { firm: "Optiver", code: 48, quant: 26 },
    { firm: "IMC Trading", code: 35, quant: 0 },
    { firm: "HRT", code: 14, quant: 0 },
    { firm: "Jane Street", code: 13, quant: 0 },
    { firm: "Jump Trading", code: 8, quant: 0 },
  ],
};

export default function PlacementOutcomes() {
  const [activeTab, setActiveTab] = useState<"internship" | "bootcamps">("bootcamps");
  const currentData = data[activeTab];
  const containerRef = useRef<HTMLElement>(null);
  
  // Find max total to normalize bar widths
  const maxOffers = Math.max(...currentData.map(d => d.code + d.quant));

  useGSAP(() => {
    // Animate all bars from 0% width to their React-defined inline width
    gsap.from(".stat-bar", {
      width: "0%",
      duration: 0.6,
      stagger: 0.1, // Creates the one-by-one cascading effect
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play reset play reset"
      }
    });
  }, { scope: containerRef, dependencies: [activeTab] });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Context & Controls */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">The Proof Is in the Offers</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">Placement Outcomes.</h2>
            <p className="text-slate-600 leading-relaxed">
              Our talent pool consistently secures positions at the world's most competitive quantitative and technology firms.
            </p>
          </div>

          {/* Tab Toggles */}
          <div className="flex bg-slate-200/50 p-1">
            <button 
              onClick={() => setActiveTab("internship")}
              className={cn(
                "flex-1 py-3 text-xs md:text-sm uppercase tracking-wider font-medium transition-colors",
                activeTab === "internship" ? "text-white bg-[#0056D2] shadow-sm" : "text-slate-500 hover:text-slate-900"
              )}
            >
              Internship
            </button>
            <button 
              onClick={() => setActiveTab("bootcamps")}
              className={cn(
                "flex-1 py-3 text-xs md:text-sm uppercase tracking-wider font-medium transition-colors",
                activeTab === "bootcamps" ? "text-white bg-[#0056D2] shadow-sm" : "text-slate-500 hover:text-slate-900"
              )}
            >
              Bootcamps
            </button>
          </div>
        </div>

        {/* Right Column: Chart */}
        <div className="flex-1 flex flex-col gap-8 justify-center">
          {/* Legend */}
          <div className="flex gap-6 text-xs uppercase tracking-wider font-medium text-slate-500">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#0056D2]" /> CodeFest</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-slate-300" /> QuantFest</div>
          </div>

          {/* Bars */}
          <div className="flex flex-col gap-6">
            {currentData.map((row) => {
              const codeWidth = row.code > 0 ? Math.max((row.code / maxOffers) * 100, 5) : 0;
              const quantWidth = row.quant > 0 ? Math.max((row.quant / maxOffers) * 100, 5) : 0;

              return (
                <div key={row.firm} className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] items-center gap-4">
                  <div className="uppercase tracking-wider text-sm md:text-base font-medium text-slate-700 truncate">
                    {row.firm}
                  </div>
                  <div className="h-8 flex w-full">
                    {/* Replaced CSS transitions with GSAP target class and overflow hidden */}
                    <div 
                      className="stat-bar h-full bg-[#0056D2] flex items-center justify-end px-2 text-white font-bold text-xs overflow-hidden whitespace-nowrap"
                      style={{ width: `${codeWidth}%` }}
                    >
                      {row.code > 0 ? row.code : ""}
                    </div>
                    <div 
                      className="stat-bar h-full bg-slate-300 flex items-center justify-end px-2 text-slate-700 font-bold text-xs overflow-hidden whitespace-nowrap"
                      style={{ width: `${quantWidth}%` }}
                    >
                      {row.quant > 0 ? row.quant : ""}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}