"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();

      // Store the session token in an HTTP-only manner or standard cookie.
      // For this migration phase, setting it directly on the document cookie to be read by middleware/APIs
      document.cookie = `iicpc_session_token=${token}; path=/; max-age=3600; Secure; SameSite=Strict`;
      
      router.push("/portal");
      
      // Failsafe in case router.push silently fails or freezes
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error: any) {
      console.error("Authentication Failed:", error);
      alert("Authentication failed. Please check your credentials.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md border border-slate-800 bg-black p-8 shadow-2xl">
        <div className="mb-10 border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-mono font-bold tracking-tight uppercase">IICPC Engine</h1>
          <p className="text-slate-500 font-mono text-sm mt-2 uppercase tracking-widest">
            Restricted Access
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider" htmlFor="email">
              Firm Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full bg-transparent border border-slate-700 px-4 py-3 text-sm focus:border-[#0056D2] focus:outline-none transition-colors"
              placeholder="e.g. jsmith@janestreet.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider" htmlFor="password">
              Passphrase
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full bg-transparent border border-slate-700 px-4 py-3 text-sm focus:border-[#0056D2] focus:outline-none transition-colors"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0056D2] hover:bg-blue-700 text-white font-mono text-sm uppercase tracking-widest py-4 transition-colors disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Initialize Session"}
            </button>
          </div>
          
          <div className="text-xs font-mono text-slate-600 mt-6 text-center border-t border-slate-800 pt-6">
            <p>Secure Portal. All connections are encrypted and logged.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
