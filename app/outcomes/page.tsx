"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Data array updated with logos and highlighted JSX values
const firmData = [
  {
    firm: "Jane Street",
    imgSrc: "https://iicpc.com/Jane%20street_logo_horizontal_black_registered.png",
    stats: [
      { label: "Second Year C Program", value: <><span className="text-[#0056D2] font-bold bg-[#0056D2]/10 px-1.5 py-0.5">13 of 25</span> Indian selects were from IICPC</> },
      { label: "Final Interviews", value: <><span className="text-[#0056D2] font-bold bg-[#0056D2]/10 px-1.5 py-0.5">12 Finalists</span> reached the 7th interview round</> },
      { label: "Internships (2025)", value: "Shreyan Ray selected as Intern" }
    ]
  },
  {
    firm: "Hudson River Trading (HRT)",
    imgSrc: "https://iicpc.com/HRT_logo_resized.png",
    stats: [
      { label: "Explore HRT Program", value: <><span className="text-[#0056D2] font-bold bg-[#0056D2]/10 px-1.5 py-0.5">14 of 15</span> invitees were CodeFest'26 Finalists/Regionalists</> },
      { label: "Internships (CodeFest 2025)", value: "Aman Antil (IIT KGP) hired as Intern" }
    ]
  },
  {
    firm: "IMC Trading",
    imgSrc: "https://iicpc.com/imc_logo_single_color.png",
    stats: [
      { label: "IMC Launchpad", value: <><span className="text-[#0056D2] font-bold bg-[#0056D2]/10 px-1.5 py-0.5">35 of 50</span> students selected were from CodeFest'26</> },
      { label: "Full-Time Offers", value: "Aditya Busa hired from QuantFest" }
    ]
  },
  {
    firm: "D. E. Shaw India",
    imgSrc: "https://iicpc.com/de-shaw-logo.png",
    stats: [
      { label: "CodeFest & QuantFest 2025", value: <><span className="text-[#0056D2] font-bold bg-[#0056D2]/10 px-1.5 py-0.5">25+</span> Full-Time and Intern offers extended</> }
    ]
  },
  {
    firm: "Tower Research Capital",
    imgSrc: "https://iicpc.com/Tower_Research_Capital_Logo.png",
    stats: [
      { label: "Internships", value: "Atish Kumar Sahu and others hired as Interns" }
    ]
  },
  {
    firm: "Citadel",
    imgSrc: "https://iicpc.com/Citadel_CSEC_Dual_Logo_Stacked%20(2).png",
    stats: [
      { label: "Internships", value: <>Both Indian intern roles offered were secured by <span className="text-[#0056D2] font-bold bg-[#0056D2]/10 px-1.5 py-0.5">IICPC students</span></> }
    ]
  },
  {
    firm: "Jump Trading",
    imgSrc: "https://iicpc.com/jump-logo-withbg.png",
    stats: [
      { label: "Jump Trading Bootcamp", value: <><span className="text-[#0056D2] font-bold bg-[#0056D2]/10 px-1.5 py-0.5">8 of 10</span> students selected were from CodeFest'26</> }
    ]
  },
  {
    firm: "N K Securities",
    imgSrc: "https://quantfest.iicpc.com/images/NK_Securities_image.png", // No logo provided in SponsorWall
    stats: [
      { label: "QuantFest 2025", value: "Full-Time offer extended" }
    ]
  }
];

export default function OutcomesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="relative w-full bg-white text-slate-900 selection:bg-[#0056D2] selection:text-white min-h-screen flex flex-col">
      <Header />
      
      {/* Content Section */}
      <section className="pt-32 pb-24 bg-white w-full flex-grow">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">
              The Pipeline
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-12">
              Verified Hiring Outcomes.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {firmData.map((firm, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`border border-slate-200 p-6 rounded-none transition-colors duration-200 cursor-pointer ${
                    isExpanded ? 'bg-white border-[#0056D2]' : 'bg-slate-50 hover:bg-white hover:border-slate-300'
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className={`flex justify-between items-center transition-all duration-200 ${
                    isExpanded ? 'grayscale-0' : 'grayscale hover:grayscale-0'
                  }`}>
                    <h3 className={`text-xl font-medium transition-colors duration-200 ${
                      isExpanded ? 'text-[#0056D2]' : 'text-slate-900'
                    }`}>
                      {firm.firm}
                    </h3>
                    <button 
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      className="focus:outline-none"
                    >
                      {isExpanded ? (
                        <Minus className="w-5 h-5 text-[#0056D2]" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                  </div>
                  
                  {/* Expanded Content Area */}
                  <div 
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-8 items-start">
                        
                        {/* Firm Logo - Only visible when expanded */}
                        {firm.imgSrc && (
                          <div className="w-32 h-16 sm:w-48 sm:h-24 flex-shrink-0 flex items-center justify-start">
                            <img 
                              src={firm.imgSrc} 
                              alt={`${firm.firm} logo`} 
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        )}

                        {/* Firm Stats */}
                        <div className="flex-1 flex flex-col w-full">
                          {firm.stats.map((stat, statIdx) => (
                            <div key={statIdx} className="border-l-2 border-[#0056D2] pl-4 mb-4 last:mb-0">
                              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 mb-2">
                                {stat.label}
                              </p>
                              <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                                {stat.value}
                              </p>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
