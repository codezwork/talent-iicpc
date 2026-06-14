"use client";

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="relative w-full bg-white text-slate-900 selection:bg-[#0056D2] selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-24 bg-white w-full flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-6">
              Contact our team.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're an employer looking to hire the top 1% or a candidate with questions about the platform, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h2 className="text-2xl font-medium text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#0056D2]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 uppercase tracking-widest mb-1">Email Us</h3>
                      <p className="text-slate-600">info@iicpc.com</p>
                      <p className="text-slate-600">dikshansh.raipure@iicpc.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#0056D2]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 uppercase tracking-widest mb-1">Headquarters</h3>
                      <p className="text-slate-600">1st floor, No.87, 4th Cross St,</p>
                      <p className="text-slate-600">Phase-1, Thirumalai Nagar,</p>
                      <p className="text-slate-600">Perungudi, Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#0056D2]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 uppercase tracking-widest mb-1">Call Us</h3>
                      <p className="text-slate-600">+91 99345 08942</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-10 border border-slate-200">
              <h2 className="text-2xl font-medium text-slate-900 mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-slate-500 font-medium">First Name</label>
                    <input type="text" id="firstName" className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-slate-500 font-medium">Last Name</label>
                    <input type="text" id="lastName" className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-500 font-medium">Work Email</label>
                  <input type="email" id="email" className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors" placeholder="john@company.com" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-slate-500 font-medium">Message</label>
                  <textarea id="message" rows={5} className="bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#0056D2] text-white py-4 text-sm font-medium uppercase tracking-widest hover:bg-blue-700 transition-colors duration-200 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>


        </div>
      </section>

      <Footer />
    </main>
  );
}
