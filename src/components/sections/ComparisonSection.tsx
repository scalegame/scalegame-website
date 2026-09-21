"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, ArrowRight, XCircle, ShieldCheck } from "lucide-react";
import { soundFx } from "../common/SoundController";

export const ComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"side-by-side" | "traditional" | "scalegame">("side-by-side");

  const traditionalSteps = ["Create", "Publish", "Hope"];
  const scaleGameSteps = [
    "Research",
    "Strategy",
    "Create",
    "Target",
    "Measure",
    "Optimize",
    "Scale",
  ];

  const comparisons = [
    {
      dimension: "STRATEGIC FOUNDATION",
      traditional: "Gut feelings, copied competitor templates, and guesswork.",
      scaleGame: "Forensic unit economics analysis, competitor tear-downs, and psychological leverage points.",
    },
    {
      dimension: "CREATIVE PHILOSOPHY",
      traditional: "Generic Canva templates, bland stock imagery, and safe corporate copy.",
      scaleGame: "Luxury art direction, high-stopping-power video hooks, and high-tension direct response.",
    },
    {
      dimension: "MEDIA BUYING",
      traditional: "Boosted social posts and passive 'set-and-forget' ad sets.",
      scaleGame: "Algorithmic bidding arbitrage, multi-variant testing matrices, and real-time CAC suppression.",
    },
    {
      dimension: "MEASUREMENT & ACCOUNTABILITY",
      traditional: "Vanity metrics (likes, impressions) with zero revenue correlation.",
      scaleGame: "The Scoreboard: blended ROAS, CAC payback velocity, and verified enterprise pipeline.",
    },
    {
      dimension: "EXECUTION SPEED",
      traditional: "Weeks of committee approvals, delayed feedback loops, and bureaucratic inertia.",
      scaleGame: "Rapid testing sprints, daily creative iterations, and proactive optimization protocols.",
    },
  ];

  return (
    <section
      id="comparison"
      className="relative w-full bg-[#050505] text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Meta */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2.5 h-2.5 bg-white" />
          <span className="font-mono text-xs uppercase tracking-tactical text-white/50">
            [SECTION 08 // THE DIVERGENCE]
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
              THE ARBITRAGE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              TRADITIONAL MARKETING
              <br />
              <span className="text-white/40">VS SCALE GAME.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-white/70 leading-relaxed uppercase tracking-wider">
              The traditional agency model is obsolete. Stop paying retainers for hope. Start investing in engineered victory.
            </p>
          </div>
        </div>

        {/* The Macro Sequences Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Agency Flow */}
          <div className="p-8 sm:p-10 border border-white/10 bg-[#090909] flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs text-white/40 tracking-widest">
                  THE PASSIVE GAMBLE
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 border border-white/20 text-white/40">
                  TRADITIONAL MODEL
                </span>
              </div>

              <h3 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-white/70 mb-4">
                CREATE → PUBLISH → HOPE
              </h3>

              <div className="flex items-center gap-2 flex-wrap py-4 mb-6 border-y border-white/5 font-mono text-xs text-white/40">
                {traditionalSteps.map((step, idx) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="line-through decoration-white/40">{step}</span>
                    {idx < traditionalSteps.length - 1 && <span>→</span>}
                  </span>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed">
                Traditional agencies charge five-figure retainers to produce uninspired assets, distribute them blindly, and pray that algorithms magically deliver buyers. When campaigns flatline, they blame the market.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-white/40 font-mono text-xs">
              <XCircle size={16} />
              <span>OUTCOME: STAGNATION & BURNED CAPITAL</span>
            </div>
          </div>

          {/* Scale Game High-Performance Engine */}
          <div className="p-8 sm:p-10 border-2 border-white bg-[#0e0e0e] shadow-[0_0_40px_rgba(255,255,255,0.08)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                  <span className="font-mono text-xs text-white tracking-widest font-bold">
                    THE ENGINEERED CONQUEST
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 border border-white bg-white text-black font-bold">
                  SCALE GAME
                </span>
              </div>

              <h3 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
                RESEARCH → STRATEGY → CREATE → TARGET → MEASURE → OPTIMIZE → SCALE
              </h3>

              <div className="flex items-center gap-2 flex-wrap py-4 mb-6 border-y border-white/20 font-mono text-xs text-white font-bold">
                {scaleGameSteps.map((step, idx) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-white/10 border border-white/20">
                      {step}
                    </span>
                    {idx < scaleGameSteps.length - 1 && <span className="text-white/40">→</span>}
                  </span>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed">
                Scale Game treats growth as an empirical science. Every creative hook is hypothesis-tested, every media dollar is tracked to pipeline revenue, and winning plays are aggressively scaled to consolidate industry dominance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-3 text-white font-mono text-xs font-bold">
              <ShieldCheck size={16} />
              <span>OUTCOME: ASYMMETRIC DOMINANCE & PREDICTABLE SCALE</span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Detailed Breakdown Table */}
        <div className="border border-white/10 divide-y divide-white/10 bg-[#090909]">
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 bg-black/60 font-mono text-xs text-white/40 uppercase tracking-wider">
            <div className="md:col-span-3">DIMENSION</div>
            <div className="md:col-span-4">TRADITIONAL AGENCY</div>
            <div className="md:col-span-5 text-white">SCALE GAME ADVANTAGE</div>
          </div>

          {comparisons.map((row, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 gap-4 hover:bg-white/[0.03] transition-colors"
            >
              <div className="md:col-span-3 font-mono text-xs font-bold text-white/70 uppercase">
                {row.dimension}
              </div>
              <div className="md:col-span-4 font-sans text-sm text-white/40">
                {row.traditional}
              </div>
              <div className="md:col-span-5 font-sans text-sm text-white font-medium">
                {row.scaleGame}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
