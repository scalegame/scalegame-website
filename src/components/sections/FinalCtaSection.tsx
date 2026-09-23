"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Crosshair, Terminal, Sparkles, MessageCircle } from "lucide-react";
import { MagneticButton } from "../common/MagneticButton";
import { soundFx } from "../common/SoundController";

interface FinalCtaSectionProps {
  onOpenGameModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenGameModal }) => {
  return (
    <section
      id="final-cta"
      className="relative w-full min-h-[60vh] bg-[#050505] text-white flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-12 select-none overflow-hidden"
    >
      {/* Background Ambience: Subtle Radial Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-tactical-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] bg-white/[0.04]" />
      </div>

      {/* Top Section Meta */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white" />
          <span className="font-mono text-xs uppercase tracking-tactical text-white/50">
            [SECTION 07 // GET STARTED]
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-white/50 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>STATUS: ACCEPTING CLIENTS</span>
        </div>
      </div>

      {/* Center Zone: Dramatic Typographic Crescendo */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-8 sm:py-12 flex flex-col items-center text-center">
        {/* Subtitle / Question */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white/50 block mb-3"
        >
          THE BOARD IS SET.
        </motion.span>

        {/* Large Typography: YOUR MOVE. */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none text-white/40 hover:text-white transition-colors duration-500 mb-2"
        >
          YOUR MOVE.
        </motion.h2>

        {/* Core Thesis: WE PLAY. YOU WIN. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 sm:mb-8"
        >
          WE PLAY. YOU WIN.
        </motion.div>

        {/* Final CTA Button: LET'S PLAY */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton
            onClick={() => {
              soundFx.playGameStart();
              onOpenGameModal();
            }}
            strength={0.35}
            className="px-10 sm:px-14 py-5 sm:py-6 bg-white text-black font-mono text-sm sm:text-base font-black tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.25)] border-2 border-white"
          >
            <span className="flex items-center gap-3">
              LET&apos;S WORK
              <ArrowUpRight size={20} />
            </span>
          </MagneticButton>

          <a
            href="https://wa.me/919360512623"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor="interactive"
            className="px-8 sm:px-10 py-5 sm:py-6 border border-white/30 hover:border-emerald-400 bg-black/60 hover:bg-emerald-950/20 text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-2.5 shadow-lg"
          >
            <MessageCircle size={18} className="text-emerald-400" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </motion.div>

        <p className="mt-8 font-mono text-xs text-white/50 tracking-wider">
          LIMITED CLIENT CAPACITY // HIGH-TOUCH QUARTERLY ENGAGEMENTS
        </p>
      </div>
    </section>
  );
};
