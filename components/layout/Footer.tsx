"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img src="/iicpc.png" alt="IICPC Logo" className="w-16 h-16 object-contain" />
              <div className="flex flex-col">
                <span className="font-light uppercase tracking-tighter text-3xl">
                  IICPC Talent
                </span>
                <span className="font-normal text-[0.6rem] leading-tight text-slate-400 mt-0.5 uppercase tracking-widest max-w-[250px]">
                  INTERCOLLEGIATE INFORMATIC AND COMPETITIVE PROGRAMMING CAMP PRIVATE LIMITED
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              The exclusive platform connecting elite competitive programmers with top-tier tech and HFT firms.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 md:gap-24 text-sm">
            <div className="flex flex-col gap-4">
              <div className="font-bold text-white mb-2">Portal</div>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Talent Login</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Employer Login</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="font-bold text-white mb-2">Legal</div>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-xs text-gray-400 gap-4">
          <div>&copy; {new Date().getFullYear()} IICPC Talents. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Systems Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
