"use client";

import React from "react";
import {
  Eye,
  Flame,
  ShieldCheck,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";
import { soundFx } from "../common/SoundController";

interface ProgressionStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
}

const STAGES: ProgressionStage[] = [
  {
    step: "01",
    title: "REACH",
    subtitle: "Precision Demographic Targeting",
    description:
      "We reach your highest-intent audience through targeted media across Meta, Google, and YouTube.",
    tags: ["Likes & Shares", "Targeted Reach"],
    icon: Eye,
  },
  {
    step: "02",
    title: "ENGAGE",
    subtitle: "High-Retention Storytelling",
    description:
      "We turn passive views into active followers with short-form video reels and community engagement across social apps.",
    tags: ["Insta • FB • WhatsApp", "Community Growth"],
    icon: Flame,
  },
  {
    step: "03",
    title: "CONVINCE",
    subtitle: "Market Authority & Proof",
    description:
      "We build buyer confidence through strategic brand positioning, 5-star customer proof, and retargeting.",
    tags: ["Social Proof", "5-Star Authority"],
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "CONVERT",
    subtitle: "Frictionless Customer Capture",
    description:
      "We turn prospect intent into qualified buying customers with optimized landing pages and direct WhatsApp funnels.",
    tags: ["2,500+ Customers", "WhatsApp Funnels"],
    icon: MousePointerClick,
  },
  {
    step: "05",
    title: "SCALE",
    subtitle: "Predictable Compounding Growth",
    description:
      "We analyze real-time performance data to reallocate budget into proven funnels for sustainable business scaling.",
    tags: ["3.4x Multiplier", "+340% YoY Scale"],
    icon: TrendingUp,
  },
];

// 1. REACH: Likes, Comments, Shares, and Leads
const ReachVisual = () => (
  <div className="relative w-full h-full bg-[#080D1A] flex flex-col justify-center items-center p-3 overflow-hidden select-none">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-36 h-36 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />

    <div className="relative z-10 w-full grid grid-cols-2 gap-1.5">
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15">
        <span className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-[10px]">❤️</span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-white leading-none">24.5K</span>
          <span className="text-[8px] font-mono text-white/50 uppercase leading-none mt-0.5">Likes</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15">
        <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">💬</span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-white leading-none">3.8K</span>
          <span className="text-[8px] font-mono text-white/50 uppercase leading-none mt-0.5">Comments</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15">
        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">↗</span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-white leading-none">6.2K</span>
          <span className="text-[8px] font-mono text-white/50 uppercase leading-none mt-0.5">Shares</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40">
        <span className="w-4 h-4 rounded-full bg-emerald-400 text-zinc-950 font-bold flex items-center justify-center text-[9px]">🎯</span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-emerald-300 leading-none">1,420+</span>
          <span className="text-[8px] font-mono text-emerald-200/70 uppercase leading-none mt-0.5">Leads</span>
        </div>
      </div>
    </div>
  </div>
);

// 2. ENGAGE: Instagram, Facebook, WhatsApp, and YouTube App Logos
const EngageVisual = () => (
  <div className="relative w-full h-full bg-[#0D0F18] flex flex-col justify-center items-center p-3 overflow-hidden select-none">
    <div className="absolute inset-0 bg-tactical-grid opacity-20" />
    <div className="absolute w-36 h-36 rounded-full bg-purple-500/15 blur-2xl pointer-events-none" />

    <div className="relative z-10 flex items-center justify-center gap-2.5">
      {/* Instagram */}
      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[1.5px] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
        <div className="w-full h-full rounded-[10px] flex items-center justify-center bg-black/20">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
      </div>

      {/* Facebook */}
      <div className="w-9 h-9 rounded-xl bg-[#1877F2] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </div>

      {/* WhatsApp */}
      <div className="w-9 h-9 rounded-xl bg-[#25D366] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </div>

      {/* YouTube */}
      <div className="w-9 h-9 rounded-xl bg-[#FF0000] shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>
    </div>
    <div className="relative z-10 mt-2 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-[9px] font-mono text-white/70 uppercase tracking-wider">
      Viral Reels • Ads • High Dwell Time
    </div>
  </div>
);

// 3. CONVINCE: 5-Star Rating, Social Proof & Trust Score
const ConvinceVisual = () => (
  <div className="relative w-full h-full bg-[#0D121F] flex flex-col justify-center items-center p-3 overflow-hidden select-none">
    <div className="absolute inset-0 bg-tactical-grid opacity-20" />
    <div className="absolute w-36 h-36 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center space-y-1.5">
      <div className="flex items-center gap-1 text-amber-400 text-sm">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-[9px] font-bold uppercase tracking-wider">
        <span>4.9 / 5.0 VERIFIED RATING</span>
      </div>
      <span className="font-mono text-[9px] text-white/60 uppercase tracking-widest">
        Case Studies &amp; Buyer Social Proof
      </span>
    </div>
  </div>
);

// 4. CONVERT: 2D People / Many Customers Converted
const ConvertVisual = () => (
  <div className="relative w-full h-full bg-[#061814] flex flex-col justify-center items-center p-3 overflow-hidden select-none">
    <div className="absolute inset-0 bg-tactical-grid opacity-20" />
    <div className="absolute w-36 h-36 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none" />

    {/* Overlapping 2D People / Avatars Collective */}
    <div className="relative z-10 flex items-center -space-x-2 mb-2">
      <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-[#061814] flex items-center justify-center text-white text-[11px] font-bold shadow-xs">
        👨‍💼
      </div>
      <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#061814] flex items-center justify-center text-white text-[11px] font-bold shadow-xs">
        👩‍💻
      </div>
      <div className="w-7 h-7 rounded-full bg-amber-500 border-2 border-[#061814] flex items-center justify-center text-white text-[11px] font-bold shadow-xs">
        👨‍🦱
      </div>
      <div className="w-7 h-7 rounded-full bg-rose-500 border-2 border-[#061814] flex items-center justify-center text-white text-[11px] font-bold shadow-xs">
        👩‍💼
      </div>
      <div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-[#061814] flex items-center justify-center text-white text-[11px] font-bold shadow-xs">
        🧑‍🤝‍🧑
      </div>
      <div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-[#061814] flex items-center justify-center text-emerald-400 font-mono text-[9px] font-bold shadow-xs">
        +2.5K
      </div>
    </div>

    <div className="relative z-10 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span>2,500+ ACTIVE BUYERS CONVERTED</span>
    </div>
  </div>
);

// 5. SCALE: Upward Growth Bars & Compounding Multiplier
const ScaleVisual = () => (
  <div className="relative w-full h-full bg-[#080E1E] flex flex-col justify-center items-center p-3 overflow-hidden select-none">
    <div className="absolute inset-0 bg-tactical-grid opacity-20" />
    <div className="absolute w-36 h-36 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />

    <div className="relative z-10 w-full flex items-end justify-center gap-2 mb-1.5 h-9">
      <div className="w-2.5 h-3 rounded-t bg-blue-500/40" />
      <div className="w-2.5 h-4.5 rounded-t bg-blue-500/60" />
      <div className="w-2.5 h-6 rounded-t bg-emerald-500/70" />
      <div className="w-2.5 h-7.5 rounded-t bg-emerald-500/90" />
      <div className="w-2.5 h-9 rounded-t bg-emerald-400 shadow-sm shadow-emerald-400/50" />
    </div>

    <div className="relative z-10 flex items-center gap-2">
      <span className="font-mono text-xs font-black text-white tracking-tight">3.4X MULTIPLIER</span>
      <span className="font-mono text-[9px] text-emerald-400 font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-400/30">
        +340% YoY
      </span>
    </div>
  </div>
);

const renderStageGraphic = (step: string) => {
  switch (step) {
    case "01":
      return <ReachVisual />;
    case "02":
      return <EngageVisual />;
    case "03":
      return <ConvinceVisual />;
    case "04":
      return <ConvertVisual />;
    case "05":
      return <ScaleVisual />;
    default:
      return null;
  }
};

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#FAFAFA] text-zinc-900 py-8 sm:py-12 border-b border-zinc-200/80 overflow-hidden select-none"
    >
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 mb-5 sm:mb-6">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 mb-2.5 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              GROWTH METHODOLOGY
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-[1.1]">
                5-STAGE FRAMEWORK.
                <br />
                <span className="text-zinc-400">FROM ATTENTION TO SCALE.</span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md leading-relaxed border-l-2 border-zinc-300 pl-3.5 sm:pl-4 font-normal">
              A transparent, disciplined 5-stage progression system designed to transform passive audience attention into predictable, compounding revenue.
            </p>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Horizontal Track (Pause on Hover) */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Subtle Edge Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

        <div className="marquee-track flex gap-4 pl-6">
          {[...STAGES, ...STAGES].map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={`${stage.step}-${idx}`}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="interactive"
                className="group relative w-[280px] sm:w-[320px] shrink-0 flex flex-col justify-between rounded-2xl bg-white border border-zinc-200/90 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-zinc-400 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Visual Graphics Frame */}
                <div className="relative w-full h-28 sm:h-32 rounded-xl overflow-hidden mb-3 border border-zinc-200/80 bg-zinc-900">
                  {renderStageGraphic(stage.step)}

                  {/* Top-Left Stage Number Pill */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-white/80 shadow-2xs font-mono text-[10px] font-bold text-zinc-900 tracking-wider z-20">
                    STAGE {stage.step}
                  </div>

                  {/* Top-Right Monochrome Line Icon */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-white/95 backdrop-blur-md border border-white/80 flex items-center justify-center text-zinc-900 shadow-2xs group-hover:scale-110 transition-transform z-20">
                    <Icon size={13} strokeWidth={1.8} />
                  </div>

                  {/* Bottom Deliverable Mini Tag */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 overflow-hidden z-20">
                    {stage.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 rounded bg-black/65 backdrop-blur-md text-white font-mono text-[9px] tracking-wider uppercase font-medium border border-white/10 truncate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stage Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold tracking-tight text-zinc-950 uppercase">
                      {stage.title}
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="font-mono text-[10px] text-zinc-400 font-semibold tracking-wider">
                      PHASE 0{stage.step}
                    </span>
                  </div>

                  <h3 className="font-sans text-xs font-semibold text-zinc-800 leading-snug">
                    {stage.subtitle}
                  </h3>

                  <p className="font-sans text-xs text-zinc-500 leading-relaxed font-normal mt-1.5 line-clamp-3">
                    {stage.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>STEP {stage.step} OF 05</span>
                  <span className="text-zinc-900 font-bold group-hover:translate-x-0.5 transition-transform">
                    NEXT →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
