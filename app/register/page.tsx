"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";

// Google Form Constants
const FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSexIZMULh3jmwftUBz3ceIEeI14wcAG-TGYSwtmRTaFaKF3Jw/formResponse";

const ENTRY_IDS = {
  firstName: "entry.313568250",
  lastName: "entry.177836635",
  company: "entry.617121879",
  hireFor: "entry.837645235",
  associatedPast: "entry.1877026626",
  location: "entry.182373166",
  state: "entry.526321032",
  email: "entry.661442456",
  contactNumber: "entry.801602161",
  remarks: "entry.1956072292",
};

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", 
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", 
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Clean Radio Component
const CleanRadio = ({ 
  name, 
  value, 
  label, 
  checked, 
  onChange 
}: { 
  name: string; 
  value: string; 
  label: string; 
  checked: boolean; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}) => (
  <label className="flex items-center cursor-pointer gap-3 group">
    <input 
      type="radio" 
      name={name} 
      value={value} 
      checked={checked} 
      onChange={onChange} 
      className="hidden" 
    />
    <div className={`w-5 h-5 border rounded-full transition-colors flex items-center justify-center ${checked ? 'bg-[#0056D2] border-[#0056D2]' : 'bg-white border-slate-300 group-hover:border-[#0056D2]'}`}>
      {checked && <div className="w-2 h-2 bg-white rounded-full"></div>}
    </div>
    <span className="text-sm text-slate-700">{label}</span>
  </label>
);

export default function RegisterPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    contactNumber: "",
    hireFor: "",
    associatedPast: "",
    location: "",
    state: "",
    remarks: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === "location" && value !== "India") {
        newData.state = "";
      }
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const payload = new URLSearchParams();
    payload.append(ENTRY_IDS.firstName, formData.firstName);
    payload.append(ENTRY_IDS.lastName, formData.lastName);
    payload.append(ENTRY_IDS.company, formData.company);
    payload.append(ENTRY_IDS.email, formData.email);
    payload.append(ENTRY_IDS.contactNumber, formData.contactNumber);
    payload.append(ENTRY_IDS.hireFor, formData.hireFor);
    payload.append(ENTRY_IDS.associatedPast, formData.associatedPast);
    payload.append(ENTRY_IDS.location, formData.location);
    if (formData.location === "India") {
      payload.append(ENTRY_IDS.state, formData.state);
    }
    payload.append(ENTRY_IDS.remarks, formData.remarks);

    try {
      await fetch(FORM_ACTION_URL, {
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

  const isIndia = formData.location === "India";

  return (
    <main className="relative w-full bg-white text-slate-900 selection:bg-[#0056D2] selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-24 w-full flex-grow flex items-center justify-center px-4 md:px-12">
        <div className="w-full max-w-3xl bg-slate-50 border border-slate-200 p-8 md:p-16">
          
          <div className="mb-12 text-center border-b border-slate-200 pb-8">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-4">
              Employer Registration
            </p>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
              Join the Talent Portal
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Register below to access India's top competitive programmers and engineers.
            </p>
          </div>

          {status === "success" ? (
            <div className="py-16 text-center border border-[#0056D2]/30 bg-[#0056D2]/5 text-[#0056D2]">
              <h2 className="text-xl font-medium tracking-wide mb-2">
                Registration Successful
              </h2>
              <p className="text-sm text-slate-600">
                Your details have been recorded. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors"
                    placeholder="john@acme.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contactNumber" className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                    Contact Number
                  </label>
                  <input 
                    type="tel" 
                    id="contactNumber"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Radio Group: Hire For */}
              <div className="flex flex-col gap-4 border-t border-slate-200 pt-6">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  Wish to hire for
                </label>
                <div className="flex flex-col sm:flex-row gap-6">
                  <CleanRadio 
                    name="hireFor" 
                    value="Internship Roles" 
                    label="Internships" 
                    checked={formData.hireFor === "Internship Roles"} 
                    onChange={handleChange} 
                  />
                  <CleanRadio 
                    name="hireFor" 
                    value="Full Time roles" 
                    label="Full Time" 
                    checked={formData.hireFor === "Full Time roles"} 
                    onChange={handleChange} 
                  />
                  <CleanRadio 
                    name="hireFor" 
                    value="Both" 
                    label="Both" 
                    checked={formData.hireFor === "Both"} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              {/* Radio Group: Associated */}
              <div className="flex flex-col gap-4 border-t border-slate-200 pt-6">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  Ever been associated with IICPC in past?
                </label>
                <div className="flex gap-6">
                  <CleanRadio 
                    name="associatedPast" 
                    value="Yes" 
                    label="Yes" 
                    checked={formData.associatedPast === "Yes"} 
                    onChange={handleChange} 
                  />
                  <CleanRadio 
                    name="associatedPast" 
                    value="No" 
                    label="No" 
                    checked={formData.associatedPast === "No"} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              {/* Radio Group: Location & State */}
              <div className="flex flex-col gap-4 border-t border-slate-200 pt-6">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  You are reaching out from
                </label>
                <div className="flex gap-6 mb-2">
                  <CleanRadio 
                    name="location" 
                    value="India" 
                    label="India" 
                    checked={formData.location === "India"} 
                    onChange={handleChange} 
                  />
                  <CleanRadio 
                    name="location" 
                    value="Abroad" 
                    label="Abroad" 
                    checked={formData.location === "Abroad"} 
                    onChange={handleChange} 
                  />
                </div>

                <div className={`transition-opacity duration-300 ${isIndia ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                  <label htmlFor="state" className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-2 block">
                    State (If from India)
                  </label>
                  <select 
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    disabled={!isIndia}
                    required={isIndia}
                    className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors appearance-none"
                    style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #64748B 50%), linear-gradient(135deg, #64748B 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="" disabled>Select state</option>
                    {INDIAN_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Remarks */}
              <div className="flex flex-col gap-2 border-t border-slate-200 pt-6">
                <label htmlFor="remarks" className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                  Your Remarks
                </label>
                <textarea 
                  id="remarks"
                  name="remarks"
                  rows={4}
                  value={formData.remarks}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors resize-none"
                  placeholder="Any special requests or details..."
                ></textarea>
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm font-medium text-left">
                  Connection failed. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="mt-4 w-full h-14 bg-[#0056D2] text-white font-medium tracking-wide flex items-center justify-center gap-4 hover:bg-blue-700 transition-colors disabled:opacity-80 disabled:cursor-not-allowed rounded-none shadow-xl"
              >
                {status === "loading" ? (
                  <>Processing <Loader2 className="animate-spin" /></>
                ) : (
                  <>Submit Registration</>
                )}
              </button>

            </form>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
