"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2, X } from "lucide-react";

// Google Form Constants
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSexIZMULh3jmwftUBz3ceIEeI14wcAG-TGYSwtmRTaFaKF3Jw/formResponse";
const ENTRY_IDS = {
  firstName: "entry.313568250", 
  lastName: "entry.177836635",
  company: "entry.617121879",
  role: "entry.1907364360",
  email: "entry.661442456",
};

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", company: "", role: "", email: "" });
  const [errors, setErrors] = useState({ firstName: false, lastName: false, company: false, role: false, email: false });

  if (!isOpen) return null;

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
      company: !formData.company.trim(),
      role: !formData.role.trim(),
      email: !formData.email.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(isError => isError)) return;

    setStatus("loading");

    const payload = new URLSearchParams();
    payload.append(ENTRY_IDS.firstName, formData.firstName);
    payload.append(ENTRY_IDS.lastName, formData.lastName);
    payload.append(ENTRY_IDS.company, formData.company);
    payload.append(ENTRY_IDS.role, formData.role);
    payload.append(ENTRY_IDS.email, formData.email);

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

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      if (status !== "success") {
        setStatus("idle");
        setErrors({ firstName: false, lastName: false, company: false, role: false, email: false });
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-xl bg-slate-50 border border-slate-200 shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={handleClose}
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
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="COMPANY NAME" 
              className={`w-full h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors rounded-none ${errors.company ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
            />
            <input 
              type="text" 
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="YOUR ROLE" 
              className={`w-full h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors rounded-none ${errors.role ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="WORK EMAIL" 
              className={`w-full h-14 bg-white border px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-colors rounded-none ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
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
  );
}
