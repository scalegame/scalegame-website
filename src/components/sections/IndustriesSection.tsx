"use client";

import React from "react";
import { motion } from "framer-motion";

const INDUSTRIES_TICKER_ROW_1 = [
  "B2C CONSUMER BRANDS",
  "B2B ENTERPRISE",
  "B2B2C ECOSYSTEMS",
  "CAFES & RESTAURANTS",
  "HOSPITALS & CRMS",
  "SALONS & SPAS",
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
      className="relative w-full bg-[#050505] text-white py-14 sm:py-18 border-b border-white/10 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header Meta */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-white" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            [SECTION 07 // FULL-MARKET CAPABILITY]
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 sm:mb-8 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-1.5">
              UNIVERSAL MARKET ADAPTABILITY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white">
              BUILT FOR EVERY MARKET.
              <br />
              <span className="text-white/40">B2C, B2B & B2B2C.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed border-l border-white/20 pl-5">
              We do not restrict your brand to a single narrow box. From direct consumer brands to enterprise B2B ecosystems, human attention and digital growth follow clear principles that we adapt to win in any market.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite All-Markets Horizontal Scrolling Streams */}
      <div className="py-4 border-y border-white/10 bg-[#080808] flex flex-col gap-3 overflow-hidden">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
            className="flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest uppercase text-white/60 font-bold"
          >
            {[...INDUSTRIES_TICKER_ROW_1, ...INDUSTRIES_TICKER_ROW_1].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-white/20">///</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Reverse direction) */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
            className="flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest uppercase text-white/45"
          >
            {[...INDUSTRIES_TICKER_ROW_2, ...INDUSTRIES_TICKER_ROW_2].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-white/20">///</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clean Bottom Note */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-6">
        <p className="font-mono text-xs text-white/35 uppercase tracking-widest text-center">
          NO MATTER YOUR INDUSTRY, WE ADAPT OUR STRATEGY TO WIN IN YOUR EXACT SPACE.
        </p>
      </div>
    </section>
  );
};
