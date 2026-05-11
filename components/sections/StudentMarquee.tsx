"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const testimonials = [
  { name: "Vikram Singh", rank: "Candidate Master", role: "SWE Intern @ Optiver", quote: "The problem sets were perfectly calibrated to what top prop shops ask in their final rounds." },
  { name: "Ananya Rao", rank: "Master", role: "Quant @ Jane Street", quote: "Competing at IICPC gave me the exact mental framework needed to clear my quantitative interviews." },
  { name: "Rohan Desai", rank: "Expert", role: "SWE @ Google", quote: "The environment is intense, but the post-contest discussions are where the real learning happens." },
  { name: "Kriti Sharma", rank: "Grandmaster", role: "Trader @ Citadel", quote: "Unparalleled talent pool. It's the best networking event for competitive programmers in the country." },
  { name: "Arjun Reddy", rank: "Specialist", role: "Intern @ Tower Research", quote: "I was struggling with DP until I attended the upsolving sessions. Totally changed my perspective." },
];

export default function StudentMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;
    
    let mm = gsap.matchMedia();

    // Desktop Speed
    mm.add("(min-width: 768px)", () => {
      // Start at -50% and move to 0% for reverse direction
      gsap.set(".student-marquee-track", { xPercent: -50 });
      gsap.to(".student-marquee-track", {
        xPercent: 0,
        ease: "none",
        duration: 25, 
        repeat: -1,
      });
    });

    // Mobile Speed (Slower)
    mm.add("(max-width: 767px)", () => {
      gsap.set(".student-marquee-track", { xPercent: -50 });
      gsap.to(".student-marquee-track", {
        xPercent: 0,
        ease: "none",
        duration: 45,
        repeat: -1,
      });
    });

    return () => mm.revert();
  }, { scope: marqueeRef });

  return (
    <section ref={marqueeRef} className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden flex flex-col items-center">

      <div className="w-full relative flex whitespace-nowrap">
        {/* Track duplicated twice for seamless looping */}
        <div className="student-marquee-track flex gap-8 w-max">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="border border-slate-200 p-8 min-w-[350px] md:min-w-[400px] max-w-[400px] bg-white flex flex-col justify-between transition-all duration-200 group hover:border-[#0056D2] rounded-none shadow-sm hover:shadow-md">
              <div className="mb-8 whitespace-normal">
                <p className="text-xl italic font-light leading-relaxed text-slate-800">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium text-slate-900">{t.name}</span>
                <span className="text-sm font-medium text-[#0056D2] uppercase tracking-wider mt-1">{t.rank}</span>
                <span className="text-sm text-slate-500 mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
