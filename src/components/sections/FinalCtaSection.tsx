"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { MagneticButton } from "../common/MagneticButton";
import { soundFx } from "../common/SoundController";

interface FinalCtaSectionProps {
  onOpenGameModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenGameModal }) => {
  return (
    <section
      id="final-cta"
      className="relative w-full bg-white text-zinc-900 py-8 sm:py-12 px-6 sm:px-12 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Luxury High-Contrast Closing Card - Compact & Balanced */}
        <div className="relative rounded-3xl bg-zinc-950 text-white overflow-hidden p-6 sm:p-8 lg:p-10 shadow-xl shadow-zinc-950/15">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-blue-500/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-rose-500/10 pointer-events-none" />
          <div className="absolute inset-0 bg-tactical-grid opacity-10 pointer-events-none" />

          {/* Top Meta Line */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/60 font-semibold">
                READY TO SCALE
              </span>
            </div>

            <div className="font-mono text-xs text-white/50 tracking-wider">
              STATUS: <span className="text-emerald-400 font-bold">ACCEPTING CLIENTS</span>
            </div>
          </div>

          {/* Center Zone */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-widest text-white/50 block font-semibold"
            >
              THE BOARD IS SET.
            </motion.span>

            {/* Monumental Headline */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white/30 hover:text-white transition-colors duration-500"
            >
              YOUR MOVE.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white"
            >
              WE PLAY. YOU WIN.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-sans text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed font-normal"
            >
              Partner with a dedicated digital marketing team that delivers real revenue, authentic customer trust, and clear ROI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-3 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <MagneticButton
                onClick={() => {
                  soundFx.playGameStart();
                  onOpenGameModal();
                }}
                strength={0.25}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-950 font-mono text-xs font-black tracking-widest uppercase hover:bg-zinc-200 transition-all rounded-full shadow-lg shadow-white/10"
              >
                <span className="flex items-center justify-center gap-2">
                  LET&apos;S WORK
                  <ArrowUpRight size={16} />
                </span>
              </MagneticButton>

              <a
                href="https://wa.me/919360512623"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor="interactive"
                className="w-full sm:w-auto px-7 py-3.5 border border-white/20 hover:border-emerald-400 bg-white/5 hover:bg-emerald-500/10 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all rounded-full flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </motion.div>

            <p className="pt-4 font-mono text-[11px] text-white/40 tracking-wider">
              LIMITED CLIENT CAPACITY • HIGH-TOUCH ENGAGEMENTS FOR TAMIL NADU BUSINESSES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
