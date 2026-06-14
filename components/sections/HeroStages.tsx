"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";

export default function HeroStages() {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useGSAP(() => {
    const groups = gsap.utils.toArray<HTMLElement>(".reveal-group");

    groups.forEach((group) => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".reveal-wrapper", group);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
          toggleActions: "play reset play reset"
        }
      });

      wrappers.forEach((wrapper, index) => {
        const block = wrapper.querySelector(".reveal-block");
        const text = wrapper.querySelector(".reveal-text");
        const delay = index * 0.15; 

        tl.fromTo(block, 
          { scaleX: 0, transformOrigin: "left" }, 
          { scaleX: 1, duration: 0.4, ease: "power2.inOut" },
          delay
        )
        .set(text, { opacity: 1 }, delay + 0.4)
        .to(block, { 
          scaleX: 0, 
          transformOrigin: "right", 
          duration: 0.4, 
          ease: "power2.inOut" 
        }, delay + 0.4);
      });
    });
  }, { scope: containerRef });


  return (
    <>
      <div ref={containerRef} className="w-full relative text-slate-900">
        
        {/* Stage 1 */}
        <section className="h-screen w-full flex items-center justify-end px-10 md:px-24">
          <div className="max-w-xl text-right flex flex-col items-end gap-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-bold bg-white px-3 py-1 shadow-sm">
              The Problem
            </p>
            <div className="reveal-group flex flex-col items-end gap-2">
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <div className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                Finding top
                </div>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <div className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                engineering talent
              </div>
            </div>
            <div className="reveal-wrapper relative inline-block overflow-hidden">
              <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <div className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                is harder than it
              </div>
            </div>
            <div className="reveal-wrapper relative inline-block overflow-hidden">
              <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <div className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                should be.
                </div>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden mt-2">
                <div className="reveal-block absolute inset-0 z-10 bg-slate-900" style={{ transform: "scaleX(0)" }}></div>
              <p className="reveal-text opacity-0 text-sm text-white md:text-xl font-medium tracking-wide bg-slate-900/95 px-4 py-2">
                  High signal-to-noise ratio required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 2 */}
        <section className="h-screen w-full flex items-center justify-start px-10 md:px-24">
          <div className="max-w-xl flex flex-col items-start gap-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-bold bg-white px-3 py-1 shadow-sm">
              The Solution
            </p>
          
          {/* Group 2: Staggered Lines */}
            <div className="reveal-group flex flex-col items-start gap-2">
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-white" style={{ transform: "scaleX(0)" }}></div>
              <div className="reveal-text opacity-0 bg-[#0056D2]/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-white">
                  We've already done
                </div>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-white" style={{ transform: "scaleX(0)" }}></div>
              <div className="reveal-text opacity-0 bg-[#0056D2]/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-white">
                  the filtering.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-2 bg-white/95 p-6 border-l-4 border-[#0056D2] shadow-xl">
              <div>
              <div className="text-1xl font-bold text-slate-900">15,000+</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Total Participants on Average</div>
              </div>
              <div>
              <div className="text-1xl font-bold text-slate-900">3</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Stages of offline filtering</div>
              </div>
              <div>
              <div className="text-1xl font-bold text-[#0056D2]">0.5%</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Reach Finals</div>
              </div>
            <div>
              <div className="text-1xl font-bold text-slate-900">300+</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Global Participation</div>
            </div>
            <div>
              <div className="text-1xl font-bold text-slate-900">54+</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Countries Represented</div>
            </div>
            </div>
          </div>
        </section>

        {/* Stage 3 */}
        <section className="h-screen w-full flex items-center justify-center px-10 md:px-24 text-center">
          <div className="max-w-2xl flex flex-col items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-bold bg-white px-3 py-1 shadow-sm">
              Get Started
            </p>
          
          {/* Group 3: Staggered Lines */}
            <div className="reveal-group flex flex-col items-center gap-2">
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
                <div className="reveal-text opacity-0 bg-white/95 px-6 py-2 text-[2.25rem] md:text-7xl font-light tracking-tight leading-none text-slate-900">
                  Stop searching.
                </div>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
                <div className="reveal-text opacity-0 bg-white/95 px-6 py-2 text-[2.25rem] md:text-7xl font-light tracking-tight leading-none text-slate-900">
                  Start hiring.
                </div>
              </div>
            </div>

            <Link 
              href="/register"
              className="mt-6 px-8 py-4 bg-[#0056D2] text-white font-medium tracking-wide text-lg hover:bg-blue-700 transition-colors rounded-none shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] focus-visible:ring-offset-2 inline-block"
            >
              Get Access
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
