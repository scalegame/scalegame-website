"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, MessageCircle, AlertCircle, Phone, ArrowRight, Check } from "lucide-react";
import { soundFx } from "./SoundController";
import { MagneticButton } from "./MagneticButton";

interface GameBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultObjective?: string;
}

const PHONE_NUMBER = "919360512623";
const DISPLAY_PHONE = "+91 93605 12623";

const GOAL_OPTIONS = [
  "GET MORE CUSTOMERS",
  "GENERATE QUALITY ENQUIRIES",
  "INCREASE SALES & REVENUE",
  "BUILD A STRONG BRAND IDENTITY",
  "IMPROVE GOOGLE SEARCH VISIBILITY",
  "REACH MORE LOCAL CUSTOMERS",
  "PROMOTE MY PRODUCTS & SERVICES",
  "GROW MY BUSINESS ONLINE",
  "CUSTOM TAILORED STRATEGY",
];

export const GameBriefingModal: React.FC<GameBriefingModalProps> = ({
  isOpen,
  onClose,
  defaultObjective = "GET MORE CUSTOMERS",
}) => {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState(defaultObjective);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [brandName, setBrandName] = useState("");
  const [location, setLocation] = useState("");
  const [webOrInsta, setWebOrInsta] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (defaultObjective) {
      setObjective(defaultObjective);
    }
  }, [defaultObjective, isOpen]);

  if (!isOpen) return null;

  const buildWhatsAppUrl = () => {
    const text = [
      `*SCALE GAME // NEW BUSINESS INQUIRY*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${clientName.trim()}`,
      `📱 *Phone:* ${clientPhone.trim()}`,
      `🏢 *Business/Brand:* ${brandName.trim()}`,
      location.trim() ? `📍 *Location:* ${location.trim()}` : "",
      `🎯 *Primary Goal:* ${objective}`,
      webOrInsta.trim() ? `🔗 *Page / Website:* ${webOrInsta.trim()}` : "",
      notes.trim() ? `📝 *Requirement:* ${notes.trim()}` : "",
      `━━━━━━━━━━━━━━━━━━━━`,
      `Hi Scale Game, I would like to consult with your team on our digital marketing strategy!`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleNext = () => {
    soundFx.playClick();
    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!clientName.trim()) {
        setError("Please enter your name.");
        return;
      }
      if (!clientPhone.trim()) {
        setError("Please enter your phone or WhatsApp number.");
        return;
      }
      if (!brandName.trim()) {
        setError("Please enter your business or brand name.");
        return;
      }

      setError("");
      setIsSubmitted(true);
      soundFx.playLevelUp();
    }
  };

  const handleReset = () => {
    setStep(1);
    setClientName("");
    setClientPhone("");
    setBrandName("");
    setLocation("");
    setWebOrInsta("");
    setNotes("");
    setIsSubmitted(false);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl bg-white border border-zinc-200 text-zinc-900 rounded-3xl p-6 sm:p-9 shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-950 hover:border-zinc-950 transition-colors bg-white shadow-xs"
          data-cursor="interactive"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-zinc-200/80 pb-3.5 mb-5 pr-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 font-semibold">
              SCALE GAME • START A PROJECT
            </span>
          </div>

          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-zinc-600 hover:text-zinc-950 transition-colors font-medium"
          >
            <Phone size={13} className="text-zinc-900" />
            <span>CALL: {DISPLAY_PHONE}</span>
          </a>
        </div>

        {!isSubmitted ? (
          <div>
            {/* Stepper Indicator */}
            <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-3">
              <span className="font-mono text-xs text-zinc-500 font-semibold">
                STEP 0{step} OF 02 • {step === 1 ? "SELECT OBJECTIVE" : "BUSINESS DETAILS"}
              </span>
              <div className="flex gap-2">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`w-8 h-1.5 rounded-full transition-colors ${
                      step >= s ? "bg-zinc-950" : "bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Objective Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="font-sans text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950 mb-1 leading-tight">
                    WHAT DO YOU WANT TO ACHIEVE?
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-600">
                    Choose the primary objective you want to achieve for your digital presence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                        className={`p-3.5 rounded-xl border text-left font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-white border-2 border-zinc-950 font-bold shadow-xs ring-2 ring-zinc-950/5 text-zinc-950"
                            : "bg-white text-zinc-800 border-[#D2D2D7] hover:border-zinc-400 hover:bg-[#FAFAFC] shadow-2xs"
                        }`}
                      >
                        <span className="truncate pr-2">{item}</span>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isSelected
                              ? "bg-zinc-950 text-white"
                              : "border border-zinc-300 bg-white"
                          }`}
                        >
                          {isSelected && <Check size={11} strokeWidth={3} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Accurate Business & Contact Questions */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-700 font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
                    GOAL: {objective}
                  </div>
                  <h3 className="font-sans text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950 mb-1 leading-tight">
                    TELL US ABOUT YOUR BUSINESS
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-600">
                    Provide your contact details so our growth team can review and reach out to you.
                  </p>
                </div>

                {/* Validation Error Message */}
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 font-mono text-xs rounded-xl">
                    <AlertCircle size={15} className="shrink-0 text-red-500" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-3.5">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 block mb-1 font-bold">
                        YOUR NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tony Israel"
                        value={clientName}
                        onChange={(e) => {
                          setClientName(e.target.value);
                          if (error) setError("");
                        }}
                        className={`w-full px-3.5 py-2.5 bg-zinc-50 border rounded-xl text-zinc-900 font-mono text-xs focus:outline-none placeholder:text-zinc-400 transition-colors ${
                          error && !clientName.trim()
                            ? "border-red-500 focus:border-red-400"
                            : "border-zinc-200 focus:border-zinc-950"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 block mb-1 font-bold">
                        PHONE / WHATSAPP NUMBER <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 93605 12623"
                        value={clientPhone}
                        onChange={(e) => {
                          setClientPhone(e.target.value);
                          if (error) setError("");
                        }}
                        className={`w-full px-3.5 py-2.5 bg-zinc-50 border rounded-xl text-zinc-900 font-mono text-xs focus:outline-none placeholder:text-zinc-400 transition-colors ${
                          error && !clientPhone.trim()
                            ? "border-red-500 focus:border-red-400"
                            : "border-zinc-200 focus:border-zinc-950"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Row 2: Business Name & City/Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 block mb-1 font-bold">
                        BUSINESS / BRAND NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Royal Silks, Apex Clinic"
                        value={brandName}
                        onChange={(e) => {
                          setBrandName(e.target.value);
                          if (error) setError("");
                        }}
                        className={`w-full px-3.5 py-2.5 bg-zinc-50 border rounded-xl text-zinc-900 font-mono text-xs focus:outline-none placeholder:text-zinc-400 transition-colors ${
                          error && !brandName.trim()
                            ? "border-red-500 focus:border-red-400"
                            : "border-zinc-200 focus:border-zinc-950"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 block mb-1 font-bold">
                        CITY / LOCATION (TAMIL NADU)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Karaikudi, Chennai, Madurai"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 font-mono text-xs focus:border-zinc-950 focus:outline-none placeholder:text-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Website or Instagram link (Optional) */}
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 block mb-1 font-bold">
                      WEBSITE OR INSTAGRAM PAGE (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. @scale.game or https://mybrand.com"
                      value={webOrInsta}
                      onChange={(e) => setWebOrInsta(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 font-mono text-xs focus:border-zinc-950 focus:outline-none placeholder:text-zinc-400 transition-colors"
                    />
                  </div>

                  {/* Row 5: Specific Notes / Message (Optional) */}
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 block mb-1 font-bold">
                      SPECIFIC REQUIREMENTS / NOTES (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Need Meta Ads & Lead Generation for our new store launch"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 font-mono text-xs focus:border-zinc-950 focus:outline-none placeholder:text-zinc-400 transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions Bar */}
            <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    setStep(step - 1);
                    setError("");
                  }}
                  className="font-mono text-xs text-zinc-500 hover:text-zinc-950 font-semibold transition-colors"
                >
                  ← BACK TO GOALS
                </button>
              ) : (
                <span className="font-mono text-xs text-zinc-400 font-medium">
                  SCALE GAME DIGITAL
                </span>
              )}

              <MagneticButton
                onClick={handleNext}
                className="px-7 py-3 bg-zinc-950 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all rounded-full shadow-md shadow-zinc-950/15 flex items-center gap-2"
              >
                <span>{step === 2 ? "SUBMIT BRIEF →" : "CONTINUE TO DETAILS →"}</span>
                <ArrowRight size={13} />
              </MagneticButton>
            </div>
          </div>
        ) : (
          /* Submission Success Screen */
          <div className="py-5 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
              <CheckCircle2 size={28} />
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold block">
                BRIEF SUBMITTED • CONFIRMED
              </span>
              <h3 className="font-sans text-2xl font-black uppercase text-zinc-950">
                WE&apos;RE READY TO WORK.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{clientName}</strong>. Your project brief for <strong>{brandName}</strong> has been recorded. Our team will contact you directly via WhatsApp / phone.
              </p>
            </div>

            {/* Summary Data */}
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 max-w-md mx-auto font-mono text-xs text-left space-y-1 text-zinc-700 shadow-2xs">
              <div>👤 <span className="text-zinc-400">NAME:</span> <span className="text-zinc-900 font-bold">{clientName}</span></div>
              <div>📱 <span className="text-zinc-400">PHONE:</span> <span className="text-zinc-900 font-bold">{clientPhone}</span></div>
              <div>🏢 <span className="text-zinc-400">BUSINESS:</span> <span className="text-zinc-900 font-bold">{brandName}</span></div>
              {location.trim() && (
                <div>📍 <span className="text-zinc-400">LOCATION:</span> <span className="text-zinc-900 font-bold">{location}</span></div>
              )}
              <div>🎯 <span className="text-zinc-400">GOAL:</span> <span className="text-zinc-900 font-bold">{objective}</span></div>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-full bg-emerald-600 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle size={15} />
                <span>CONNECT ON WHATSAPP</span>
              </a>
              <button
                onClick={handleReset}
                className="flex-1 py-3 px-5 rounded-full border border-zinc-300 text-zinc-800 font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-100 transition-all flex items-center justify-center gap-2"
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
