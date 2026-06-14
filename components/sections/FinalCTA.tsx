import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 px-6 md:px-12 bg-slate-50 text-slate-900 text-center border-b border-slate-200">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Get Started</p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-none mb-6">
          Where India's Top Problem Solvers Get Hired.
        </h2>
        <p className="text-xl text-slate-600 font-medium tracking-wide mb-16">
          Join the one-stop for exclusive access to our 2026 talent cohort.
        </p>

        <Link 
          href="/register"
          className="mt-4 px-8 py-4 bg-[#0056D2] text-white font-medium tracking-wide text-lg hover:bg-blue-700 transition-colors rounded-none shadow-xl flex items-center justify-center gap-4"
        >
          Register Now <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
