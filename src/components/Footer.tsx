"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { soundFx } from "./common/SoundController";

const INSTAGRAM_URL = "https://www.instagram.com/scale.game/?hl=en";
const WHATSAPP_URL = "https://wa.me/919360512623";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593448861778";
const EMAIL_URL = "mailto:scalegame001@gmail.com";

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
    <footer className="w-full bg-[#030303] text-white py-12 sm:py-16 px-6 sm:px-12 border-t border-white/10 select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Special Feature Showcase: Stylish Scale Game Brand, Socials & Smooth Gray Live Clock */}
        <div className="relative w-full mb-10 sm:mb-12 p-6 sm:p-10 border border-white/15 bg-gradient-to-b from-[#0e0e0e] to-[#070707] overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow and Grid */}
          <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />
          <motion.div
            animate={{
              opacity: [0.08, 0.16, 0.08],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.06] blur-[90px] pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Left: Stylish Scale Game Typography & Words */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
                  SCALE GAME // DIGITAL GROWTH
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                SCALE GAME.
              </h2>

              <p className="font-sans text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed tracking-wide">
                In this era, true advantage lies where the refined quality of manual craft meets the rocket speed of AI automation. We engineer ultra-fast distribution, flawless delivery, and uncompromising quality of work—powered by brilliant aesthetics and deep psychological thinking to scale your brand with unmatched stylishness.
              </p>


              {/* Direct Social Redirect Cards */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {/* Instagram Button */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="interactive"
                  className="group flex items-center gap-2.5 px-4 py-2.5 border border-white/20 hover:border-pink-500/80 bg-black/60 hover:bg-pink-950/20 text-white rounded-lg transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">FOLLOW US</span>
                    <span className="font-mono text-xs font-bold text-white group-hover:text-pink-400 transition-colors">@scale.game</span>
                  </div>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-pink-400 transition-colors ml-1" />
                </a>

                {/* WhatsApp Button */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="interactive"
                  className="group flex items-center gap-2.5 px-4 py-2.5 border border-white/20 hover:border-emerald-500/80 bg-black/60 hover:bg-emerald-950/20 text-white rounded-lg transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-md bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.129z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">CHAT ON WHATSAPP</span>
                    <span className="font-mono text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">+91 93605 12623</span>
                  </div>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-emerald-400 transition-colors ml-1" />
                </a>

                {/* Facebook Button (Connected to exact profile) */}
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="interactive"
                  className="group flex items-center gap-2.5 px-4 py-2.5 border border-white/20 hover:border-blue-500/80 bg-black/60 hover:bg-blue-950/20 text-white rounded-lg transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-md bg-[#1877F2]/10 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2] group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">FACEBOOK</span>
                    <span className="font-mono text-xs font-bold text-white group-hover:text-blue-400 transition-colors">Scale Game</span>
                  </div>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-blue-400 transition-colors ml-1" />
                </a>

                {/* Email Direct Link */}
                <a
                  href={EMAIL_URL}
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="interactive"
                  className="group flex items-center gap-2.5 px-4 py-2.5 border border-white/20 hover:border-white bg-black/60 hover:bg-white/10 text-white rounded-lg transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-md bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail size={14} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">DIRECT EMAIL</span>
                    <span className="font-mono text-xs font-bold text-white">scalegame001@gmail.com</span>
                  </div>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-white transition-colors ml-1" />
                </a>
              </div>
            </div>

            {/* Right: Smooth Transitioning Gray Live Digital Clock */}
            <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end space-y-2 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
                  LOCAL TIME // LIVE CLOCK
                </span>
              </div>

              {/* Big Gray Font with Smooth Dissolve Seconds */}
              <div className="font-mono text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-400 tabular-nums flex items-baseline select-text">
                <span>{timeMain || "12:00"}</span>
                <span className="text-neutral-500 mx-0.5">:</span>
                <div className="relative inline-flex overflow-hidden items-center justify-center min-w-[1.2em]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={timeSec}
                      initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block text-neutral-400"
                    >
                      {timeSec || "00"}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-xs sm:text-sm text-neutral-500 ml-2 font-normal font-sans tracking-widest">
                  {timePeriod}
                </span>
              </div>

              <div className="font-mono text-[11px] text-neutral-500 tracking-wider">
                LIVE TRANSMISSION // READY FOR INQUIRIES
              </div>
            </div>
          </div>
        </div>

        {/* Clean 3-Column Area: Return to Top Only on the Side */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-8 sm:mb-10 items-center">
          {/* Col 1: Brand Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-white flex items-center justify-center font-mono text-xs font-black bg-white text-black">
                SG
              </div>
              <span className="font-mono text-base font-black tracking-widest uppercase block text-white">
                SCALE GAME
              </span>
            </div>

            <p className="font-sans text-sm text-white/70 max-w-md leading-relaxed">
              We target your ideal audience, build authentic trust in your product, and convert engagement into high-value sales.
            </p>

            <div className="pt-2 font-mono text-xs text-white/40">
              CORE PHILOSOPHY: <span className="text-white">“WE PLAY. YOU WIN.”</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-3">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 font-mono text-xs text-white/75">
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-white/40">01 //</span> METHODOLOGY
                </a>
              </li>
              <li>
                <a href="#choose-game" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-white/40">02 //</span> GOALS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-white/40">03 //</span> SERVICES
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-white/40">04 //</span> HOW WE WORK
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-white/40">05 //</span> MARKETS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Keep Return to Top Only on the Side */}
          <div className="md:col-span-3 flex md:justify-end items-center">
            <button
              onClick={scrollToTop}
              className="w-full md:w-auto px-8 py-3.5 border border-white/20 hover:border-white text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-3 bg-white/5 hover:bg-white hover:text-black transition-all shadow-lg"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Hairline & Legal */}
        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40">
          <div>© {new Date().getFullYear()} SCALE GAME. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              INSTAGRAM
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WHATSAPP
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              FACEBOOK
            </a>
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
