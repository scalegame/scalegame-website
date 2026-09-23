"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, BarChart2, TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { soundFx } from "../common/SoundController";

interface ScoreMetric {
  id: string;
  name: string;
  category: string;
  value: string;
  subValue: string;
  delta: string;
  description: string;
  graphBars: number[];
}

const METRICS: ScoreMetric[] = [
  {
    id: "reach",
    name: "REACH",
    category: "AUDIENCE SCALE",
    value: "148M+",
    subValue: "148,420,000",
    delta: "+340% YoY",
    description: "Total cross-platform verified brand impressions engineered across digital touchpoints.",
    graphBars: [45, 60, 52, 78, 90, 84, 100, 115, 130, 148],
  },
  {
    id: "engagement",
    name: "ENGAGEMENT",
    category: "CULTURAL ATTENTION",
    value: "4.8X",
    subValue: "4.82x Multiplier",
    delta: "VS 0.9% BENCHMARK",
    description: "Attention retention factor and dwell time relative to traditional social media benchmarks.",
    graphBars: [20, 25, 30, 38, 42, 50, 62, 70, 85, 96],
  },
  {
    id: "leads",
    name: "LEADS",
    category: "PIPELINE GENERATION",
    value: "320K+",
    subValue: "324,500 Qualified",
    delta: "91% ACCEPT RATE",
    description: "High-ticket qualified inbound sales leads and verified buyer inquiries captured.",
    graphBars: [30, 42, 55, 68, 75, 88, 95, 110, 125, 140],
  },
  {
    id: "conversions",
    name: "CONVERSIONS",
    category: "FUNNEL VELOCITY",
    value: "+186%",
    subValue: "Average CRO Lift",
    delta: "+186% FUNNEL BOOST",
    description: "Average conversion rate lift achieved across engineered landing environments and checkouts.",
    graphBars: [35, 40, 48, 62, 70, 78, 92, 105, 120, 138],
  },
  {
    id: "growth",
    name: "GROWTH",
    category: "REVENUE ACCELERATION",
    value: "3.4X",
    subValue: "3.4x Annual Scale",
    delta: "12-MONTH HORIZON",
    description: "Average annual enterprise and D2C client revenue expansion multiplier.",
    graphBars: [25, 35, 48, 55, 70, 82, 95, 110, 130, 150],
  },
];

export const ScoreboardSection: React.FC = () => {
  const [selectedMetricId, setSelectedMetricId] = useState("growth");
  const currentMetric = METRICS.find((m) => m.id === selectedMetricId) || METRICS[0];

  return (
    <section
      id="scoreboard"
      className="relative w-full bg-[#050505] text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-white" />
            <span className="font-mono text-xs uppercase tracking-tactical text-white/50">
              [SECTION 07 // REAL-TIME SCOREBOARD]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-white/60 bg-white/5 px-2.5 py-1 border border-white/10">
            <Activity size={12} className="text-white animate-pulse" />
            <span>CAMPAIGN PERFORMANCE BENCHMARKS</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
              PROVEN RESULTS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              THE SCOREBOARD.
              <br />
              <span className="text-white/40">NUMBERS DON&apos;T LIE.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-white/70 leading-relaxed uppercase tracking-wider">
              Marketing without strict attribution is guesswork. We track every impression, lead, conversion, and dollar of revenue on an unyielding scoreboard.
            </p>
          </div>
        </div>

        {/* Top 5 Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {METRICS.map((metric) => {
            const isSelected = selectedMetricId === metric.id;

            return (
              <button
                key={metric.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedMetricId(metric.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="interactive"
                className={`p-6 border text-left transition-all duration-300 flex flex-col justify-between min-h-[180px] ${
                  isSelected
                    ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    : "bg-[#090909] text-white/70 border-white/10 hover:border-white/40 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-[9px] uppercase tracking-widest ${
                      isSelected ? "text-black/60 font-bold" : "text-white/40"
                    }`}
                  >
                    {metric.category}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-black" : "bg-white/40"
                    }`}
                  />
                </div>

                <div>
                  <span
                    className={`font-mono text-3xl sm:text-4xl font-black tracking-tight block ${
                      isSelected ? "text-black" : "text-white"
                    }`}
                  >
                    {metric.value}
                  </span>
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider block mt-1 ${
                      isSelected ? "text-black/80" : "text-white/80"
                    }`}
                  >
                    {metric.name}
                  </span>
                </div>

                <div
                  className={`font-mono text-[9px] uppercase tracking-wider pt-3 border-t ${
                    isSelected ? "border-black/15 text-black/70" : "border-white/10 text-white/40"
                  }`}
                >
                  {metric.delta}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Telemetry Display for Selected Metric */}
        <div className="p-8 sm:p-12 border border-white/20 bg-[#0c0c0c] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Metric Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/40 tracking-widest">
                  METRIC: {currentMetric.id.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 border border-white/20 text-white/60 bg-white/5">
                  STATUS: VERIFIED
                </span>
              </div>

              <h3 className="font-mono text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                {currentMetric.name}
              </h3>

              <div className="text-3xl sm:text-4xl font-mono font-bold text-white/90">
                {currentMetric.subValue}
              </div>

              <p className="font-sans text-base text-white/70 leading-relaxed">
                {currentMetric.description}
              </p>

              <div className="pt-4 border-t border-white/10 font-mono text-xs text-white/40">
                DISCLAIMER: Displayed metric values reflect aggregate campaign performance samples and industry benchmark projections.
              </div>
            </div>

            {/* Right Column: Visual Telemetry Bar Graph */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 bg-black/60 border border-white/10 min-h-[260px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  HISTORICAL SCALING TRAJECTORY (10 PERIOD WINDOW)
                </span>
                <span className="font-mono text-[10px] text-white/80">
                  PEAK: {currentMetric.value}
                </span>
              </div>

              {/* Dynamic Bar Chart */}
              <div className="flex items-end justify-between gap-2 h-44 pt-4">
                {currentMetric.graphBars.map((val, idx) => {
                  const maxVal = Math.max(...currentMetric.graphBars);
                  const heightPercent = Math.round((val / maxVal) * 100);
                  const isLatest = idx === currentMetric.graphBars.length - 1;

                  return (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center gap-2 h-full justify-end group"
                    >
                      <span className="font-mono text-[8px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        {val}
                      </span>
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className={`w-full transition-all duration-500 ${
                          isLatest
                            ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                            : "bg-white/25 group-hover:bg-white/60"
                        }`}
                      />
                      <span className="font-mono text-[8px] text-white/40">
                        T{idx + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
