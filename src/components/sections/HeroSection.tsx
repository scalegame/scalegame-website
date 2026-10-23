"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
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

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
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
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-white text-zinc-900 pt-28 pb-10 px-6 sm:px-12 select-none border-b border-zinc-200/80"
    >
      {/* Background: Soft luminous ambience + fine grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-tactical-grid opacity-70" />

        {/* Soft interactive radial aura */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(225, 29, 72, 0.04) 40%, transparent 70%)",
            transform: `translate(${mousePos.x * 100 - 50}vw, ${mousePos.y * 100 - 50}vh)`,
          }}
        />

        {/* Subtle geometric backdrop cells */}
        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 grid-rows-4 opacity-15">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`border border-zinc-900/10 transition-colors duration-700 relative ${
                activeCell === i ? "bg-zinc-900/[0.03]" : ""
              }`}
              onMouseEnter={() => {
                setActiveCell(i);
                soundFx.playHover();
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-semibold">
            SCALE GAME • PERFORMANCE DIGITAL MARKETING
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-zinc-500 tracking-wider">
          <span>KARAIKUDI, TAMIL NADU</span>
          <span className="text-zinc-300">•</span>
          <span className="text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            ACCEPTING CLIENTS
          </span>
        </div>
      </div>

      {/* Center Zone: Monumental Typography & Editorial Brand Statement */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 my-auto py-8 sm:py-12 flex flex-col justify-center max-w-7xl mx-auto w-full"
      >
        {/* Pre-Headline Pill */}
        <div className="inline-flex items-center gap-2 mb-4 self-start">
          <span className="px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-mono text-xs uppercase tracking-widest font-semibold">
            DIGITAL MARKETING AGENCY • TAMIL NADU
          </span>
        </div>

        {/* Monumental Headline: WE PLAY. YOU WIN. */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17vw] sm:text-[14vw] md:text-[12vw] lg:text-[11rem] leading-[0.84] font-black uppercase tracking-tighter text-zinc-950 select-none"
          >
            <span className="block hover:text-zinc-800 transition-colors">WE PLAY.</span>
            <span className="block text-zinc-300 hover:text-zinc-950 transition-colors duration-500">
              YOU WIN.
            </span>
            <span className="sr-only">
              — Performance Digital Marketing Agency in Karaikudi & Tamil Nadu
            </span>
          </motion.h1>
        </div>

        {/* Editorial Subtext & Direct CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
        >
          <div className="md:col-span-7 space-y-3">
            <p className="font-sans text-xl sm:text-2xl md:text-3xl font-normal text-zinc-900 tracking-tight leading-snug">
              “We target your ideal audience, build authentic trust in your product, and convert engagement into high-value revenue.”
            </p>
            <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal leading-relaxed max-w-xl">
              Performance marketing, Meta &amp; Google Ads, and high-conversion lead generation systems engineered for ambitious businesses across Karaikudi, Chennai, and Tamil Nadu.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3.5 justify-end items-start md:items-end">
            <MagneticButton
              onClick={onOpenGameModal}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-950 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all rounded-full shadow-lg shadow-zinc-950/20"
            >
              GET STARTED
            </MagneticButton>

            <button
              onClick={() => scrollToSection("services")}
              onMouseEnter={() => soundFx.playHover()}
              className="w-full sm:w-auto px-7 py-4 border border-zinc-300 hover:border-zinc-950 text-zinc-900 font-mono text-xs font-semibold tracking-widest uppercase bg-white hover:bg-zinc-50 transition-all rounded-full shadow-sm"
              data-cursor="interactive"
            >
              EXPLORE SERVICES
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar & Smooth Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>FULL-SERVICE GROWTH ARCHITECTURE</span>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("services")}
          className="group flex items-center gap-3 font-mono text-xs tracking-wider text-zinc-500 hover:text-zinc-950 transition-colors"
          data-cursor="interactive"
        >
          <span>SCROLL TO SERVICES</span>
          <div className="w-7 h-7 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center group-hover:border-zinc-950 group-hover:translate-y-0.5 transition-all shadow-sm">
            <ArrowDown size={12} className="animate-bounce text-zinc-700" />
          </div>
        </button>
      </div>
    </section>
  );
};
