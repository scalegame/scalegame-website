"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { soundFx } from "../common/SoundController";

const WORK_CATEGORIES = [
  {
    id: "hospital-crms",
    number: "01",
    title: "HOSPITAL CRMs",
    tag: "Patient Records & Clinic Systems",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "hospital-websites",
    number: "02",
    title: "HOSPITAL WEBSITES",
    tag: "Medical Web UX & Booking",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bike-showrooms",
    number: "03",
    title: "BIKE SHOWROOMS",
    tag: "Test-Ride Leads & Walk-ins",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "showrooms",
    number: "04",
    title: "CAR & BRAND SHOWROOMS",
    tag: "Footfall Blitz & Launches",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "websites",
    number: "05",
    title: "WEBSITES & WEB APPS",
    tag: "High-Speed UI/UX & SEO",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "app-downloads",
    number: "06",
    title: "APP DOWNLOAD CAMPAIGNS",
    tag: "Installs, Scale & Retention",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ecommerce",
    number: "07",
    title: "E-COMMERCE STORES",
    tag: "Catalog Sales & ROAS Funnels",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "restaurants",
    number: "08",
    title: "RESTAURANTS & CAFES",
    tag: "Food Reels, Menus & Footfalls",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "personal-branding",
    number: "09",
    title: "PERSONAL BRANDING",
    tag: "Executive Voice & Authority",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "commercial-shoots",
    number: "10",
    title: "PRODUCT & VIDEO SHOOTS",
    tag: "4K Video & Studio Lighting",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "salons-spas",
    number: "11",
    title: "SALONS & SPAS",
    tag: "Style Reels & VIP Bookings",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "real-estate",
    number: "12",
    title: "REAL ESTATE & ARCHITECTURE",
    tag: "Walkthroughs & Buyer Pipelines",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
];

export const WorkSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative w-full bg-[#050505] text-white py-14 sm:py-20 border-b border-white/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                [SECTION 06 // WHAT WE HAVE DONE]
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              WHAT WE HAVE DONE.
            </h2>
            <p className="mt-1 font-sans text-xs sm:text-sm text-white/60 max-w-lg">
              Hover over any sector to preview on-location work and campaign scopes.
            </p>
          </div>

          <div className="font-mono text-[10px] text-white/40 tracking-wider">
            12 PROVEN SECTORS
          </div>
        </div>

        {/* Compact & Sleek Grid: 4 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {WORK_CATEGORIES.map((cat) => {
            const isHovered = hoveredId === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => {
                  soundFx.playHover();
                  setHoveredId(cat.id);
                }}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="interactive"
                className={`relative h-28 sm:h-32 p-3 sm:p-3.5 border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? "border-white/60 bg-[#141414] shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                    : "border-white/10 bg-[#090909] hover:border-white/25"
                }`}
              >
                {/* Background Image: Only visible on hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <motion.img
                    src={cat.image}
                    alt={cat.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: isHovered ? 0.45 : 0,
                      scale: isHovered ? 1.04 : 1.1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/75 to-[#090909]/30 transition-opacity duration-200 ${
                      isHovered ? "opacity-90" : "opacity-0"
                    }`}
                  />
                  <div className="absolute inset-0 bg-tactical-grid opacity-10" />
                </div>

                {/* Top Row: Number + Small Simple Shooting Indicator */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-[10px] tracking-widest font-bold transition-colors ${
                      isHovered ? "text-white" : "text-white/30"
                    }`}
                  >
                    // {cat.number}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {/* Small simple shooting pulse badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.85,
                      }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1 px-1.5 py-0.2 border border-white/30 bg-black/80 rounded text-[8px] font-mono tracking-wider text-white"
                    >
                      <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                      <span>SHOT</span>
                    </motion.div>

                    <ArrowUpRight
                      size={12}
                      className={`transition-all ${
                        isHovered ? "text-white translate-x-0.5 -translate-y-0.5" : "text-white/20"
                      }`}
                    />
                  </div>
                </div>

                {/* Bottom Row: Title + Scope Tag */}
                <div className="relative z-10 space-y-0.5">
                  <h3
                    className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-tight line-clamp-1 transition-colors ${
                      isHovered ? "text-white" : "text-white/85"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className={`font-sans text-[10px] line-clamp-1 transition-colors ${
                      isHovered ? "text-white/80" : "text-white/40"
                    }`}
                  >
                    {cat.tag}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Clean Note */}
        <div className="mt-6 text-center">
          <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
            12 DOMAINS • PROVEN EXECUTION • ON-LOCATION PRODUCTION & DEVELOPMENT
          </span>
        </div>
      </div>
    </section>
  );
};
