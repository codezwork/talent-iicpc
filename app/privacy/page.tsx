"use client";

import React from 'react';
import Link from 'next/link';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 14, 2026";

  return (
    <main className="relative w-full bg-white text-slate-900 selection:bg-[#0056D2] selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-24 bg-white w-full flex-grow">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#0056D2] font-medium mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 uppercase tracking-widest">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-light prose-headings:tracking-tight prose-a:text-[#0056D2] prose-p:leading-relaxed">
            <p>
              At IICPC Talent, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our portal to connect elite competitive programmers with top-tier tech and HFT firms.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We collect information that you provide directly to us when opting in for hiring procedures moderated by IICPC, building your talent profile, or posting a job. This includes:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and professional credentials.</li>
              <li><strong>Talent Profile Data:</strong> Competitive programming profiles (Codeforces, LeetCode, etc.), resumes, project portfolios, and interview performance metrics.</li>
              <li><strong>Employer Data:</strong> Company details, hiring criteria, and interaction history with candidates.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>
              The primary purpose of collecting your information is to facilitate meaningful connections between top engineering talent and leading employers. Specifically, we use your data to:
            </p>
            <ul>
              <li>Match candidates with relevant job opportunities.</li>
              <li>Verify competitive programming achievements and academic standing.</li>
              <li>Improve our matching algorithms and overall platform experience.</li>
              <li>Communicate with you regarding updates, offers, and opportunities.</li>
            </ul>

            <h3>3. Information Sharing and Disclosure</h3>
            <p>
              Your personal data remains safe with us and is shared with only authorized entities including the companies who have opted to recruit through IICPC Talent. Your profile information is only shared with verified employers on the IICPC Talent platform with your consent. We may also share information with trusted third-party service providers who assist us in operating our platform, subject to strict confidentiality agreements.
            </p>

            <h3>4. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our team monitors all the activities online 24*7 and tries best to keep the portal secure. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h3>5. Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal data at any time. You can manage / correct your profile by <Link href="/contact" className="text-[#0056D2] hover:underline">contacting our support team</Link>.
            </p>

            <h3>6. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@iicpc.com" className="text-[#0056D2] hover:underline">info@iicpc.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
