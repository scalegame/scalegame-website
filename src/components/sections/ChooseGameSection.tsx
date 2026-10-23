"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { soundFx } from "../common/SoundController";
import { MagneticButton } from "../common/MagneticButton";

interface ChooseGameSectionProps {
  onSelectObjective: (goal: string) => void;
}

const GOALS = [
  {
    id: "awareness",
    tag: "BRAND AWARENESS",
    title: "BUILD BRAND AWARENESS",
    subtitle: "Help people get to know and trust your brand",
    description:
      "We introduce your business to target customers through clear branding, clean visuals, and targeted ads so people recognize and trust your brand.",
    deliverables: [
      { tag: "01", name: "Logo & Brand Identity" },
      { tag: "02", name: "Ad Visuals & Creatives" },
      { tag: "03", name: "Brand Awareness Ads" },
    ],
    expectedOutcome: "More people know, remember, and trust your brand.",
    timeline: "30–60 DAYS",
  },
  {
    id: "reach",
    tag: "MORE VISIBILITY",
    title: "REACH MORE PEOPLE",
    subtitle: "Show your business to thousands of new customers",
    description:
      "We run targeted ads and create engaging short videos so your business reaches a much larger audience every day.",
    deliverables: [
      { tag: "01", name: "Short Video Reels" },
      { tag: "02", name: "Meta & Google Reach Ads" },
      { tag: "03", name: "Audience Targeting Setup" },
    ],
    expectedOutcome: "Higher view count and more people discovering your business.",
    timeline: "14–30 DAYS",
  },
  {
    id: "social",
    tag: "SOCIAL GROWTH",
    title: "GROW MY SOCIAL MEDIA",
    subtitle: "Get real, active followers who care about your business",
    description:
      "We create and post regular, high-quality content on your social channels to help you grow a real audience.",
    deliverables: [
      { tag: "01", name: "Instagram & Facebook Growth" },
      { tag: "02", name: "Post & Reel Creation" },
      { tag: "03", name: "Monthly Content Planning" },
    ],
    expectedOutcome: "Steady follower growth and better page visibility.",
    timeline: "30–90 DAYS",
  },
  {
    id: "engagement",
    tag: "MORE INTERACTION",
    title: "INCREASE ENGAGEMENT",
    subtitle: "Get more likes, comments, shares, and messages",
    description:
      "We create interactive posts and reels that encourage your audience to comment, ask questions, and message your business.",
    deliverables: [
      { tag: "01", name: "Engaging Post Guides & Reels" },
      { tag: "02", name: "Interactive Story & Post Ideas" },
      { tag: "03", name: "Community Reply Strategy" },
    ],
    expectedOutcome: "More active comments, messages, and audience interactions.",
    timeline: "14–30 DAYS",
  },
  {
    id: "leads",
    tag: "CUSTOMER LEADS",
    title: "GENERATE MORE LEADS",
    subtitle: "Get direct inquiries from people who want to buy",
    description:
      "We build targeted ad campaigns and simple lead forms that deliver interested phone calls, messages, and inquiries directly to you.",
    deliverables: [
      { tag: "01", name: "Meta & Google Lead Ads" },
      { tag: "02", name: "Simple Lead Forms & Pages" },
      { tag: "03", name: "Direct WhatsApp Contact Funnel" },
    ],
    expectedOutcome: "A steady flow of genuine customer inquiries every week.",
    timeline: "7–21 DAYS",
  },
  {
    id: "sales",
    tag: "MORE SALES",
    title: "GET MORE SALES",
    subtitle: "Turn online visitors into paying customers",
    description:
      "We create high-converting sales ads and optimize your product pages so more visitors buy from your business.",
    deliverables: [
      { tag: "01", name: "Sales & Shopping Ads" },
      { tag: "02", name: "Simple Store Optimization" },
      { tag: "03", name: "Retargeting Ads" },
    ],
    expectedOutcome: "More customer orders and higher revenue from your ads.",
    timeline: "14–30 DAYS",
  },
];

// Clean Vector Animatic Icons for each Goal Box
const GoalAnimaticIcon: React.FC<{ id: string; isSelected: boolean }> = ({ id, isSelected }) => {
  const colorClass = isSelected ? "text-white" : "text-zinc-800 group-hover:text-zinc-950";

  return (
    <div className={`w-8 h-8 flex items-center justify-start my-2 transition-colors duration-200 ${colorClass}`}>
      {id === "awareness" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <circle cx="20" cy="20" r="14" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="20" cy="20" r="8" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </svg>
      )}

      {id === "reach" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <circle cx="20" cy="28" r="3" fill="currentColor" />
          <path d="M 12 20 Q 20 12 28 20" />
          <path d="M 6 12 Q 20 0 34 12" strokeDasharray="3 3" opacity="0.5" />
          <line x1="20" y1="28" x2="20" y2="35" strokeWidth="2" />
        </svg>
      )}

      {id === "social" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <path d="M 6 30 L 16 18 L 24 24 L 34 10" strokeWidth="2.2" />
          <polyline points="25,10 34,10 34,19" strokeWidth="2.2" />
          <circle cx="16" cy="18" r="2" fill="currentColor" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
        </svg>
      )}

      {id === "engagement" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <path d="M 8 10 H 32 C 34 10 35 11 35 13 V 24 C 35 26 34 27 32 27 H 16 L 8 33 V 27 C 6 27 5 26 5 24 V 13 C 5 11 6 10 8 10 Z" />
          <circle cx="14" cy="19" r="1.5" fill="currentColor" />
          <circle cx="20" cy="19" r="1.5" fill="currentColor" />
          <circle cx="26" cy="19" r="1.5" fill="currentColor" />
        </svg>
      )}

      {id === "leads" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <path d="M 10 12 L 20 6 L 30 12 L 20 18 Z" />
          <path d="M 10 20 L 20 26 L 30 20" />
          <path d="M 10 28 L 20 34 L 30 28" />
        </svg>
      )}

      {id === "sales" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <path d="M 6 8 H 11 L 15 24 H 30 L 33 12 H 13" />
          <circle cx="17" cy="30" r="2.5" fill="currentColor" />
          <circle cx="28" cy="30" r="2.5" fill="currentColor" />
        </svg>
      )}
    </div>
  );
};

export const ChooseGameSection: React.FC<ChooseGameSectionProps> = ({ onSelectObjective }) => {
  const [selectedGoalId, setSelectedGoalId] = useState(GOALS[0].id);
  const currentGoal = GOALS.find((g) => g.id === selectedGoalId) || GOALS[0];

  return (
    <section
      id="choose-game"
      className="relative w-full bg-white text-zinc-900 py-20 sm:py-28 px-6 sm:px-12 border-b border-zinc-200/80 overflow-hidden"
    >
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-tactical-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
            GOAL SELECTION
          </span>
        </div>

        {/* Clean Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
            WHAT IS YOUR MAIN GOAL?
          </h2>
          <p className="mt-2.5 font-sans text-sm sm:text-base text-zinc-600">
            Select the primary objective you want to achieve for your business.
          </p>
        </div>

        {/* Clean 6-Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {GOALS.map((goal, idx) => {
            const isSelected = goal.id === selectedGoalId;
            return (
              <button
                key={goal.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedGoalId(goal.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="interactive"
                className={`group text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[170px] ${
                  isSelected
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-xl shadow-zinc-950/15 scale-[1.02]"
                    : "bg-zinc-50/80 text-zinc-700 border-zinc-200/80 hover:border-zinc-400 hover:bg-zinc-100/60 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`font-mono text-xs tracking-wider font-semibold ${
                      isSelected ? "text-zinc-400" : "text-zinc-400"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  {isSelected && <div className="w-2 h-2 bg-emerald-400 rounded-full" />}
                </div>

                {/* Vector Animatic Icon */}
                <GoalAnimaticIcon id={goal.id} isSelected={isSelected} />

                <div>
                  <h3
                    className={`font-mono text-xs sm:text-sm font-bold tracking-tight uppercase leading-snug ${
                      isSelected ? "text-white" : "text-zinc-950"
                    }`}
                  >
                    {goal.title}
                  </h3>
                  <span
                    className={`font-mono text-[10px] block mt-1 tracking-wider uppercase font-semibold ${
                      isSelected ? "text-zinc-300" : "text-zinc-500"
                    }`}
                  >
                    {goal.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Goal Details Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGoal.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-10 rounded-3xl border border-zinc-200 bg-[#F8FAFC] shadow-lg shadow-zinc-900/[0.03] relative"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-950">
                  SELECTED: {currentGoal.title}
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-500">
                ESTIMATED TIMELINE:{" "}
                <span className="text-zinc-950 font-bold bg-white px-2.5 py-0.5 rounded-full border border-zinc-200 shadow-2xs">
                  {currentGoal.timeline}
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description & Outcome */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-1 font-semibold">
                    HOW WE HELP
                  </span>
                  <p className="font-sans text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
                    {currentGoal.description}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl border border-emerald-200 bg-emerald-50/60 shadow-2xs">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-700 block mb-1.5 font-bold">
                    EXPECTED OUTCOME
                  </span>
                  <div className="flex items-center gap-2.5 font-sans text-sm sm:text-base text-emerald-950 font-medium">
                    <Check size={18} className="text-emerald-600 shrink-0" />
                    <span>{currentGoal.expectedOutcome}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables & Action */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-2.5 font-semibold">
                    WHAT WE DELIVER
                  </span>

                  <div className="space-y-2">
                    {currentGoal.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 bg-white shadow-2xs"
                      >
                        <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-800">
                          {item.name}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-400 font-medium">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <MagneticButton
                  onClick={() => {
                    soundFx.playClick();
                    onSelectObjective(currentGoal.title);
                  }}
                  className="w-full py-4 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-md shadow-zinc-950/15"
                >
                  <span>START WITH THIS GOAL</span>
                  <ArrowRight size={14} />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
