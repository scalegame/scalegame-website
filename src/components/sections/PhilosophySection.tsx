"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Flame, ShieldCheck, MousePointerClick, TrendingUp } from "lucide-react";
import { soundFx } from "../common/SoundController";

const PROGRESSION_STAGES = [
  {
    id: "reach",
    step: "01",
    title: "REACH",
    icon: Eye,
    subtitle: "Get your brand in front of the right audience.",
    description:
      "We build targeted campaigns that reach the people most relevant to your business. By combining audience strategy, creative content and paid media, we make your brand visible where your customers spend their time.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    growthAudience: "Precision demographic & behavioral targeting across Meta, Google & YouTube.",
    growthReach: "Multi-channel ad distribution & high-frequency video impression placement.",
    growthTrajectory: "Rapid brand visibility expansion, maximum impression volume & market awareness.",
  },
  {
    id: "engage",
    step: "02",
    title: "ENGAGE",
    icon: Flame,
    subtitle: "Turn attention into meaningful engagement.",
    description:
      "We capture audience interest with strategic creative, high-retention video content and compelling brand narrative. We turn passive views into active engagement and continuous interaction across key platforms.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    growthAudience: "Captivating Reels hooks, relatable stories & high-retention video formats.",
    growthReach: "Algorithmic feed domination & direct conversational WhatsApp response funnels.",
    growthTrajectory: "Compounding audience interaction, active comments, shares & community growth.",
  },
  {
    id: "convince",
    step: "03",
    title: "CONVINCE",
    icon: ShieldCheck,
    subtitle: "Build the confidence that moves people closer to choosing your brand.",
    description:
      "We build market authority and trust through strategic positioning, customer proof, and clear value propositions. We provide prospective buyers with the confidence and clarity required to choose your brand over competitors.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    growthAudience: "High-intent prospect retargeting & decision-maker engagement.",
    growthReach: "Authority editorial, customer case studies & unassailable social proof.",
    growthTrajectory: "Eliminated buyer hesitation, elevated brand trust & premium positioning.",
  },
  {
    id: "convert",
    step: "04",
    title: "CONVERT",
    icon: MousePointerClick,
    subtitle: "Turn intent into measurable action — enquiries, leads, and sales.",
    description:
      "We optimize conversion pathways through high-performing landing environments, targeted offer hooks, and direct lead capture systems. We convert prospect intent into qualified enquiries, consultations, and revenue.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    growthAudience: "Ready-to-buy prospects & high-conversion audience segments.",
    growthReach: "Frictionless landing environments, clear offer hooks & instant lead forms.",
    growthTrajectory: "Maximized conversion rates, qualified sales pipeline & lower acquisition costs.",
  },
  {
    id: "scale",
    step: "05",
    title: "SCALE",
    icon: TrendingUp,
    subtitle: "Use data and performance insights to grow what works.",
    description:
      "We analyze real-time performance data to identify top-performing creatives, channels, and campaigns. By reallocating budget and expanding proven funnels, we drive predictable, compounding business growth.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    growthAudience: "Lookalike audience expansion & scalable market expansion.",
    growthReach: "Data-driven ad budget reallocation & omnichannel media expansion.",
    growthTrajectory: "Predictable monthly revenue scaling & compounding return on ad spend (ROAS).",
  },
];

export const PhilosophySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#050505] text-white py-14 sm:py-20 px-6 sm:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Meta */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-white" />
          <span className="font-mono text-xs uppercase tracking-tactical text-white/50">
            [SECTION 02 // TRUSTED GROWTH METHODOLOGY]
          </span>
        </div>

        {/* Large Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 sm:mb-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.92] text-white">
              PROVEN STRATEGY.
              <br />
              <span className="text-white/40">BUILT ON TRANSPARENCY & TRUST.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed border-l border-white/20 pl-5">
              Trust is earned through real results, honest communication, and total transparency.
            </p>
            <p className="font-mono text-xs sm:text-sm font-bold text-white leading-relaxed border-l border-white/20 pl-5 mt-2.5">
              We work as your reliable marketing partner focused on growing your business.
            </p>
            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed border-l border-white/20 pl-5 mt-2.5">
              No hidden complexity or empty promises — just clear strategic execution, trusted audience targeting, and measurable growth you can depend on.
            </p>
          </div>
        </div>

        {/* The Progression Pipeline Title */}
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-3">
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
            OUR TRUSTED 5-STAGE GROWTH METHODOLOGY
          </span>
          <span className="font-mono text-xs text-white/80">
            CURRENT PHASE: {activeStage + 1} / {PROGRESSION_STAGES.length}
          </span>
        </div>

        {/* Interactive Visual Progression Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Stages Stepper */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 h-full">
            {PROGRESSION_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;

              return (
                <motion.div
                  key={stage.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStage(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="interactive"
                  className={`group relative p-6 sm:p-8 border transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-center ${
                    isActive
                      ? "bg-white/[0.06] border-white text-white"
                      : "bg-[#090909] border-white/10 text-white/50 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                        STAGE [{stage.step}]
                      </span>
                      <h3 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight">
                        {stage.title}
                      </h3>
                    </div>

                    <div
                      className={`w-10 h-10 flex items-center justify-center border transition-all ${
                        isActive
                          ? "border-white bg-white text-black"
                          : "border-white/20 text-white/50 group-hover:border-white group-hover:text-white"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <p className="mt-3 font-sans text-sm text-white/70 tracking-tight leading-relaxed">
                    {stage.subtitle}
                  </p>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Telemetry Inspector for Active Stage */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 h-full flex flex-col">
            <div className="p-8 sm:p-10 border border-white/20 bg-[#0c0c0c] relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                {/* Tactical Top Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                      STAGE OVERVIEW // {PROGRESSION_STAGES[activeStage].title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-white/40">PHASE 0{activeStage + 1}</span>
                </div>

                {/* Title & Stage Big Reveal */}
                <div className="space-y-4 mb-4">
                  <span className="font-mono text-5xl sm:text-6xl font-black text-white/10 block select-none">
                    0{activeStage + 1}
                  </span>

                  <h4 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                    {PROGRESSION_STAGES[activeStage].title}
                  </h4>

                  <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
                    {PROGRESSION_STAGES[activeStage].description}
                  </p>
                </div>

                {/* Growth-Wise Strategic Breakdown */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-white/40 uppercase font-bold shrink-0">🎯 AUDIENCE:</span>
                    <span className="text-white/80">{PROGRESSION_STAGES[activeStage].growthAudience}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-white/40 uppercase font-bold shrink-0">📡 REACH:</span>
                    <span className="text-white/80">{PROGRESSION_STAGES[activeStage].growthReach}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-white/40 uppercase font-bold shrink-0">📈 GROWTH:</span>
                    <span className="text-white font-bold">{PROGRESSION_STAGES[activeStage].growthTrajectory}</span>
                  </div>
                </div>
              </div>

              {/* Stage Strategic Asset */}
              <div className="relative h-56 sm:h-64 mt-6 w-full overflow-hidden border border-white/20 bg-black/80 group">
                {activeStage === 1 ? (
                  <div className="w-full h-full bg-[#050505] flex items-center justify-center p-3 sm:p-5 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />
                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-lg">
                      {/* Facebook Card */}
                      <div className="flex flex-col items-center gap-2 p-3 bg-black/90 border border-white/20 rounded-xl hover:border-blue-500/60 transition-all group/icon shadow-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2] group-hover/icon:scale-110 transition-transform">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                        <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">FACEBOOK</span>
                      </div>

                      {/* Instagram Card */}
                      <div className="flex flex-col items-center gap-2 p-3 bg-black/90 border border-white/20 rounded-xl hover:border-pink-500/60 transition-all group/icon shadow-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 border border-pink-500/40 flex items-center justify-center text-pink-500 group-hover/icon:scale-110 transition-transform">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">INSTAGRAM</span>
                      </div>

                      {/* YouTube Card */}
                      <div className="flex flex-col items-center gap-2 p-3 bg-black/90 border border-white/20 rounded-xl hover:border-red-500/60 transition-all group/icon shadow-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/40 flex items-center justify-center text-[#FF0000] group-hover/icon:scale-110 transition-transform">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                        <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">YOUTUBE</span>
                      </div>

                      {/* WhatsApp Card */}
                      <div className="flex flex-col items-center gap-2 p-3 bg-black/90 border border-white/20 rounded-xl hover:border-emerald-500/60 transition-all group/icon shadow-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover/icon:scale-110 transition-transform">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.129z"/>
                          </svg>
                        </div>
                        <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">WHATSAPP</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.img
                    key={PROGRESSION_STAGES[activeStage].id}
                    src={PROGRESSION_STAGES[activeStage].image}
                    alt={PROGRESSION_STAGES[activeStage].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/80 border border-white/20 text-[9px] font-mono uppercase tracking-widest text-white/80 flex items-center gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>PHASE 0{activeStage + 1} // {PROGRESSION_STAGES[activeStage].title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};






