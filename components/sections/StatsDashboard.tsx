"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function StatsDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const stats = gsap.utils.toArray<HTMLElement>(".stat-number");

    stats.forEach((stat) => {
      const targetStr = stat.getAttribute("data-target") || "0";
      const isFloat = targetStr.includes(".");
      const target = parseFloat(targetStr);
      const suffix = stat.getAttribute("data-suffix") || "";

      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
          toggleActions: "play reset play reset"
        },
        onUpdate: () => {
          const formatted = isFloat ? obj.val.toFixed(1) : Math.floor(obj.val);
          stat.innerText = `${formatted}${suffix}`;
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard target="180" suffix="+" label="Students in Quant Bootcamps" />
        <StatCard target="94" suffix="%" label="finalists in quant bootcamps" />
        <StatCard target="50" suffix="+" label="Quant Interns" />
      </div>
    </section>
  );
}

function StatCard({ target, suffix, label }: { target: string; suffix: string; label: string }) {
  return (
    <div className="border border-slate-200 p-8 flex flex-col items-start justify-between min-h-[200px] bg-slate-50 hover:bg-slate-100 transition-colors">
      <div className="text-slate-500 text-xs uppercase tracking-widest font-medium">{label}</div>
      <div 
        className="stat-number text-6xl md:text-8xl font-light text-[#0056D2] mt-4" 
        data-target={target} 
        data-suffix={suffix}
      >
        0{suffix}
      </div>
    </div>
  );
}
