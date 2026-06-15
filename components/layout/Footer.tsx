"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img src="/iicpc.png" alt="IICPC Talents Portal Logo" loading="lazy" className="w-16 h-16 object-contain" />
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
              <div className="font-bold text-white mb-2">More from IICPC</div>
              <Link href="https://iicpc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">IICPC</Link>
              <Link href="https://codefest.iicpc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">CodeFest</Link>
              <Link href="https://quantfest.iicpc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">QuantFest</Link>
              <Link href="https://delta.iicpc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">DELTA</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="font-bold text-white mb-2">Legal</div>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-xs text-gray-400 gap-4">
          <div>&copy; {new Date().getFullYear()} IICPC Talents. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <MambaMediaEgg />
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- EASTER EGG COMPONENTS ---

const MambaMediaEgg = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mamba = "MAMBA".split("");
  const media = "MEDIA".split("");

  const handleMouseEnter = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <a 
        href="https://www.mambaclub.site/" 
        target="_blank" 
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group flex items-center gap-2 cursor-pointer overflow-hidden h-6"
      >
        {/* Pulsating Dot */}
        <span className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-300 ${isHovered ? 'bg-[#ff0000]' : 'bg-green-400'}`} />
        
        {/* Text Container */}
        <div className="relative h-[1.2em] flex items-center font-medium uppercase tracking-widest min-w-[180px]">
          {/* Default Text */}
          <span 
            className={`absolute left-0 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHovered ? '-translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}`}
          >
            Systems Operational
          </span>

          {/* Rolling Text Container */}
          <div 
            className={`flex whitespace-nowrap font-bold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}`}
          >
            {mamba.map((char, i) => (
              <RollChar key={`m-${i}`} targetChar={char} isHovered={isHovered} delay={i * 60} colorClass="text-white" />
            ))}
            <span className="w-1.5" />
            {media.map((char, i) => (
              <RollChar key={`me-${i}`} targetChar={char} isHovered={isHovered} delay={(mamba.length + i) * 60} colorClass="text-[#ff0000]" />
            ))}
          </div>
        </div>
      </a>

      {/* Pointer-Locked Tooltip */}
      {isHovered && (
        <div 
          className="fixed z-50 pointer-events-none bg-white text-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-xl whitespace-nowrap"
          style={{
            left: mousePos.x + 16, // 16px offset so the cursor doesn't cover the box
            top: mousePos.y + 16,
          }}
        >
          Contact Developer
        </div>
      )}
    </>
  );
};

const RollChar = ({ targetChar, isHovered, delay, colorClass }: { targetChar: string, isHovered: boolean, delay: number, colorClass: string }) => {
  // Mechanical strip of characters to roll through before stopping on the target
  const strip = ["0", "1", "X", "%", "$", "#", targetChar];

  return (
    <span className={`inline-flex flex-col h-[1em] overflow-hidden ${colorClass}`}>
      <span 
        className="flex flex-col transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ 
          // Replaced percentages with 'em' units for accurate character alignment
          transform: isHovered ? `translateY(-${strip.length - 1}em)` : 'translateY(0em)', 
          transitionDelay: `${isHovered ? delay : 0}ms` 
        }}
      >
        {strip.map((c, i) => (
          <span key={i} className="h-[1em] flex items-center justify-center leading-none">{c}</span>
        ))}
      </span>
    </span>
  );
};
