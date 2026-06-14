"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const sponsors = [
  { name: "Optiver", yearsPartnered: 1, imgSrc: "https://iicpc.com/optiver.png" },
  { name: "Jane Street", yearsPartnered: 2, imgSrc: "https://iicpc.com/Jane%20street_logo_horizontal_black_registered.png" },
  { name: "Tower Research", yearsPartnered: 1, imgSrc: "https://iicpc.com/Tower_Research_Capital_Logo.png" },
  { name: "HRT", yearsPartnered: 2, imgSrc: "https://iicpc.com/HRT_logo_resized.png" },
  { name: "IMC Trading", yearsPartnered: 1, imgSrc: "https://iicpc.com/imc_logo_single_color.png" },
  { name: "Citadel | Citadel Securities", yearsPartnered: 2, imgSrc: "https://iicpc.com/Citadel_CSEC_Dual_Logo_Stacked%20(2).png" },
  { name: "Jump Trading", yearsPartnered: 2, imgSrc: "https://iicpc.com/jump-logo-withbg.png" },
  { name: "Millennium", yearsPartnered: 1, imgSrc: "https://iicpc.com/m-Logo.png" },
  { name: "Rubrik", yearsPartnered: 1, imgSrc: "https://iicpc.com/rubrik_horizontal_gradient_logo.png" },
];

export default function SponsorWall() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;
    
    let mm = gsap.matchMedia();

    // Desktop Speed
    mm.add("(min-width: 768px)", () => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 20, 
        repeat: -1,
      });
    });

    // Mobile Speed (Slower)
    mm.add("(max-width: 767px)", () => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 40, // Doubled duration means half the speed
        repeat: -1,
      });
    });

    return () => mm.revert();
  }, { scope: marqueeRef });

  return (
    <section ref={marqueeRef} className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200 overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 px-6">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Partners</p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Elite Firms Trust Us</h2>
        <p className="text-xl font-medium text-[#0056D2] tracking-wide">
          9 out of 10 sponsors from Year 1 returned in Year 2.
        </p>
      </div>

      <div className="w-full relative flex whitespace-nowrap">
        {/* Track duplicated twice for seamless looping */}
        <div className="marquee-track flex gap-8 w-max">
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <div key={idx} className="border border-slate-200 p-8 min-w-[350px] bg-slate-50 flex flex-col justify-between hover:bg-white hover:border-[#0056D2] hover:shadow-md transition-all duration-200 group">
              <div className="mb-8 h-12 flex items-center justify-start">
                <img 
                  src={sponsor.imgSrc} 
                  alt={`${sponsor.name} — Hiring Partner of IICPC Talents`} 
                  loading="lazy"
                  className="max-h-full max-w-[180px] object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                  Partnered for {sponsor.yearsPartnered} {sponsor.yearsPartnered === 1 ? 'year' : 'years'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
