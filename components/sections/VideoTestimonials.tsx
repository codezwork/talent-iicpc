"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Using the provided YouTube URL for all mock entries, with enablejsapi=1 appended
const YOUTUBE_URL_1 = "https://www.youtube-nocookie.com/embed/RKXJdB6Vzps?si=BVBKY3jQqmHa5eR3&start=1&enablejsapi=1";
const YOUTUBE_URL_2 = "https://www.youtube-nocookie.com/embed/8Grk0fA1A_s?si=Jta5EP5CT4JAwFCl&amp;start=1&enablejsapi=1";
const YOUTUBE_URL_3 = "https://www.youtube-nocookie.com/embed/vSTQcIzM55s?si=v_usr_ofnc-UD68b&amp;start=2&enablejsapi=1";
const YOUTUBE_URL_4 = "https://www.youtube-nocookie.com/embed/uR7IMgwQNtU?si=zWFhH0c7ANm21SoR&amp;start=2&enablejsapi=1";

const testimonials = [
  {
    id: 1,
    videoSrc: YOUTUBE_URL_1,
    name: "Yuto Watanabe",
    cfRank: "Candidate Master",
    event: "IICPC CodeFest'26 Winner",
    achievement: "SDE Intern @ Optiver",
  },
  {
    id: 2,
    videoSrc: YOUTUBE_URL_2,
    name: "Teetat",
    cfRank: "Master",
    event: "IICPC QunatFest'25 Winner",
    achievement: "Quant Researcher @ Jane Street",
  },
  {
    id: 3,
    videoSrc: YOUTUBE_URL_3,
    name: "Sushil",
    cfRank: "Expert",
    event: "IICPC Regional 2024",
    achievement: "Software Engineer @ Google",
  },
  {
    id: 4,
    videoSrc: YOUTUBE_URL_4,
    name: "Shreyan Ray",
    cfRank: "Grandmaster",
    event: "IICPC Finals 2026",
    achievement: "Trading Analyst @ Citadel",
  },
];

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pauseAllVideos = () => {
    // Select only the iframes within this specific component
    const iframes = document.querySelectorAll<HTMLIFrameElement>('.yt-testimonial-iframe');
    iframes.forEach(iframe => {
      if (iframe.contentWindow) {
        // Send the native YouTube API pause command
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
      }
    });
  };

  const nextSlide = () => {
    pauseAllVideos();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    pauseAllVideos();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeData = testimonials[activeIndex];

  return (
    <section className="relative bg-black text-white py-24 border-b border-slate-800 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Unified Section Header */}
        <div className="text-center mb-20 px-6">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-bold mb-2">Community</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-white">What Our Participants Say</h2>
          <p className="text-xl font-medium text-[#0056D2] tracking-wide">
            Join a network of top-tier algorithmic problem solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Carousel */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[500px] aspect-video flex justify-center items-center h-[280px] sm:h-[300px]">
              {testimonials.map((t, index) => {
                let scale = 1;
                let x = '0%';
                let rotate = '0deg';
                let zIndex = 50;
                let opacity = 1;

                const N = testimonials.length;
                let dist = (index - activeIndex) % N;
                if (dist > N / 2) dist -= N;
                if (dist < -N / 2) dist += N;
                
                // Keeping the math exactly as it was in the file before this request
                if (dist > 0) {
                  scale = 0.85;
                  x = `${dist * 10}%`;
                  rotate = `${dist * 4}deg`;
                  zIndex = 50 - dist;
                  opacity = 0.6;
                } else if (dist < 0) {
                  scale = 0.85;
                  x = `${dist * 12}%`;
                  rotate = `${dist * 4}deg`;
                  zIndex = 50 + dist; 
                  opacity = 0.6;
                }

                return (
                  <div
                    key={t.id}
                    className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out origin-bottom bg-slate-900 border border-slate-700 rounded-none shadow-xl"
                    style={{
                      transform: `translateX(${x}) scale(${scale}) rotate(${rotate})`,
                      zIndex,
                      opacity,
                    }}
                  >
                    <iframe
                      src={t.videoSrc}
                      title={`Testimonial from ${t.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      tabIndex={dist === 0 ? 0 : -1}
                      // Added 'yt-testimonial-iframe' for targeted selection
                      className={`yt-testimonial-iframe w-full h-full rounded-none border-none ${dist !== 0 ? 'pointer-events-none' : ''}`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Circular Arrow Buttons */}
            <div className="flex gap-6 mt-12 w-full justify-center">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-[#0056D2] bg-[#0056D2] text-white flex items-center justify-center hover:bg-[#003d99] hover:border-[#003d99] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2]"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Participant Spotlight</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">Global Talent, Real Growth.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <p className="text-[#0056D2] tracking-widest uppercase text-xs mb-1">Name</p>
                <p className="text-3xl font-light">{activeData.name}</p>
              </div>
              <div>
                <p className="text-[#0056D2] tracking-widest uppercase text-xs mb-1">CF Rank</p>
                <p className="text-3xl font-light">{activeData.cfRank}</p>
              </div>
              <div>
                <p className="text-[#0056D2] tracking-widest uppercase text-xs mb-1">Event</p>
                <p className="text-3xl font-light">{activeData.event}</p>
              </div>
              <div>
                <p className="text-[#0056D2] tracking-widest uppercase text-xs mb-1">Achievement</p>
                <p className="text-3xl font-light">{activeData.achievement}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
