"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Clock, Zap } from "lucide-react";

export default function SpeedMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the timeline bars growing
    gsap.fromTo(".timeline-bar", 
      { scaleX: 0, transformOrigin: "left" }, 
      { 
        scaleX: 1, 
        duration: 1.5, 
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play reset play reset"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Velocity</p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">Time to Hire</h2>

        <div className="flex flex-col gap-12">
          {/* Traditional Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-4 text-slate-500">
              <Clock className="w-5 h-5" />
              <span className="uppercase text-xs font-medium tracking-widest">Traditional Hiring (6-8 Weeks)</span>
            </div>
            <div className="w-full bg-white border border-slate-200 h-12 relative flex items-center">
              <div className="timeline-bar h-full bg-slate-300 w-full" />
              <span className="absolute right-4 text-xs text-slate-600 uppercase tracking-widest font-medium">Slow & Lossy</span>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500 uppercase tracking-wider font-medium">
              <span>Sourcing</span>
              <span>Screening</span>
              <span>Interviewing</span>
              <span>Offer</span>
            </div>
          </div>

          {/* IICPC Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#0056D2] font-bold">
              <Zap className="text-[#0056D2] w-5 h-5" />
              <span className="uppercase text-xs font-bold tracking-widest text-[#0056D2]">IICPC Portal (7-14 Days)</span>
            </div>
            <div className="w-full bg-white border border-slate-200 h-12 relative flex items-center">
              <div className="timeline-bar h-full bg-[#0056D2] w-1/4" />
              <span className="absolute left-[26%] text-xs text-slate-900 font-bold uppercase tracking-widest">Done.</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-[#0056D2]/30 p-8 bg-[#0056D2]/5">
          <div className="text-2xl md:text-4xl font-light tracking-tight text-[#0056D2] mb-2">
            90%+ Response Rate
          </div>
          <div className="uppercase tracking-widest text-xs font-medium text-slate-600">
            Within 48 hours of initial outreach. High intent candidates only.
          </div>
        </div>
      </div>
    </section>
  );
}
