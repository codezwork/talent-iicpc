"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Data array updated with logos and highlighted JSX values
const firmData = [
  {
    firm: "Optiver",
    imgSrc: "https://iicpc.com/optiver.png",
    excerpts: [
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">Multiple</span> Full-Time and Intern offers extended</>
    ],
    overview: [
      "Across CodeFest & QuantFest 2025, more than 25 Full-Time and Intern offers were extended to participants."
    ]
  },
  {
    firm: "Jane Street",
    imgSrc: "https://iicpc.com/Jane%20street_logo_horizontal_black_registered.png",
    excerpts: [
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">25 of 30</span> Indian selects were from IICPC</>,
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">12 Finalists</span> reached the 7th interview round</>,
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">100%</span> of the internship offers in India went to IICPC Students</>
    ],
    overview: [
      "In the Second Year SEE Program, 13 out of 25 Indian selects were from IICPC.",
      "12 Finalists successfully reached the 7th interview round.",
      "Of the 5 internship offers Jane Street made in India this year, 3 went to CodeFest finalists and 2 to regionalists with IICPC establisshin 100% dominance ."
    ]
  },
  {
    firm: "Hudson River Trading (HRT)",
    imgSrc: "https://iicpc.com/HRT_logo_resized.png",
    excerpts: [
      <>In the final round of Internship process <span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">all 5</span> students were IICPC participants (2026)</>,
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">14 of 15</span> bootcamp invitees were CodeFest'26 Finalists</>,
      "CodeFest Finalist hired as an Intern (2025)"
    ],
    overview: [
      "For the Explore HRT Program, 14 out of 15 invitees were CodeFest'26 Finalists/Regionalists.",
      "Aman Antil from IIT KGP was hired as an Intern from CodeFest 2025."
    ]
  },
  {
    firm: "IMC Trading",
    imgSrc: "https://iicpc.com/imc_logo_single_color.png",
    excerpts: [
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">35 of 50</span> students selected for IMC Launchpad were from CodeFest'26</>,
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">5 of IICPC students</span> got into IMC with <span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">full time offers</span></>
    ],
    overview: [
      "In the IMC Launchpad program, 35 out of 50 students selected were from CodeFest'26.",
      "Aditya Busa received a full-time offer after participating in QuantFest."
    ]
  },
  {
    firm: "Tower Research Capital",
    imgSrc: "https://iicpc.com/Tower_Research_Capital_Logo.png",
    excerpts: [
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">3+</span> internship roles were offered in CodeFest</>,
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">3</span>students frim QuantFest secured internship</>
    ],
    overview: [
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">3+</span> internship roles were offered in CodeFest</>,
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">3</span> students frim QuantFest secured internship</>
    ]
  },
  {
    firm: "Citadel",
    imgSrc: "https://iicpc.com/Citadel_CSEC_Dual_Logo_Stacked%20(2).png",
    excerpts: [
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">2</span> internship offers extended to the IICPC students from the <span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">Regionals pool</span></>,
      <>Both Indian intern roles offered in 2025 were secured by <span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">IICPC students</span></>
    ],
    overview: [
      "Citadel offered two Indian intern roles, and both were exclusively secured by IICPC students."
    ]
  },
  {
    firm: "Jump Trading",
    imgSrc: "https://iicpc.com/jump-logo-withbg.png",
    excerpts: [
      <><span className="text-[#0056D2] font-medium bg-[#0056D2]/10 px-1.5 py-0.5">8 of 10</span> students selected were from CodeFest'26</>
    ],
    overview: [
      "For the Jump Trading Bootcamp, 8 out of 10 selected students were from CodeFest'26."
    ]
  },
  {
    firm: "N K Securities",
    imgSrc: "https://quantfest.iicpc.com/images/NK_Securities_image.png",
    excerpts: [
      "Full-Time offer extended at QuantFest 2025"
    ],
    overview: [
      "A Full-Time offer was extended to an outstanding participant during QuantFest 2025."
    ]
  }
];

export default function OutcomesPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <main className="relative w-full bg-white text-slate-900 selection:bg-[#0056D2] selection:text-white min-h-screen flex flex-col">
      <Header />
      
      {/* Content Section */}
      <section className="pt-32 pb-24 bg-white w-full flex-grow">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">
              The Pipeline
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-12">
              Verified Hiring Outcomes.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {firmData.map((firm, index) => {
              const isFlipped = flippedIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="relative w-full h-[360px] [perspective:1000px] cursor-pointer group"
                  onClick={() => toggleFlip(index)}
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    {/* Front Face */}
                    <div className="absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-slate-50 border border-slate-200 group-hover:bg-white group-hover:border-slate-300 transition-colors p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-medium text-slate-900">
                            {firm.firm}
                          </h3>
                          <button 
                            aria-label="Flip card"
                            className="focus:outline-none flex-shrink-0 ml-4 mt-1"
                          >
                            <Plus className="w-5 h-5 text-slate-400" />
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          {firm.excerpts.map((excerpt, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0056D2] mt-2 flex-shrink-0 opacity-80" />
                              <p className="text-sm md:text-base text-slate-700 leading-relaxed">{excerpt}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border border-[#0056D2] p-6 md:p-8 flex flex-col justify-between shadow-sm overflow-hidden">
                      <div className="overflow-y-auto pr-2 custom-scrollbar">
                        <div className="flex justify-between items-start mb-4">
                           <h4 className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-mono">
                             Outcomes Overview
                           </h4>
                           <button className="focus:outline-none flex-shrink-0 ml-4 -mt-1">
                             <Minus className="w-5 h-5 text-[#0056D2]" />
                           </button>
                        </div>
                        <ul className="space-y-4">
                          {firm.overview.map((item, idx) => (
                            <li key={idx} className="text-sm md:text-base text-slate-800 leading-relaxed relative pl-4">
                              <span className="absolute left-0 top-2 w-1.5 h-1.5 border border-[#0056D2] rounded-full"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {firm.imgSrc && (
                        <div className="mt-4 w-28 h-10 flex items-center justify-start opacity-60 flex-shrink-0">
                          <img 
                            src={firm.imgSrc} 
                            alt={`${firm.firm} logo`} 
                            loading="lazy"
                            className="max-h-full max-w-full object-contain grayscale"
                          />
                        </div>
                      )}
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
