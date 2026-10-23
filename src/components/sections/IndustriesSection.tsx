"use client";

import React from "react";
import { motion } from "framer-motion";

const INDUSTRIES_TICKER_ROW_1 = [
  "B2C CONSUMER BRANDS",
  "B2B ENTERPRISE",
  "B2B2C ECOSYSTEMS",
  "HOSPITALITY & LUXURY DINING",
  "HOSPITALS & HEALTHCARE",
  "FINTECH & FINANCIAL SERVICES",
  "ARCHITECTURE & INTERIORS",
  "TECH & B2B SAAS",
];

const INDUSTRIES_TICKER_ROW_2 = [
  "D2C & E-COMMERCE",
  "FASHION & APPAREL",
  "REAL ESTATE & LUXURY",
  "AUTOMOTIVE & MOBILITY",
  "EDUCATION & ACADEMIES",
  "PERSONAL BRANDS & FOUNDERS",
  "FILM & ENTERTAINMENT",
  "FOOD & BEVERAGE FMCG",
];

export const IndustriesSection: React.FC = () => {
  return (
    <section
      id="industries"
      className="relative w-full bg-[#F8FAFC] text-zinc-900 py-16 sm:py-24 border-b border-zinc-200/80 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header Meta */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
            MARKET ADAPTABILITY
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 sm:mb-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2 font-semibold">
              UNIVERSAL EXECUTION CAPABILITY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-zinc-950">
              BUILT FOR EVERY MARKET.
              <br />
              <span className="text-zinc-400">B2C, B2B & B2B2C.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed border-l-2 border-zinc-300 pl-4 font-normal">
              We do not restrict your brand to a single narrow box. From direct consumer brands to enterprise B2B ecosystems across Karaikudi, Chennai, and Tamil Nadu, human attention and digital growth follow clear principles that we adapt to win in any market.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Streams */}
      <div className="py-4 border-y border-zinc-200/80 bg-white flex flex-col gap-3.5 overflow-hidden shadow-xs">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
            className="flex items-center gap-4 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-800 font-bold"
          >
            {[...INDUSTRIES_TICKER_ROW_1, ...INDUSTRIES_TICKER_ROW_1].map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200/80 text-zinc-800 shadow-2xs hover:border-zinc-400 transition-all flex items-center gap-3 shrink-0"
              >
                <span>{item}</span>
                <span className="text-zinc-300">•</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Reverse direction) */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
            className="flex items-center gap-4 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-600 font-semibold"
          >
            {[...INDUSTRIES_TICKER_ROW_2, ...INDUSTRIES_TICKER_ROW_2].map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-zinc-50/70 border border-zinc-200/70 text-zinc-700 shadow-2xs hover:border-zinc-400 transition-all flex items-center gap-3 shrink-0"
              >
                <span>{item}</span>
                <span className="text-zinc-300">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clean Bottom Note */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-8">
        <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest text-center font-medium">
          NO MATTER YOUR INDUSTRY, WE ADAPT OUR STRATEGY TO WIN IN YOUR EXACT SPACE.
        </p>
      </div>
    </section>
  );
};
