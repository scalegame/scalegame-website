"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Sparkles, Rocket, Sliders, TrendingUp, CheckCircle2 } from "lucide-react";
import { soundFx } from "../common/SoundController";

const PROCESS_STEPS = [
  {
    code: "PHASE 01",
    name: "UNDERSTAND",
    icon: Search,
    headline: "We take the time to learn your business & goals deeply",
    action: "Understand your business & audience",
    description:
      "Every successful campaign begins with clear understanding. We get to know your brand values, target audience, and business objectives so we can build a marketing strategy tailored to your exact needs.",
    protocol: "BRAND & AUDIENCE ALIGNMENT",
  },
  {
    code: "PHASE 02",
    name: "RESEARCH",
    icon: BookOpen,
    headline: "We discover market insights & customer opportunities",
    action: "Extract customer preferences & insights",
    description:
      "We research customer preferences, trending topics, and industry insights to find the best ways to connect with your potential buyers and highlight what makes your business special.",
    protocol: "MARKET INSIGHTS & DISCOVERY",
  },
  {
    code: "PHASE 03",
    name: "CREATE",
    icon: Sparkles,
    headline: "We design engaging visuals & authentic brand stories",
    action: "Craft authentic ideas & content",
    description:
      "Our creative team produces high-quality visuals, video reels, and compelling copy that capture attention, build trust, and showcase your product or service in the best light.",
    protocol: "AUTHENTIC CREATIVE DESIGN",
  },
  {
    code: "PHASE 04",
    name: "LAUNCH",
    icon: Rocket,
    headline: "We deploy your campaigns smoothly across all channels",
    action: "Launch integrated campaigns",
    description:
      "We coordinate and launch your marketing campaigns across Meta, Google, social media, and landing environments, ensuring your message reaches the right audience at the right time.",
    protocol: "SMOOTH CAMPAIGN LAUNCH",
  },
  {
    code: "PHASE 05",
    name: "OPTIMIZE",
    icon: Sliders,
    headline: "We track performance & continuously improve results",
    action: "Measure response & refine",
    description:
      "Marketing is an ongoing process. We monitor campaign performance, listen to audience response, and refine our approach to ensure your budget is delivering maximum value.",
    protocol: "CONTINUOUS PERFORMANCE TUNING",
  },
  {
    code: "PHASE 06",
    name: "GROW",
    icon: TrendingUp,
    headline: "We scale what works best for long-term success",
    action: "Scale proven strategies",
    description:
      "As campaigns demonstrate strong results, we expand successful channels and strategies to help your business achieve steady, predictable, and scalable growth.",
    protocol: "SUSTAINABLE BUSINESS GROWTH",
  },
];

const OPERATING_LAWS = [
  "Understand Your Business & Goals",
  "Know Your Target Audience",
  "Craft Authentic Creative Ideas",
  "Launch Smooth Campaigns",
  "Track Real Performance Data",
  "Continuously Improve & Refine",
  "Scale What Works Best",
];

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="relative w-full bg-[#050505] text-white py-14 sm:py-20 px-6 sm:px-12 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Meta */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-white" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            [SECTION 05 // HOW WE WORK TOGETHER]
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 sm:mb-8">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-1.5">
              OUR COLLABORATION PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white">
              DEDICATED TO YOUR SUCCESS.
              <br />
              <span className="text-white/40">PARTNERING FOR REAL GROWTH.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed border-l border-white/20 pl-5">
              We work closely as a dedicated strategic partner for your business—focusing on your unique goals, creating compelling brand content, and helping you achieve steady, long-term growth with a positive, collaborative approach.
            </p>
          </div>
        </div>

        {/* The 6-Stage Process Marquee Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-white/10 scrollbar-none">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.name}
                onClick={() => {
                  soundFx.playClick();
                  setActiveStep(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="interactive"
                className={`flex items-center gap-2 px-4 py-2.5 border font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-all ${
                  isActive
                    ? "border-white bg-white text-black font-bold"
                    : "border-white/10 bg-black/40 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{step.name}</span>
                {idx < PROCESS_STEPS.length - 1 && <span className="opacity-30">→</span>}
              </button>
            );
          })}
        </div>

        {/* Active Stage Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          {/* Main Display Card */}
          <div className="lg:col-span-8 p-6 sm:p-10 border border-white/15 bg-[#090909] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs text-white/40 tracking-widest">
                  {PROCESS_STEPS[activeStep].code}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 px-2.5 py-0.5 border border-white/15 bg-white/5">
                  FOCUS // {PROCESS_STEPS[activeStep].protocol}
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-5xl sm:text-6xl font-black text-white/15 select-none">
                  0{activeStep + 1}
                </span>
                <h3 className="font-mono text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  {PROCESS_STEPS[activeStep].name}
                </h3>
              </div>

              <h4 className="font-sans text-lg sm:text-xl font-medium text-white/90 mb-4">
                {PROCESS_STEPS[activeStep].headline}
              </h4>

              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
                CORE FOCUS: <strong className="text-white font-bold">{PROCESS_STEPS[activeStep].action}</strong>
              </span>
              <span className="font-mono text-xs text-white/40">
                STEP {activeStep + 1} OF 6
              </span>
            </div>
          </div>

          {/* Operating Principles Sidebar */}
          <div className="lg:col-span-4 p-6 sm:p-8 border border-white/15 bg-[#090909] flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-4">
                OUR 7 WORKING PRINCIPLES
              </span>

              <div className="space-y-2">
                {OPERATING_LAWS.map((law, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2.5 border border-white/10 bg-black/40"
                  >
                    <span className="font-mono text-[10px] text-white/40 font-bold">0{i + 1}</span>
                    <span className="font-sans text-xs text-white/85">
                      {law}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block mb-1">
                OUR COMMITMENT
              </span>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                We are committed to clear communication, transparency, and delivering real value for your brand every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
