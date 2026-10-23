"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Flame,
  ShieldCheck,
  MousePointerClick,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { soundFx } from "../common/SoundController";

const PROGRESSION_STAGES = [
  {
    id: "reach",
    step: "01",
    title: "REACH",
    icon: Eye,
    subtitle: "Get your brand in front of the right audience.",
    description:
      "We build targeted campaigns that reach the people most relevant to your business. By combining audience strategy, creative content, and paid media, we make your brand visible where your customers spend their time.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    tags: [
      "Precision Demographic Targeting",
      "Meta, Google & YouTube Ads",
      "High-Frequency Brand Visibility",
    ],
  },
  {
    id: "engage",
    step: "02",
    title: "ENGAGE",
    icon: Flame,
    subtitle: "Turn attention into meaningful engagement.",
    description:
      "We capture audience interest with strategic creative, high-retention video content, and compelling brand storytelling. We turn passive views into active engagement and continuous interaction across key social channels.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    tags: [
      "Short-form Video Reels",
      "Relatable Brand Storytelling",
      "Community Growth & Interaction",
    ],
    socialChannels: [
      {
        name: "Instagram",
        color: "#E1306C",
        bgColor: "#FFF1F5",
        svg: (
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        ),
      },
      {
        name: "Facebook",
        color: "#1877F2",
        bgColor: "#EEF4FE",
        svg: (
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        ),
      },
      {
        name: "YouTube",
        color: "#FF0000",
        bgColor: "#FEF2F2",
        svg: (
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        ),
      },
      {
        name: "WhatsApp",
        color: "#25D366",
        bgColor: "#F0FDF4",
        svg: (
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.129z" />
        ),
      },
    ],
  },
  {
    id: "convince",
    step: "03",
    title: "CONVINCE",
    icon: ShieldCheck,
    subtitle: "Build the confidence that moves buyers to choose your brand.",
    description:
      "We build market authority and trust through strategic positioning, customer proof, and clear value propositions. We provide prospective buyers with the confidence and clarity required to choose your brand over competitors.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    tags: [
      "Authority Positioning",
      "Customer Proof & Case Studies",
      "High-Intent Retargeting",
    ],
  },
  {
    id: "convert",
    step: "04",
    title: "CONVERT",
    icon: MousePointerClick,
    subtitle: "Turn intent into measurable action — leads, inquiries, and sales.",
    description:
      "We optimize conversion pathways through high-performing landing environments, targeted offer hooks, and direct lead capture systems. We convert prospect intent into qualified inquiries, consultations, and revenue.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: [
      "Frictionless Landing Pages",
      "Direct WhatsApp Lead Funnels",
      "High-Value Conversions",
    ],
  },
  {
    id: "scale",
    step: "05",
    title: "SCALE",
    icon: TrendingUp,
    subtitle: "Use data and performance insights to compound what works.",
    description:
      "We analyze real-time performance data to identify top-performing creatives, channels, and campaigns. By reallocating budget and expanding proven funnels, we drive predictable, compounding business growth.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    tags: [
      "Data-Driven Budget Allocation",
      "Audience Expansion",
      "Predictable Revenue Scaling",
    ],
  },
];

export const PhilosophySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const current = PROGRESSION_STAGES[activeStage];
  const Icon = current.icon;

  const handleNext = () => {
    soundFx.playClick();
    setActiveStage((prev) => (prev + 1) % PROGRESSION_STAGES.length);
  };

  const handlePrev = () => {
    soundFx.playClick();
    setActiveStage((prev) =>
      prev === 0 ? PROGRESSION_STAGES.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#FAFAFA] text-zinc-900 py-20 sm:py-28 px-6 sm:px-12 border-b border-zinc-200/80 overflow-hidden"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-14">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              GROWTH METHODOLOGY
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                PROVEN STRATEGY.
                <br />
                <span className="text-zinc-400">BUILT ON TRANSPARENCY & TRUST.</span>
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed border-l-2 border-zinc-300 pl-4">
              Trust is earned through honest communication and measurable growth. Our 5-stage methodology transforms attention into sustainable revenue.
            </p>
          </div>
        </div>

        {/* Minimal Animated Horizontal Timeline / Tabs */}
        <div className="border border-zinc-200/90 bg-white/90 backdrop-blur-md rounded-2xl p-1.5 sm:p-2 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
            {PROGRESSION_STAGES.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isActive = activeStage === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStage(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="interactive"
                  className={`relative flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 sm:py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-zinc-950 rounded-xl shadow-md shadow-zinc-950/20"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <StageIcon
                      size={14}
                      className={isActive ? "text-white" : "text-zinc-500"}
                    />
                    <span className={`text-[10px] sm:text-xs ${isActive ? "text-zinc-300" : "text-zinc-400"}`}>
                      0{idx + 1}
                    </span>
                    <span>{stage.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimal Animated Showcase Card */}
        <div className="relative border border-zinc-200/90 bg-white rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-xl shadow-zinc-900/[0.04]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Minimal Typography & Stage Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  {/* Stage Number & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase font-semibold">
                      STAGE 0{activeStage + 1} OF 05
                    </span>
                    <span className="text-zinc-300">•</span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 font-mono text-xs text-zinc-700 font-semibold shadow-xs">
                      <Icon size={12} className="text-zinc-900" />
                      <span>{current.title}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 mb-3">
                    {current.subtitle}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Minimal Key Deliverable Tags */}
                <div className="pt-4 border-t border-zinc-200/80">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
                    KEY EXECUTION FOCUS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 font-mono text-xs font-medium tracking-wide shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stepper Controls */}
                <div className="pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-full border border-zinc-200 hover:border-zinc-950 text-zinc-600 hover:text-zinc-950 transition-all bg-white hover:bg-zinc-50 shadow-xs"
                      aria-label="Previous Stage"
                      data-cursor="interactive"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-full border border-zinc-200 hover:border-zinc-950 text-zinc-600 hover:text-zinc-950 transition-all bg-white hover:bg-zinc-50 shadow-xs"
                      aria-label="Next Stage"
                      data-cursor="interactive"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <span className="font-mono text-xs text-zinc-400 ml-2 font-medium">
                      {activeStage + 1} / {PROGRESSION_STAGES.length}
                    </span>
                  </div>

                  <button
                    onClick={handleNext}
                    className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-800 hover:text-zinc-950 uppercase tracking-wider font-bold transition-colors"
                  >
                    <span>
                      {activeStage === PROGRESSION_STAGES.length - 1
                        ? "RESTART CYCLE"
                        : `NEXT: ${PROGRESSION_STAGES[activeStage + 1].title}`}
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Stage Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-lg group">
                  {/* Special Card for ENGAGE: Social Media Channels Showcase */}
                  {current.socialChannels ? (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 flex flex-col justify-center items-center p-6 relative">
                      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />
                      <div className="grid grid-cols-2 gap-3.5 w-full max-w-sm relative z-10">
                        {current.socialChannels.map((channel) => (
                          <div
                            key={channel.name}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md transition-all group/item"
                          >
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-transform group-hover/item:scale-110"
                              style={{
                                color: channel.color,
                                backgroundColor: channel.bgColor,
                                borderColor: `${channel.color}30`,
                              }}
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                {channel.svg}
                              </svg>
                            </div>
                            <span className="font-mono text-xs font-bold text-zinc-800 tracking-wide">
                              {channel.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <motion.img
                      key={current.id}
                      src={current.image}
                      alt={`Scale Game — ${current.title}`}
                      initial={{ scale: 1.08, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.04] group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  {/* Minimal Floating Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200 text-xs font-mono uppercase tracking-wider text-zinc-900 font-bold flex items-center gap-2 z-20 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>PHASE 0{activeStage + 1} • {current.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
