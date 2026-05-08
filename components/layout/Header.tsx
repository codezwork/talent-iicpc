"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Define navigation routes
  const navLinks = [
    { name: "Talent", href: "/" },
    { name: "Outcomes", href: "/outcomes" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm text-slate-900">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <img 
            src="/iicpc.png" 
            alt="IICPC Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-200" 
          />
          <span className="font-light uppercase text-lg md:text-xl hidden sm:block">
            IICPC Talent
          </span>
        </Link>
        
        <nav className="flex items-center gap-6 md:gap-10 font-medium text-xs md:text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`hidden md:block px-3 py-1 transition-colors ${
                  isActive
                    ? "bg-[#0056D2]/10 text-[#0056D2]" // Active state
                    : "text-slate-600 hover:text-[#0056D2]" // Inactive state
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="px-4 py-2 md:px-6 md:py-3 bg-[#0056D2] text-white hover:bg-blue-700 transition-colors font-medium rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] focus-visible:ring-offset-2">
            Portal Login
          </button>
        </nav>
      </div>
    </header>
  );
}
