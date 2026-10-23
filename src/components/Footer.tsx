"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { soundFx } from "./common/SoundController";

export const Footer: React.FC = () => {
  const [timeMain, setTimeMain] = useState("");
  const [timeSec, setTimeSec] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedHours = String(hours).padStart(2, "0");

      setTimeMain(`${formattedHours}:${minutes}`);
      setTimeSec(seconds);
      setTimePeriod(period);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-50 text-zinc-600 py-10 sm:py-12 px-6 sm:px-12 border-t border-zinc-200/80 select-none relative overflow-hidden">
      {/* Subtle Ambient Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Area: Logo, Live Time, Return to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8">
          {/* Logo & Brand Identity */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor="interactive"
            className="group flex items-center gap-3 transition-opacity hover:opacity-85"
            title="SCALE GAME — Return to Top"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-950 text-white flex items-center justify-center font-mono text-xs font-black group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm">
              SG
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl sm:text-2xl font-black tracking-tight uppercase text-zinc-950 leading-tight">
                SCALE GAME
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-zinc-400 uppercase font-semibold">
                WE PLAY, YOU WIN.
              </span>
            </div>
          </a>

          {/* Live Digital Clock */}
          <div className="flex flex-col items-start md:items-center space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                LOCAL TIME • KARAIKUDI, TAMIL NADU (IST)
              </span>
            </div>

            <div className="font-mono text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 tabular-nums flex items-baseline select-text">
              <span>{timeMain || "12:00"}</span>
              <span className="text-zinc-400 mx-0.5">:</span>
              <div className="relative inline-flex overflow-hidden items-center justify-center min-w-[1.2em]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={timeSec}
                    initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -5, filter: "blur(2px)" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-zinc-900"
                  >
                    {timeSec || "00"}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-xs text-zinc-400 ml-2 font-normal font-sans tracking-widest">
                {timePeriod}
              </span>
            </div>
          </div>

          {/* Return to Top Button */}
          <div className="flex items-center w-full md:w-auto">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundFx.playHover()}
              data-cursor="interactive"
              className="w-full md:w-auto px-6 py-3 rounded-full border border-zinc-200 hover:border-zinc-950 bg-white hover:bg-zinc-950 hover:text-white text-zinc-800 font-mono text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xs"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Legal Footer Hairline */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] tracking-wider text-zinc-400">
          <div>
            © {new Date().getFullYear()} SCALEGAME DIGITAL. ALL RIGHTS RESERVED.
          </div>
          <div className="text-zinc-500 uppercase font-medium">
            DIGITAL MARKETING AGENCY • KARAIKUDI, TAMIL NADU
          </div>
        </div>
      </div>
    </footer>
  );
};
