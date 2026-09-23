"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROCESS_STEPS = [
  {
    code: "PHASE 01",
    name: "UNDERSTAND",
    headline: "We audit your business model and target buyers.",
    action: "HONEST BUSINESS & AUDIENCE AUDIT",
    description:
      "We study your margins, customer feedback, and baseline reality before spending a single rupee.",
    protocol: "AUDIENCE & MARGIN BASELINE",
  },
  {
    code: "PHASE 02",
    name: "RESEARCH",
    headline: "We uncover real buyer intent and competitor blind spots.",
    action: "BUYER INTENT & MARKET DEMAND",
    description:
      "We track search queries and purchase triggers to position your brand where demand is strongest.",
    protocol: "MARKET INTELLIGENCE & DEMAND",
  },
  {
    code: "PHASE 03",
    name: "CREATE",
    headline: "We build clear, scroll-stopping creative assets.",
    action: "HIGH-CONVERTING CREATIVE OFFERS",
    description:
      "Punchy video hooks, persuasive copy, and distinct visuals designed to earn instant buyer trust.",
    protocol: "AUTHENTIC CREATIVE ARCHITECTURE",
  },
  {
    code: "PHASE 04",
    name: "LAUNCH",
    headline: "We roll out live campaigns with open dashboards.",
    action: "MULTI-CHANNEL CAMPAIGN ROLLOUT",
    description:
      "Synchronized launch across Meta, Google, and your landing pages with 24/7 tracking access.",
    protocol: "SYSTEMATIC CAMPAIGN ACTIVATION",
  },
  {
    code: "PHASE 05",
    name: "OPTIMIZE",
    headline: "We review real data and cut wasted ad spend.",
    action: "DATA REFINEMENT & COST REDUCTION",
    description:
      "We monitor performance daily, double down on winning audiences, and lower acquisition costs.",
    protocol: "CONVERSION AUDITING & TUNING",
  },
  {
    code: "PHASE 06",
    name: "GROW",
    headline: "We scale proven channels for steady profit.",
    action: "SUSTAINABLE REVENUE EXPANSION",
    description:
      "Once returns are validated, we increase budgets responsibly to expand your market share.",
    protocol: "CAPITAL SCALING & MARKET REACH",
  },
];

const TOTAL_TRACK_TICKS = 51;

export const ProcessSection: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState(0);

  return (
    <section
      id="process"
      className="w-full bg-[#050505] text-white py-20 sm:py-28 px-6 sm:px-12 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-white" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              [SECTION 05 // HOW WE WORK TOGETHER]
            </span>
          </div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-white/40 block mb-2">
            TRANSPARENT PARTNERSHIP & MARKET EXECUTION
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
            COMPLETE TRANSPARENCY.
            <br />
            <span className="text-white/35">GROUNDED IN REAL MARKET UNDERSTANDING.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Total visibility into every test and rupee. We uncover what your buyers actually want, deploy proven creative, and scale your brand with complete honesty.
          </p>
        </div>

        {/* Railway Train-Track Progress Indicator */}
        <div className="overflow-x-auto pb-6 pt-2 scrollbar-none">
          <div className="min-w-[700px] md:min-w-0">
            {/* The Train Track (Dual Rails + Crosstie Ticks) */}
            <div className="relative w-full h-8 flex items-center">
              {/* Dual Rail Tracks (Top & Bottom) */}
              <div className="absolute top-1 left-0 right-0 h-[1px] bg-white/20" />
              <div className="absolute bottom-1 left-0 right-0 h-[1px] bg-white/20" />

              {/* Crosstie Ticks (Like Railroad Ties) */}
              <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none">
                {Array.from({ length: TOTAL_TRACK_TICKS }).map((_, i) => {
                  const tickProgress = i / (TOTAL_TRACK_TICKS - 1);
                  const activeProgress = hoveredStep / (PROCESS_STEPS.length - 1);
                  const isLit = tickProgress <= activeProgress + 0.005;

                  return (
                    <div
                      key={i}
                      className={`w-[2px] h-4 transition-colors duration-200 ${
                        isLit ? "bg-white" : "bg-white/15"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Active Lit Rails (Fill along track) */}
              <motion.div
                className="absolute top-1 left-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                initial={false}
                animate={{
                  width: `${(hoveredStep / (PROCESS_STEPS.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bottom-1 left-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                initial={false}
                animate={{
                  width: `${(hoveredStep / (PROCESS_STEPS.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Station Milestone Markers along the Track */}
              <div className="relative w-full flex justify-between items-center z-10 px-0.5">
                {PROCESS_STEPS.map((step, idx) => {
                  const isCurrent = hoveredStep === idx;
                  const isPast = idx <= hoveredStep;

                  return (
                    <button
                      key={step.name}
                      onMouseEnter={() => setHoveredStep(idx)}
                      onClick={() => setHoveredStep(idx)}
                      aria-label={`Select ${step.name}`}
                      className="flex flex-col items-center group cursor-pointer focus:outline-none"
                    >
                      {/* Station Node Marker */}
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-all duration-200 ${
                          isCurrent
                            ? "bg-white border-white scale-125 shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                            : isPast
                            ? "bg-white/90 border-white text-black"
                            : "bg-[#050505] border-white/40 group-hover:border-white group-hover:scale-110"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCurrent
                              ? "bg-black"
                              : isPast
                              ? "bg-black"
                              : "bg-white/40 group-hover:bg-white"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Station Headings Only (Directly under each milestone) */}
            <div className="relative w-full flex justify-between items-start pt-4">
              {PROCESS_STEPS.map((step, idx) => {
                const isCurrent = hoveredStep === idx;
                const isPast = idx <= hoveredStep;

                return (
                  <button
                    key={step.name}
                    onMouseEnter={() => setHoveredStep(idx)}
                    onClick={() => setHoveredStep(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none w-24 sm:w-32"
                  >
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors mb-1 ${
                        isCurrent
                          ? "text-white font-bold"
                          : isPast
                          ? "text-white/70"
                          : "text-white/30"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
                        isCurrent
                          ? "text-white"
                          : isPast
                          ? "text-white/80"
                          : "text-white/40 group-hover:text-white"
                      }`}
                    >
                      {step.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hover Details Reveal */}
        <div className="min-h-[160px] pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredStep}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 max-w-2xl"
            >
              <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-white/40 uppercase tracking-widest">
                <span className="text-white font-bold">{PROCESS_STEPS[hoveredStep].code}</span>
                <span>//</span>
                <span>FOCUS // {PROCESS_STEPS[hoveredStep].protocol}</span>
              </div>

              <h3 className="font-mono text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {PROCESS_STEPS[hoveredStep].name}
              </h3>

              <p className="font-sans text-lg sm:text-xl text-white font-medium leading-snug">
                {PROCESS_STEPS[hoveredStep].headline}
              </p>

              <p className="font-sans text-sm sm:text-base text-white/65 leading-relaxed">
                {PROCESS_STEPS[hoveredStep].description}
              </p>

              <div className="font-mono text-xs sm:text-sm text-white/40 uppercase tracking-wider pt-1">
                CORE FOCUS:{" "}
                <span className="text-white font-semibold">
                  {PROCESS_STEPS[hoveredStep].action}
                </span>
                <span className="mx-3 text-white/20">•</span>
                STEP {hoveredStep + 1} OF 6
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
