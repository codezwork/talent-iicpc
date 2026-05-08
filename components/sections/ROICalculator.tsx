"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [costOfBadHire, setCostOfBadHire] = useState(50000);
  const [hoursScreening, setHoursScreening] = useState(40);
  const [openRoles, setOpenRoles] = useState(5);

  // Constants
  const hourlyRateOfEngineer = 100; // Estimated cost of senior engineering time
  const iicpcTimeReduction = 0.8; // 80% reduction in screening time
  const iicpcBadHireReduction = 0.5; // 50% fewer bad hires

  // Computations
  const totalScreeningCost = hoursScreening * hourlyRateOfEngineer * openRoles;
  const newScreeningCost = totalScreeningCost * (1 - iicpcTimeReduction);
  const moneySavedScreening = totalScreeningCost - newScreeningCost;
  
  const estimatedBadHires = Math.max(1, openRoles * 0.2); // Assume 20% bad hire rate without IICPC
  const moneySavedBadHires = (estimatedBadHires * costOfBadHire) * iicpcBadHireReduction;
  
  const totalMoneySaved = moneySavedScreening + moneySavedBadHires;
  const totalHoursSaved = (hoursScreening * openRoles) * iicpcTimeReduction;

  return (
    <section className="bg-white border-b border-border py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Efficiency</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900">ROI Calculator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Inputs */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.15em] text-slate-600 font-medium mb-2">
                Avg. Cost of a Bad Hire ($)
              </label>
              <input 
                type="number" 
                value={costOfBadHire}
                onChange={(e) => setCostOfBadHire(Number(e.target.value))}
                className="h-12 bg-white border border-slate-200 px-4 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.15em] text-slate-600 font-medium mb-2">
                Hours spent screening per role
              </label>
              <input 
                type="number" 
                value={hoursScreening}
                onChange={(e) => setHoursScreening(Number(e.target.value))}
                className="h-12 bg-white border border-slate-200 px-4 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.15em] text-slate-600 font-medium mb-2">
                Open roles per year
              </label>
              <input 
                type="number" 
                value={openRoles}
                onChange={(e) => setOpenRoles(Number(e.target.value))}
                className="h-12 bg-white border border-slate-200 px-4 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] transition-colors"
              />
            </div>
          </div>

          <div className="bg-[#0056D2] text-white p-8 sm:p-12 shadow-glow flex flex-col justify-center">
            <h3 className="text-xs uppercase tracking-[0.15em] text-white/80 font-medium mb-8">Estimated Annual Savings</h3>
            
            <div className="mb-10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-2">
                ${Math.round(totalMoneySaved).toLocaleString()}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/70">Total Capital Saved</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
                {Math.round(totalHoursSaved)} hrs
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/70">Engineering Time Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
