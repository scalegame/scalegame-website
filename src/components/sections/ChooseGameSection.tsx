"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
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

// Small, Smooth Vector Animatic Icons for each Goal Box
const GoalAnimaticIcon: React.FC<{ id: string; isSelected: boolean }> = ({ id, isSelected }) => {
  const colorClass = isSelected ? "text-black" : "text-white/70 group-hover:text-white";

  return (
    <div className={`w-8 h-8 flex items-center justify-start my-1.5 transition-colors duration-200 ${colorClass}`}>
      {id === "awareness" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <circle cx="20" cy="20" r="14" strokeDasharray="3 3" opacity="0.5" />
          <circle cx="20" cy="20" r="8" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </svg>
      )}

      {id === "reach" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <circle cx="20" cy="28" r="3" fill="currentColor" />
          <path d="M 12 20 Q 20 12 28 20" />
          <path d="M 6 12 Q 20 0 34 12" strokeDasharray="3 3" opacity="0.6" />
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
          <path d="M 12 17 H 28 M 12 21 H 20" strokeWidth="1.5" opacity="0.7" />
        </svg>
      )}

      {id === "leads" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <path d="M 6 8 L 34 8 L 24 22 V 32 L 16 35 V 22 Z" />
          <circle cx="20" cy="8" r="2" fill="currentColor" />
        </svg>
      )}

      {id === "sales" && (
        <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current fill-none stroke-[2]">
          <path d="M 6 30 L 14 20 L 22 24 L 34 8" strokeWidth="2.5" />
          <polyline points="24,8 34,8 34,18" strokeWidth="2.5" />
          <line x1="6" y1="34" x2="34" y2="34" strokeWidth="1.5" opacity="0.4" />
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
      className="relative w-full bg-[#050505] text-white py-14 sm:py-20 px-6 sm:px-12 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Simple Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-white" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            [SECTION 03 // GOAL SELECTION]
          </span>
        </div>

        {/* Clean Header */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            WHAT IS YOUR MAIN GOAL?
          </h2>
          <p className="mt-2 font-sans text-sm sm:text-base text-white/60">
            Select the goal you want to achieve for your business.
          </p>
        </div>

        {/* Clean 6-Card Grid with Animatic Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
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
                className={`group text-left p-4 border transition-all duration-200 flex flex-col justify-between min-h-[160px] ${
                  isSelected
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "bg-[#0a0a0a] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`font-mono text-[10px] tracking-widest ${
                      isSelected ? "text-black/60 font-bold" : "text-white/30"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  {isSelected && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                </div>

                {/* Smooth Vector Animatic Icon */}
                <GoalAnimaticIcon id={goal.id} isSelected={isSelected} />

                <div>
                  <h3
                    className={`font-mono text-xs sm:text-sm font-bold tracking-tight uppercase leading-snug ${
                      isSelected ? "text-black" : "text-white"
                    }`}
                  >
                    {goal.title}
                  </h3>
                  <span
                    className={`font-mono text-[9px] block mt-1 tracking-wider uppercase ${
                      isSelected ? "text-black/70" : "text-white/40"
                    }`}
                  >
                    {goal.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean Goal Details Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGoal.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-10 border border-white/15 bg-[#090909] relative"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                  SELECTED: {currentGoal.title}
                </span>
              </div>
              <div className="font-mono text-xs text-white/50">
                ESTIMATED TIMELINE: <span className="text-white font-bold">{currentGoal.timeline}</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Simple Description & Outcome */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-1">
                    HOW WE HELP
                  </span>
                  <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed">
                    {currentGoal.description}
                  </p>
                </div>

                <div className="p-4 border border-white/10 bg-black/60">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-1">
                    EXPECTED OUTCOME
                  </span>
                  <div className="flex items-center gap-2 font-sans text-sm sm:text-base text-white">
                    <Check size={16} className="text-white shrink-0" />
                    <span>{currentGoal.expectedOutcome}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables & Action */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2.5">
                    WHAT WE DELIVER
                  </span>

                  <div className="space-y-2">
                    {currentGoal.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 border border-white/10 bg-black/40"
                      >
                        <span className="font-sans text-xs sm:text-sm font-medium text-white">
                          {item.name}
                        </span>
                        <span className="font-mono text-[10px] text-white/40">
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
                  className="w-full py-3.5 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
                >
                  START WITH THIS GOAL →
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
