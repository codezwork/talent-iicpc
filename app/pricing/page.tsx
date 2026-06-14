"use client";

import React from 'react';
import { Check } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';

const pricingTiers = [
  {
    name: "Gold",
    description: "Ideal for growing companies seeking strong engineering talent.",
    price: "Tier 1",
    features: [
      "Access to Top 5% candidates",
      "Standard candidate profiles",
      "Basic search filters",
      "Email support"
    ],
    highlighted: false,
    cta: "Request Access"
  },
  {
    name: "Diamond",
    description: "Perfect for scaling teams needing exclusive access to elite programmers.",
    price: "Tier 2",
    features: [
      "Access to Top 1% candidates",
      "Full portfolios & competitive histories",
      "Advanced search and matching",
      "Direct interview scheduling",
      "Priority support"
    ],
    highlighted: true,
    cta: "Request Access"
  },
  {
    name: "Platinum",
    description: "Custom solutions for enterprises demanding the absolute best global talent.",
    price: "Tier 3",
    features: [
      "Access to Top 0.1% candidates (Grandmasters)",
      "Dedicated talent acquisition manager",
      "Custom assessment integration",
      "White-glove onboarding",
      "24/7 priority access"
    ],
    highlighted: false,
    cta: "Request Access"
  }
];

export default function PricingPage() {
  return (
    <main className="relative w-full bg-white text-slate-900 selection:bg-[#0056D2] selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-24 bg-white w-full flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-4">
              Pricing Plans
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-6">
              Simple, transparent pricing.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Choose the right plan to accelerate your hiring pipeline with the top 1% of competitive programmers in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col p-8 md:p-10 transition-all duration-300 ${
                  tier.highlighted 
                    ? 'bg-slate-900 text-white shadow-2xl scale-105 border border-slate-800' 
                    : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0056D2] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-xl font-medium mb-2 ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm h-10 ${tier.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className={`text-4xl font-light tracking-tight ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-[#0056D2]' : 'text-[#0056D2]'}`} />
                      <span className={`text-sm leading-relaxed ${tier.highlighted ? 'text-slate-300' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/register"
                  className={`w-full block text-center py-4 text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                    tier.highlighted 
                      ? 'bg-[#0056D2] text-white hover:bg-blue-700' 
                      : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
