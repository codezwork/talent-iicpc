"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import HeroScene from "@/components/3d/HeroScene";
import HeroStages from "@/components/sections/HeroStages";
import HiringPainTable from "@/components/sections/HiringPainTable";
import StatsDashboard from "@/components/sections/StatsDashboard";
import PlacementOutcomes from "@/components/sections/PlacementOutcomes";
import SponsorWall from "@/components/sections/SponsorWall";
import SpeedMetrics from "@/components/sections/SpeedMetrics";
import ROICalculator from "@/components/sections/ROICalculator";
import FinalCTA from "@/components/sections/FinalCTA";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. HARDCODE THE URL OUTSIDE OR INSIDE THE COMPONENT (Static)
// Added the fresh 'si' parameter and 'start=2' while keeping all background optimizations
const BACKGROUND_VIDEO_SRC = "https://www.youtube-nocookie.com/embed/CP83T01ECZA?si=KNOQCxUwsCdUChkd&start=2&autoplay=1&mute=1&loop=1&playlist=CP83T01ECZA&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&iv_load_policy=3&disablekb=1";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 2. ONLY KEEP THE 3D COIN STATE. 
  // (Removed iframeSrc state and useEffect)
  const [coinGroup, setCoinGroup] = useState<THREE.Group | null>(null);

  useGSAP(() => {
    if (!coinGroup) return;

    let mm = gsap.matchMedia();

    // ------------------------------------
    // DESKTOP LOGIC
    // ------------------------------------
    mm.add("(min-width: 768px)", () => {
      gsap.set(coinGroup.position, { x: -5, y: 0, z: 0 });
      gsap.set(coinGroup.rotation, { x: Math.PI / 2, y: 0, z: 0 }); 

      const idleSpin = gsap.to(coinGroup.rotation, {
        z: "-=" + (Math.PI * 2),
        duration: 4, ease: "none", repeat: -1
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-stages-container",
          start: "top top", end: "bottom bottom", scrub: 1,
          onUpdate: (self) => {
            if (self.progress > 0.01) idleSpin.pause();
            else idleSpin.play();
          }
        }
      });

      const currentZ = coinGroup.rotation.z || 0;
      const targetZ = Math.ceil(currentZ / (Math.PI * 2)) * (Math.PI * 2) || (Math.PI * 2);

      tl.to(coinGroup.position, { x: 5, duration: 1, ease: "power1.inOut" }, 0);
      tl.to(coinGroup.rotation, {
        x: Math.PI * 4.5, z: targetZ, 
        keyframes: { "0%": { y: 0 }, "50%": { y: Math.PI / 6 }, "100%": { y: 0 } },
        duration: 1, ease: "power1.inOut"
      }, 0);

      tl.to(coinGroup.position, { x: 0, z: 4, duration: 1, ease: "power1.inOut" }, 0.85);
      tl.to(coinGroup.rotation, { z: targetZ + (Math.PI * 4), duration: 1, ease: "power1.inOut" }, 0.85);
    });

    // ------------------------------------
    // MOBILE LOGIC
    // ------------------------------------
    mm.add("(max-width: 767px)", () => {
      gsap.set(coinGroup.position, { x: 0, y: 7, z: 0 });
      gsap.set(coinGroup.rotation, { x: Math.PI / 2, y: 0, z: 0 }); 

      const idleSpin = gsap.to(coinGroup.rotation, {
        z: "-=" + (Math.PI * 2),
        duration: 4, ease: "none", repeat: -1
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-stages-container",
          start: "top top", end: "bottom bottom", scrub: 1,
          onUpdate: (self) => {
            if (self.progress > 0.01) idleSpin.pause();
            else idleSpin.play();
          }
        }
      });

      const currentZ = coinGroup.rotation.z || 0;
      const targetZ = Math.ceil(currentZ / (Math.PI * 2)) * (Math.PI * 2) || (Math.PI * 2);

      tl.to(coinGroup.position, { x: 0, y: 3.5, duration: 1, ease: "power1.inOut" }, 0);
      tl.to(coinGroup.rotation, {
        x: Math.PI * 4.5, z: targetZ, 
        keyframes: { "0%": { y: 0 }, "50%": { y: Math.PI / 6 }, "100%": { y: 0 } },
        duration: 1, ease: "power1.inOut"
      }, 0);

      tl.to(coinGroup.position, { x: 0, y: 2, z: 4, duration: 1, ease: "power1.inOut" }, 0.85);
      tl.to(coinGroup.rotation, { z: targetZ + (Math.PI * 4), duration: 1, ease: "power1.inOut" }, 0.85);
    });

    return () => mm.revert(); 

  }, { scope: containerRef, dependencies: [coinGroup] });

  return (
    <main ref={containerRef} className="relative w-full bg-white text-slate-900 selection:bg-[#0056D2] selection:text-white">
      <Header />
      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        
        {/* 3. STATICALLY RENDERED YOUTUBE BACKGROUND */}
        <iframe 
          src={BACKGROUND_VIDEO_SRC} 
          title="Codefest 2026 recap" 
          loading="eager" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-125 opacity-80 pointer-events-none border-none"
          allowFullScreen
        />

        {/* Overlay */}
        <div className="absolute inset-0 md:bg-white/5"></div>

        {/* 3D Coin Canvas */}
        <div className="absolute inset-0">
          <HeroScene setCoinGroup={setCoinGroup}/>
        </div>
      </div>

      {/* Foreground Scrollable Content */}
      <div className="relative z-10">
        <div id="hero-stages-container">
          <HeroStages />
        </div>
        <HiringPainTable />
        <StatsDashboard />
        <PlacementOutcomes />
        <SponsorWall />
        <SpeedMetrics />
        <ROICalculator />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}