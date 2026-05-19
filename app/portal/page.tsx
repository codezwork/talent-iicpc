"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { CandidateSlideOut } from "@/components/portal/CandidateSlideOut";
import { useGSAP } from "@gsap/react";
import { default as gsapCore } from "gsap";

gsapCore.registerPlugin(useGSAP);

export default function PortalPage() {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Slide-out state
  const [selectedCandidate, setSelectedCandidate] = useState<any | null>(null);
  const [isSlideOutOpen, setIsSlideOutOpen] = useState(false);

  // Filters
  const [filterRole, setFilterRole] = useState("");
  const [filterGradYear, setFilterGradYear] = useState("");

  const tableRef = useRef<HTMLTableElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await fetch("/api/candidates");
        if (res.status === 401 || res.status === 403) {
          router.push("/login");
          return;
        }
        if (!res.ok) {
          throw new Error(await res.text());
        }
        const data = await res.json();
        setCandidates(data);
      } catch (err: any) {
        setError(err.message || "Failed to load payload.");
      } finally {
        setLoading(false);
      }
    };
    fetchCandidates();
  }, [router]);

  useGSAP(() => {
    if (!loading && candidates.length > 0) {
      gsapCore.fromTo(
        ".candidate-row",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [loading, candidates]);

  const handleRowClick = (candidate: any) => {
    setSelectedCandidate(candidate);
    setIsSlideOutOpen(true);
  };

  const handleLogout = () => {
    document.cookie = "iicpc_tier=; path=/; max-age=0";
    document.cookie = "iicpc_firm_uid=; path=/; max-age=0";
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-[#0056D2] font-mono text-xl font-bold uppercase tracking-widest animate-pulse">
        [ SYSTEM FETCHING... ]
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-red-500 font-mono">
        <div className="border border-red-900 bg-red-950/20 p-6 max-w-md">
          <h2 className="mb-2 uppercase tracking-widest text-xs">System Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Derive dynamic columns from the first candidate
  const firstCand = candidates[0] || {};
  const allKeys = Object.keys(firstCand);
  
  // Decide which keys to show in the table (hide overly long ones or ID)
  const hiddenTableKeys = ['id', 'interviewNotes', 'techStack', 'githubUrl', 'linkedinUrl', 'personalWebsite'];
  const columns = allKeys.filter(k => !hiddenTableKeys.includes(k));

  // Filtration logic
  const filteredCandidates = candidates.filter(cand => {
    const roleMatch = filterRole ? cand.preferredRole?.toLowerCase().includes(filterRole.toLowerCase()) : true;
    const gradMatch = filterGradYear ? String(cand.graduationYear) === filterGradYear : true;
    return roleMatch && gradMatch;
  });

  return (
    <div className="min-h-screen bg-black text-slate-50 flex flex-col font-mono selection:bg-[#0056D2] selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between bg-black sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#0056D2] flex items-center justify-center text-white font-bold text-xs">
            //
          </div>
          <h1 className="text-xl font-bold tracking-tight uppercase">IICPC Talent Pool</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
        >
          Terminate Session
        </button>
      </header>

      {/* Control Panel (Filters) */}
      <div className="px-6 py-4 border-b border-slate-800 bg-slate-950 flex flex-wrap gap-4 items-end">
        <div className="space-y-2">
          <label className="block text-[10px] uppercase tracking-wider text-slate-500">Filter: Role</label>
          <input 
            type="text" 
            placeholder="e.g. Quant" 
            className="bg-black border border-slate-800 px-3 py-2 text-xs focus:outline-none focus:border-[#0056D2] text-white"
            value={filterRole}
            onChange={e => setFilterRole(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] uppercase tracking-wider text-slate-500">Filter: Grad Year</label>
          <input 
            type="text" 
            placeholder="e.g. 2024" 
            className="bg-black border border-slate-800 px-3 py-2 text-xs focus:outline-none focus:border-[#0056D2] text-white w-24"
            value={filterGradYear}
            onChange={e => setFilterGradYear(e.target.value)}
          />
        </div>
        <div className="text-[10px] uppercase tracking-widest text-slate-600 ml-auto self-center">
          Showing {filteredCandidates.length} Records
        </div>
      </div>

      {/* Data Table */}
      <main className="flex-1 overflow-x-auto p-6">
        {filteredCandidates.length === 0 ? (
          <div className="text-center text-slate-600 py-20 text-sm uppercase tracking-widest">No records found matching criteria.</div>
        ) : (
          <table ref={tableRef} className="w-full text-left whitespace-nowrap border-collapse">
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col} className="px-4 py-3 border-b border-slate-800 text-[10px] uppercase tracking-widest text-slate-500 bg-slate-950 font-normal">
                    {col.replace(/([A-Z])/g, ' $1').trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.map((cand, i) => (
                <tr 
                  key={cand.id || i} 
                  onClick={() => handleRowClick(cand)}
                  className="candidate-row group cursor-pointer hover:bg-[#0056D2]/10 transition-colors border-b border-slate-800/50"
                >
                  {columns.map(col => (
                    <td key={col} className="px-4 py-4 text-xs text-slate-300 group-hover:text-white transition-colors">
                      {cand[col] || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      {/* Slide Out Panel */}
      <CandidateSlideOut 
        candidate={selectedCandidate} 
        isOpen={isSlideOutOpen} 
        onClose={() => setIsSlideOutOpen(false)} 
      />
      
    </div>
  );
}
