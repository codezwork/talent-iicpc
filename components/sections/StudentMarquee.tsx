"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const testimonials = [
  { name: "Naren Sai", rank: "CodeFest'26 Finalist", role: "Intern @ IMC Trading", quote: "Through direct networking and interview opportunities, my competitive programming experience translated into a concrete career opportunity. This is what makes IICPC unique among competitions." },
  { name: "Vijay Balaji", rank: "CodeFest'26 Finalist", role: "Intern @ Jane Street", quote: "The codefest finals helped me in many ways including and not limited to interacting with some of the best minds of India as well interacting with a lot of full timers and had the opportunity to pick their brain to better understand the finance industry to some extent." },
  { name: "Tanish Sunilkumar", rank: "CF'25 Finalist & CF'26 Regionalist", role: "Intern @ Rubriks", quote: "Quite frankly, it is unheard of for someone from my college to get a chance with companies like Rubriks and IMC. I think IICPC is the only org in India which can give this kind of exposure to someone from a non-IIT tier college." },
  { name: "Videep Reddy", rank: "CodeFest'26 Finalist", role: "Intern @ Jane Street", quote: "An excellent opportunity to gain exposure to leading HFT firms. Many of the fellow participants, including myself, are now interning or working at top HFT firms, making the network and connections you build through the program particularly valuable." },
  { name: "Pulkit Gupta", rank: "CodeFest'26 Finalist", role: "Intern @ IMC Trading", quote: "The events of IICPC felt very meritocratic and helped me get more exposure and opportunities to go to bootcamps for different firms which ultimately helped me a lot in my internship journey." },
  { name: "Sushil Raja", rank: "CodeFest'26 2nd Runner Up", role: "Bootcamp @ Jump", quote: "IICPC Served as the bridge between bright students across the country and recruiters from top global firms, creating opportunities that might otherwise never have existed." },
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
