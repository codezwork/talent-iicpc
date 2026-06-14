import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://talent.iicpc.com'),
  title: "IICPC Talents Portal — Competitive Programming & Quant Finance India",
  description: "Exclusive platform connecting elite competitive programmers and quantitative talent with top-tier firms.",
  keywords: "IICPC, competitive programming India, IIT coding contest, Codefest, QuantFest, DELTA bootcamp, algorithmic trading competition, quant finance India, IICPC Talents",
  openGraph: {
    title: "IICPC Talents Portal",
    description: "Exclusive platform connecting elite competitive programmers and quantitative talent with top-tier firms.",
    url: "https://talent.iicpc.com/",
    siteName: "IICPC Talents",
    type: "website",
    images: [{ url: "https://iicpc.com/IICPC2.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IICPC Talents Portal",
    description: "Exclusive platform connecting elite competitive programmers and quantitative talent with top-tier firms.",
    images: ["https://iicpc.com/IICPC2.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IICPC — InterCollegiate Informatic and Competitive Programming Camp",
  "alternateName": "IICPC",
  "url": "https://talent.iicpc.com",
  "logo": "https://iicpc.com/IICPC2.png",
  "sameAs": [
    "https://codefest.iicpc.com",
    "https://quantfest.iicpc.com",
    "https://delta.iicpc.com"
  ],
  "description": "IICPC runs India's premier competitive programming, quantitative finance, and algorithmic trading programs for students from IITs and top institutions.",
  "email": "sponsorship-inquiries@iicpc.com",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Ayush Kumar",
    "affiliation": "IIT Madras"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(geist.variable, "h-full antialiased bg-slate-50")}
    >
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
