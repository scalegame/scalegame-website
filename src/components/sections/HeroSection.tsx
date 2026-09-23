"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Crosshair, Terminal, Zap, Shield, ChevronRight } from "lucide-react";
import { TextScramble } from "../common/TextScramble";
import { MagneticButton } from "../common/MagneticButton";
import { soundFx } from "../common/SoundController";

interface HeroSectionProps {
  onOpenGameModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGameModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeCell, setActiveCell] = useState<number | null>(4);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050505] pt-24 pb-8 px-6 sm:px-12 select-none border-b border-white/10"
    >
      {/* Background: Interactive Monochrome Game Board / Play Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle coordinate grid lines */}
        <div className="absolute inset-0 bg-tactical-grid opacity-35" />

        {/* Dynamic Interactive Game Board Tiles (Monochrome Chess/Field Concept) */}
        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 grid-rows-4 opacity-20">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`border border-white/10 transition-colors duration-700 relative ${
                activeCell === i ? "bg-white/[0.04] border-white/30" : ""
              }`}
              onMouseEnter={() => {
                setActiveCell(i);
                soundFx.playHover();
              }}
            >
              {/* Corner crosshairs on selected tiles */}
              {i % 4 === 0 && (
                <div className="absolute top-1 left-1 text-[8px] font-mono text-white/20">
                  +
                </div>
              )}
              {i === 7 && (
                <div className="absolute bottom-1 right-1 font-mono text-[7px] text-white/30 tracking-tighter">
                  ZONE_A1
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mouse Reactive Monochrome Ambient Light Cone */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-transform duration-500 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 40%, transparent 70%)",
            transform: `translate(${mousePos.x * 100 - 50}vw, ${mousePos.y * 100 - 50}vh)`,
          }}
        />
      </div>

      {/* Top Meta Bar: Technical Telemetry */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 bg-white rounded-full animate-ping" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-white/70">
            SCALE GAME // DIGITAL MARKETING & GROWTH AGENCY
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px] text-white/50 tracking-wider">
          <span>GLOBAL REACH</span>
          <span className="text-white/20">•</span>
          <span className="text-emerald-400 font-medium">ACCEPTING CLIENTS</span>
        </div>
      </div>

      {/* Center Zone: Huge Typography & Brand Statement */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 my-auto py-6 sm:py-8 flex flex-col justify-center max-w-7xl mx-auto w-full"
      >
        {/* Small Pre-Headline Tag */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[1px] bg-white/40" />
          <span className="font-mono text-xs uppercase tracking-tactical text-white/60">
            THE STRATEGIC ADVANTAGE
          </span>
        </div>

        {/* Massive Headline: WE PLAY. YOU WIN. */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17vw] sm:text-[14vw] md:text-[12vw] lg:text-[11rem] leading-[0.84] font-black uppercase tracking-tighter text-white select-none"
          >
            <span className="block hover:text-white/80 transition-colors">WE PLAY.</span>
            <span className="block text-white/30 hover:text-white transition-colors duration-500">
              YOU WIN.
            </span>
          </motion.h1>
        </div>

        {/* Supporting Editorial Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
        >
          <div className="md:col-span-7">
            <p className="font-sans text-lg sm:text-2xl md:text-3xl font-light text-white/85 tracking-tight leading-snug">
              “We target your ideal audience, build authentic trust in your product, and convert engagement into high-value sales.”
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-end items-start md:items-end">
            <MagneticButton
              onClick={onOpenGameModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              GET STARTED
            </MagneticButton>

            <button
              onClick={() => scrollToSection("services")}
              onMouseEnter={() => soundFx.playHover()}
              className="w-full sm:w-auto px-6 py-4 border border-white/20 hover:border-white text-white font-mono text-xs tracking-widest uppercase bg-black/40 backdrop-blur-sm transition-all"
              data-cursor="interactive"
            >
              EXPLORE SERVICES
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Interface Bar & Tactical Scroll Indicator */}
      <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>FULL-SERVICE DIGITAL GROWTH</span>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("philosophy")}
          className="group flex items-center gap-3 font-mono text-[10px] tracking-widest text-white/60 hover:text-white transition-colors"
          data-cursor="interactive"
        >
          <span>SCROLL TO ADVANCE</span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:translate-y-0.5 transition-all">
            <ArrowDown size={11} className="animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
