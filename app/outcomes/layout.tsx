import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verified Hiring Outcomes | IICPC Talents Portal",
  description: "See the verified hiring outcomes of elite competitive programmers and quantitative talent from IICPC programs at top-tier firms like Jane Street, HRT, and Optiver.",
};

export default function OutcomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
