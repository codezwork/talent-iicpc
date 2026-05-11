"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { ArrowRight, Loader2, X } from "lucide-react";

// Google Form Constants
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSexIZMULh3jmwftUBz3ceIEeI14wcAG-TGYSwtmRTaFaKF3Jw/formResponse";
const ENTRY_IDS = {
  firstName: "entry.313568250", 
  lastName: "entry.177836635",
  email: "entry.661442456",
  company: "entry.617121879",
};

export default function HeroStages() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "" });
  const [errors, setErrors] = useState({ firstName: false, lastName: false, email: false, company: false });

  // GSAP Animations
  useGSAP(() => {
    const groups = gsap.utils.toArray<HTMLElement>(".reveal-group");

    groups.forEach((group) => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".reveal-wrapper", group);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
          toggleActions: "play reset play reset"
        }
      });

      wrappers.forEach((wrapper, index) => {
        const block = wrapper.querySelector(".reveal-block");
        const text = wrapper.querySelector(".reveal-text");
        const delay = index * 0.15; 

        tl.fromTo(block, 
          { scaleX: 0, transformOrigin: "left" }, 
          { scaleX: 1, duration: 0.4, ease: "power2.inOut" },
          delay
        )
        .set(text, { opacity: 1 }, delay + 0.4)
        .to(block, { 
          scaleX: 0, 
          transformOrigin: "right", 
          duration: 0.4, 
          ease: "power2.inOut" 
        }, delay + 0.4);
      });
    });
  }, { scope: containerRef });

  // Form Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim(),
      company: !formData.company.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(isError => isError)) return;

    setStatus("loading");

    const payload = new URLSearchParams();
    payload.append(ENTRY_IDS.firstName, formData.firstName);
    payload.append(ENTRY_IDS.lastName, formData.lastName);
    payload.append(ENTRY_IDS.email, formData.email);
    payload.append(ENTRY_IDS.company, formData.company);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const hasErrors = Object.values(errors).some(isError => isError);

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Reset form state when closed so it's fresh if they open it again
    setTimeout(() => {
      if (status !== "success") {
        setStatus("idle");
        setErrors({ firstName: false, lastName: false, email: false, company: false });
      }
    }, 300);
  };

  return (
    <>
      <div ref={containerRef} className="w-full relative text-slate-900">
        
        {/* Stage 1 */}
        <section className="h-screen w-full flex items-center justify-end px-10 md:px-24">
          <div className="max-w-xl text-right flex flex-col items-end gap-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-bold bg-white px-3 py-1 shadow-sm">
              The Problem
            </p>
            <div className="reveal-group flex flex-col items-end gap-2">
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <h1 className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                Finding top
                </h1>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <h1 className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                engineering talent
              </h1>
            </div>
            <div className="reveal-wrapper relative inline-block overflow-hidden">
              <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <h1 className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                is harder than it
              </h1>
            </div>
            <div className="reveal-wrapper relative inline-block overflow-hidden">
              <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
              <h1 className="reveal-text opacity-0 bg-white/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-slate-900">
                should be.
                </h1>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden mt-2">
                <div className="reveal-block absolute inset-0 z-10 bg-slate-900" style={{ transform: "scaleX(0)" }}></div>
              <p className="reveal-text opacity-0 text-sm text-white md:text-xl font-medium tracking-wide bg-slate-900/95 px-4 py-2">
                  High signal-to-noise ratio required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 2 */}
        <section className="h-screen w-full flex items-center justify-start px-10 md:px-24">
          <div className="max-w-xl flex flex-col items-start gap-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-bold bg-white px-3 py-1 shadow-sm">
              The Solution
            </p>
          
          {/* Group 2: Staggered Lines */}
            <div className="reveal-group flex flex-col items-start gap-2">
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-white" style={{ transform: "scaleX(0)" }}></div>
              <h1 className="reveal-text opacity-0 bg-[#0056D2]/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-white">
                  We've already done
                </h1>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-white" style={{ transform: "scaleX(0)" }}></div>
              <h1 className="reveal-text opacity-0 bg-[#0056D2]/95 px-4 py-2 text-[1.5rem] md:text-6xl font-light tracking-tight leading-none text-white">
                  the filtering.
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-2 bg-white/95 p-6 border-l-4 border-[#0056D2] shadow-xl">
              <div>
              <div className="text-1xl font-bold text-slate-900">15,000+</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Total Participants on Average</div>
              </div>
              <div>
              <div className="text-1xl font-bold text-slate-900">3</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Stages of offline filtering</div>
              </div>
              <div>
              <div className="text-1xl font-bold text-[#0056D2]">0.5%</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Reach Finals</div>
              </div>
            <div>
              <div className="text-1xl font-bold text-slate-900">300+</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Global Participation</div>
            </div>
            <div>
              <div className="text-1xl font-bold text-slate-900">54+</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">Countries Represented</div>
            </div>
            </div>
          </div>
        </section>

        {/* Stage 3 */}
        <section className="h-screen w-full flex items-center justify-center px-10 md:px-24 text-center">
          <div className="max-w-2xl flex flex-col items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-bold bg-white px-3 py-1 shadow-sm">
              Get Started
            </p>
          
          {/* Group 3: Staggered Lines */}
            <div className="reveal-group flex flex-col items-center gap-2">
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
                <h1 className="reveal-text opacity-0 bg-white/95 px-6 py-2 text-[2.25rem] md:text-7xl font-light tracking-tight leading-none text-slate-900">
                  Stop searching.
                </h1>
              </div>
              <div className="reveal-wrapper relative inline-block overflow-hidden">
                <div className="reveal-block absolute inset-0 z-10 bg-[#0056D2]" style={{ transform: "scaleX(0)" }}></div>
                <h1 className="reveal-text opacity-0 bg-white/95 px-6 py-2 text-[2.25rem] md:text-7xl font-light tracking-tight leading-none text-slate-900">
                  Start hiring.
                </h1>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-6 px-8 py-4 bg-[#0056D2] text-white font-medium tracking-wide text-lg hover:bg-blue-700 transition-colors rounded-none shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] focus-visible:ring-offset-2"
            >
              Get Access
            </button>
          </div>
        </section>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-opacity">
          
          <div className="relative w-full max-w-xl bg-slate-50 border border-slate-200 shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2]"
              aria-label="Close form"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Request Access</p>
              <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-2">Let us hear from you</h2>
              <p className="text-sm text-slate-600 font-medium">For exclusive access to our 2026 talent cohort.</p>
            </div>

            {status === "success" ? (
              <div className="border border-[#0056D2]/30 p-8 bg-[#0056D2]/5 text-[#0056D2] w-full text-center text-lg font-medium tracking-wide">
                Inquiry Received. We'll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 relative">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="FIRST NAME" 
                    className={`w-full sm:flex-1 h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors rounded-none ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
                  />
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="LAST NAME" 
                    className={`w-full sm:flex-1 h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors rounded-none ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
                  />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="WORK EMAIL" 
                  className={`w-full h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors rounded-none ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
                />
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="COMPANY NAME" 
                  className={`w-full h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors rounded-none ${errors.company ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
                />
                
                {hasErrors && (
                  <div className="text-red-500 text-sm font-medium text-left">
                    Please fill out all highlighted fields before submitting.
                  </div>
                )}

                {status === "error" && (
                  <div className="text-red-500 text-sm font-medium text-left">
                    Connection failed. Please try again.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="mt-4 w-full h-14 bg-[#0056D2] text-white font-medium tracking-wide flex items-center justify-center gap-4 hover:bg-blue-700 transition-colors disabled:opacity-80 disabled:cursor-not-allowed rounded-none"
                >
                  {status === "loading" ? (
                    <>Processing <Loader2 className="animate-spin" /></>
                  ) : (
                    <>Request Access <ArrowRight /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
