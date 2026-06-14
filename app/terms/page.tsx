"use client";

import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 uppercase tracking-widest">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-light prose-headings:tracking-tight prose-a:text-[#0056D2] prose-p:leading-relaxed">
            <p>
              Welcome to the IICPC Talent portal. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By registering an account, accessing the platform, or utilizing any of our services as a candidate or an employer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>

            <h3>2. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. We reserve the right to suspend or terminate accounts that contain false or misleading information.
            </p>

            <h3>3. Candidate Obligations</h3>
            <p>
              Candidates agree to present their skills, experiences, and competitive programming achievements truthfully. Any falsification of records, rankings, or academic history may result in immediate termination from the platform and notification to affiliated educational institutions or prospective employers.
            </p>

            <h3>4. Employer Obligations</h3>
            <p>
              Employers agree to use the candidate information solely for the purpose of recruitment and hiring. Data scraping, redistribution, or utilizing candidate data for any unauthorized purposes is strictly prohibited and will result in immediate revocation of access without a refund.
            </p>

            <h3>5. Intellectual Property</h3>
            <p>
              All content on the IICPC Talent platform, including but not limited to logos, text, graphics, and software, is the property of IICPC Private Limited or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>

            <h3>6. Limitation of Liability</h3>
            <p>
              IICPC Talent provides the platform "as is" and makes no guarantees regarding hiring outcomes or candidate performance. In no event shall IICPC Private Limited be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform.
            </p>

            <h3>7. Modifications to the Service</h3>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice at any time. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
            </p>

            <h3>8. Governing Law</h3>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h3>9. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@iicpc.com">legal@iicpc.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
