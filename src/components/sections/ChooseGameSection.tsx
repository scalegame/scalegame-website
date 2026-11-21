"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { soundFx } from "../common/SoundController";
import { MagneticButton } from "../common/MagneticButton";

interface ChooseGameSectionProps {
  onSelectObjective: (goal: string) => void;
}

interface ObjectiveItem {
  number: string;
  title: string;
}

const OBJECTIVES: ObjectiveItem[] = [
  { number: "01", title: "GET MORE CUSTOMERS" },
  { number: "02", title: "GENERATE QUALITY ENQUIRIES" },
  { number: "03", title: "INCREASE SALES & REVENUE" },
  { number: "04", title: "BUILD A STRONG BRAND IDENTITY" },
  { number: "05", title: "IMPROVE GOOGLE SEARCH VISIBILITY" },
  { number: "06", title: "REACH MORE LOCAL CUSTOMERS" },
  { number: "07", title: "PROMOTE MY PRODUCTS & SERVICES" },
  { number: "08", title: "GROW MY BUSINESS ONLINE" },
];

export const ChooseGameSection: React.FC<ChooseGameSectionProps> = ({ onSelectObjective }) => {
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([OBJECTIVES[0].title]);

  const toggleObjective = (title: string) => {
    soundFx.playClick();
    setSelectedObjectives((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const handleProceed = () => {
    if (selectedObjectives.length === 0) return;
    soundFx.playClick();
    onSelectObjective(selectedObjectives.join(", "));
  };

  const whatsAppText = `Hi Scale Game, I want to achieve: ${
    selectedObjectives.length > 0 ? selectedObjectives.join(", ") : "business growth"
  } for my business. Please share details!`;

  return (
    <section
      id="choose-game"
      className="relative w-full bg-white text-zinc-900 py-8 sm:py-12 px-6 sm:px-12 border-b border-zinc-200/80 overflow-hidden select-none"
    >
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 mb-2.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              GOAL SELECTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-[1.1]">
            WHAT DO YOU WANT TO ACHIEVE?
          </h2>

          <p className="mt-2.5 font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
            Choose your primary business goal. We&apos;ll create a digital marketing strategy tailored to your business.
          </p>
        </div>

        {/* 8 Objectives Grid: 2 columns × 4 rows on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
          {OBJECTIVES.map((obj) => {
            const isSelected = selectedObjectives.includes(obj.title);
            return (
              <button
                key={obj.number}
                type="button"
                onClick={() => toggleObjective(obj.title)}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="interactive"
                className={`group w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                  isSelected
                    ? "bg-white border-2 border-zinc-950 shadow-sm ring-2 ring-zinc-950/5"
                    : "bg-white border border-[#D2D2D7] hover:border-zinc-400 hover:bg-[#FAFAFC] shadow-2xs"
                }`}
              >
                {/* Left: Number + Separator + Title */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <span
                    className={`font-mono text-xs font-bold tracking-wider transition-colors ${
                      isSelected ? "text-zinc-950 font-black" : "text-zinc-400"
                    }`}
                  >
                    {obj.number}
                  </span>
                  <span className="text-zinc-300 font-light select-none">—</span>
                  <span
                    className={`font-mono text-xs sm:text-sm md:text-[15px] font-bold tracking-tight uppercase transition-colors ${
                      isSelected ? "text-zinc-950" : "text-zinc-800 group-hover:text-zinc-950"
                    }`}
                  >
                    {obj.title}
                  </span>
                </div>

                {/* Right: Circular Selection Indicator */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-3 sm:ml-4 transition-all ${
                    isSelected
                      ? "bg-zinc-950 text-white shadow-2xs"
                      : "border-2 border-zinc-300 bg-white group-hover:border-zinc-400"
                  }`}
                >
                  {isSelected && <Check size={13} strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Action Strip: Multiple Selection Status & Actions */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5 font-mono text-xs text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {selectedObjectives.length === 0 ? (
                <span className="text-zinc-400">SELECT ONE OR MORE OBJECTIVES ABOVE</span>
              ) : (
                <>
                  <strong className="text-zinc-950 font-bold">{selectedObjectives.length}</strong> OBJECTIVE
                  {selectedObjectives.length > 1 ? "S" : ""} SELECTED
                </>
              )}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`https://wa.me/919360512623?text=${encodeURIComponent(whatsAppText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="px-5 py-3 rounded-xl border border-zinc-300 bg-white hover:border-zinc-950 text-zinc-900 font-mono text-xs font-semibold tracking-wider uppercase transition-all text-center flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs"
            >
              <span>CHAT ON WHATSAPP</span>
              <ArrowRight size={13} />
            </a>

            <MagneticButton
              onClick={handleProceed}
              className={`px-7 py-3 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-sm ${
                selectedObjectives.length > 0
                  ? "bg-zinc-950 text-white hover:bg-zinc-800 shadow-zinc-950/15"
                  : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
              }`}
            >
              <span>START WITH THIS GOAL</span>
              <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
