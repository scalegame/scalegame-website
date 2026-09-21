"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, Phone, AlertCircle, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { soundFx } from "./SoundController";
import { MagneticButton } from "./MagneticButton";

interface GameBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultObjective?: string;
}

const GOAL_OPTIONS = [
  "01 — BUILD BRAND AWARENESS",
  "02 — REACH MORE PEOPLE",
  "03 — GROW MY SOCIAL MEDIA",
  "04 — INCREASE ENGAGEMENT",
  "05 — GENERATE MORE LEADS",
  "06 — GET MORE SALES",
];

const PHONE_NUMBER = "919360512623";
const DISPLAY_PHONE = "+91 93605 12623";

export const GameBriefingModal: React.FC<GameBriefingModalProps> = ({
  isOpen,
  onClose,
  defaultObjective,
}) => {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState(GOAL_OPTIONS[0]);
  const [clientName, setClientName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultObjective) {
      const match = GOAL_OPTIONS.find(
        (opt) =>
          opt.toLowerCase().includes(defaultObjective.toLowerCase()) ||
          defaultObjective.toLowerCase().includes(opt.toLowerCase())
      );
      if (match) {
        setObjective(match);
      }
    }
  }, [defaultObjective]);

  const buildWhatsAppUrl = () => {
    const lines = [
      `🚀 *NEW CLIENT INQUIRY — SCALE GAME*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Client Name:* ${clientName.trim()}`,
      `🏢 *Business / Brand:* ${brandName.trim()}`,
      industry.trim() ? `🏷️ *Industry / Category:* ${industry.trim()}` : null,
      `🎯 *Marketing Goal:* ${objective}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `Hi Scale Game, I would like to discuss our marketing strategy and scaling our business online!`,
    ].filter(Boolean);

    const text = lines.join("\n");
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleNext = () => {
    soundFx.playClick();
    if (step === 1) {
      setStep(2);
      setError("");
    } else if (step === 2) {
      // Validate all required fields — cannot be empty
      if (!clientName.trim() || !brandName.trim()) {
        setError("Please enter your name and business name.");
        return;
      }

      setError("");
      soundFx.playGameStart();
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ffffff", "#aaaaaa", "#555555", "#111111"],
      });

      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setClientName("");
    setBrandName("");
    setIndustry("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl bg-[#0a0a0a] border-2 border-white/30 text-white p-6 sm:p-10 shadow-[0_0_80px_rgba(255,255,255,0.06)] max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 border border-white/20 text-white/60 hover:text-white hover:border-white transition-colors"
          data-cursor="interactive"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 pr-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/70">
              SCALE GAME // START A PROJECT
            </span>
          </div>

          {/* Direct Call Header Quick-Link */}
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-white/60 hover:text-white transition-colors"
          >
            <Phone size={12} />
            <span>CALL: {DISPLAY_PHONE}</span>
          </a>
        </div>

        {!isSubmitted ? (
          <div>
            {/* Stepper Indicator */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <span className="font-mono text-xs text-white/50">
                PHASE 0{step} OF 02
              </span>
              <div className="flex gap-2">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`w-8 h-1 transition-colors ${
                      step >= s ? "bg-white" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Objective */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-mono text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2 leading-tight">
                    WHAT DO YOU WANT YOUR ONLINE PRESENCE TO ACHIEVE?
                  </h3>
                  <p className="font-sans text-sm text-white/60">
                    Choose the goal you want to achieve through your digital marketing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GOAL_OPTIONS.map((item) => {
                    const isSelected = objective === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          soundFx.playHover();
                          setObjective(item);
                        }}
                        className={`p-4 border text-left font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                            : "bg-black/50 text-white/70 border-white/15 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        <span>{item}</span>
                        <div
                          className={`w-2 h-2 rounded-full transition-all ${
                            isSelected ? "bg-black" : "bg-white/30"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Brand & Contact Info */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="font-mono text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-1">
                    TELL US ABOUT YOUR BUSINESS
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60">
                    Provide your information below and our team will analyze your brand requirements.
                  </p>
                </div>

                {/* Validation Error Message */}
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-950/50 border border-red-500/60 text-red-200 font-mono text-xs">
                    <AlertCircle size={15} className="shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Client Name */}
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/70 block mb-1">
                      YOUR NAME <span className="text-white font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tony Israel"
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                        if (error) setError("");
                      }}
                      className={`w-full px-4 py-3 bg-black/60 border text-white font-mono text-sm focus:outline-none placeholder:text-white/30 transition-colors ${
                        error && !clientName.trim()
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/20 focus:border-white"
                      }`}
                    />
                  </div>

                  {/* Business / Brand Name */}
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/70 block mb-1">
                      BUSINESS / BRAND NAME <span className="text-white font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Studio, Luxury Wear, Retail Brand"
                      value={brandName}
                      onChange={(e) => {
                        setBrandName(e.target.value);
                        if (error) setError("");
                      }}
                      className={`w-full px-4 py-3 bg-black/60 border text-white font-mono text-sm focus:outline-none placeholder:text-white/30 transition-colors ${
                        error && !brandName.trim()
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/20 focus:border-white"
                      }`}
                    />
                  </div>

                  {/* Business Category / Industry */}
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/70 block mb-1">
                      BUSINESS CATEGORY / INDUSTRY (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. E-Commerce, Real Estate, Fashion, Clinic"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-4 py-3 bg-black/60 border border-white/20 text-white font-mono text-sm focus:border-white focus:outline-none placeholder:text-white/30 transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions Bar */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    setStep(step - 1);
                    setError("");
                  }}
                  className="font-mono text-xs text-white/50 hover:text-white"
                >
                  ← BACK
                </button>
              ) : (
                <span className="font-mono text-[10px] text-white/30">SCALE GAME AGENCY</span>
              )}

              <MagneticButton
                onClick={handleNext}
                className="px-8 py-3.5 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center gap-2"
              >
                {step === 2 ? "SUBMIT BRIEF →" : "CONTINUE →"}
              </MagneticButton>
            </div>
          </div>
        ) : (
          /* Submission Success Screen */
          <div className="py-6 text-center space-y-5">
            <div className="w-14 h-14 rounded-full border-2 border-white mx-auto flex items-center justify-center">
              <CheckCircle2 size={28} className="text-white" />
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
                BRIEF SUBMITTED // CONFIRMED
              </span>
              <h3 className="font-mono text-2xl sm:text-3xl font-black uppercase text-white">
                WE&apos;RE READY TO WORK.
              </h3>
              <p className="font-sans text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{clientName}</strong>. Your briefing for <strong>{brandName}</strong> has been received. Our team will review your requirements and get in touch with you shortly.
              </p>
            </div>

            {/* Summary Data */}
            <div className="p-4 border border-white/15 bg-black/60 max-w-md mx-auto font-mono text-xs text-left space-y-1.5 text-white/70">
              <div>👤 <span className="text-white/40">NAME:</span> <span className="text-white font-bold">{clientName}</span></div>
              <div>🏢 <span className="text-white/40">BUSINESS:</span> <span className="text-white font-bold">{brandName}</span></div>
              {industry.trim() && (
                <div>🏷️ <span className="text-white/40">INDUSTRY:</span> <span className="text-white font-bold">{industry}</span></div>
              )}
              <div>🎯 <span className="text-white/40">GOAL:</span> <span className="text-white font-bold">{objective}</span></div>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] font-bold"
              >
                <MessageCircle size={15} />
                CHAT ON WHATSAPP
              </a>
              <button
                onClick={handleReset}
                className="flex-1 py-3.5 px-4 border border-white/40 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 font-bold"
              >
                DONE
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

