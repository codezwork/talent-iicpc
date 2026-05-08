"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

// TODO: Replace these with your actual Google Form Action URL and Entry IDs
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSexIZMULh3jmwftUBz3ceIEeI14wcAG-TGYSwtmRTaFaKF3Jw/formResponse";
const ENTRY_IDS = {
  firstName: "entry.313568250", 
  lastName: "entry.177836635",
  email: "entry.661442456",
  company: "entry.617121879",
};

export default function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: ""
  });

  // Validation State
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    company: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Strict Validation
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim(),
      company: !formData.company.trim(),
    };

    setErrors(newErrors);

    // If any field is empty, abort submission
    if (Object.values(newErrors).some(isError => isError)) {
      return;
    }

    setStatus("loading");

    // Construct Google Form Payload
    const payload = new URLSearchParams();
    payload.append(ENTRY_IDS.firstName, formData.firstName);
    payload.append(ENTRY_IDS.lastName, formData.lastName);
    payload.append(ENTRY_IDS.email, formData.email);
    payload.append(ENTRY_IDS.company, formData.company);

    try {
      // no-cors is required to submit to Google Forms directly from the browser
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      // Because 'no-cors' returns an opaque response, we assume success if no network error was thrown
      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const hasErrors = Object.values(errors).some(isError => isError);

  return (
    <section className="py-24 sm:py-32 px-6 md:px-12 bg-slate-50 text-slate-900 text-center border-b border-slate-200">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-2">Get Started</p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-none mb-6">
          Where India's Top Problem Solvers Get Hired.
        </h2>
        <p className="text-xl text-slate-600 font-medium tracking-wide mb-16">
          Join the waitlist for exclusive access to our 2026 talent cohort.
        </p>

        {status === "success" ? (
          <div className="border border-[#0056D2]/30 p-8 bg-[#0056D2]/5 text-[#0056D2] w-full text-lg font-medium tracking-wide">
            Inquiry Received. We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 relative">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="FIRST NAME" 
                className={`flex-1 h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
              />
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="LAST NAME" 
                className={`flex-1 h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
              />
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="WORK EMAIL" 
              className={`w-full h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
            />
            <input 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="COMPANY NAME" 
              className={`w-full h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors ${errors.company ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
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
              className="mt-4 w-full h-14 bg-[#0056D2] text-white font-medium tracking-wide flex items-center justify-center gap-4 hover:bg-blue-700 transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
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
    </section>
  );
}
