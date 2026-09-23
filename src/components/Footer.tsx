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
    <footer className="w-full bg-[#030303] text-white py-6 sm:py-8 px-6 sm:px-12 border-t border-white/10 select-none relative overflow-hidden">
      {/* Subtle Ambient Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Minimal Main Area: Logo, Live Time, Return to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6">
          {/* Logo & Redirect Link */}
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
            <div className="w-8 h-8 border border-white flex items-center justify-center font-mono text-xs font-black bg-white text-black group-hover:scale-105 transition-transform flex-shrink-0">
              SG
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-black tracking-tighter uppercase text-white leading-tight">
                SCALE GAME
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-neutral-400 uppercase font-semibold">
                WE PLAY, YOU WIN.
              </span>
            </div>
          </a>

          {/* Live Digital Clock */}
          <div className="flex flex-col items-start md:items-center space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                LOCAL TIME // LIVE CLOCK
              </span>
            </div>

            <div className="font-mono text-2xl sm:text-4xl font-bold tracking-tight text-neutral-300 tabular-nums flex items-baseline select-text">
              <span>{timeMain || "12:00"}</span>
              <span className="text-neutral-500 mx-0.5">:</span>
              <div className="relative inline-flex overflow-hidden items-center justify-center min-w-[1.2em]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={timeSec}
                    initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -5, filter: "blur(2px)" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-neutral-300"
                  >
                    {timeSec || "00"}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-xs text-neutral-500 ml-2 font-normal font-sans tracking-widest">
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
              className="w-full md:w-auto px-6 py-3 border border-white/20 hover:border-white text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Minimal Legal Footer Hairline */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] tracking-wider text-neutral-400">
          <div>
            © {new Date().getFullYear()} SCALEGAME DIGITAL. ALL RIGHTS RESERVED.
          </div>
          <div className="text-neutral-500 text-[10px] tracking-widest uppercase">
            SCALEGAME DIGITAL
          </div>
        </div>
      </div>
    </footer>
  );
};
