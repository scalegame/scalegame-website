"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  MessageSquare,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  badgeTags: string[];
  image: string;
  themeColor: string;
  glowColor: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "social-media-growth",
    number: "01",
    title: "SOCIAL MEDIA GROWTH",
    category: "Instagram Growth, Meta, WhatsApp, X & Viral Reach",
    badgeTags: ["Instagram", "WhatsApp", "Facebook", "X"],
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#14b8a6", // Deep Emerald Teal
    glowColor: "rgba(20, 184, 166, 0.22)",
  },
  {
    id: "branding",
    number: "02",
    title: "BRANDING",
    category: "Luxury Fragrance & Online Brand Identity",
    badgeTags: ["Perfume & Luxury Packaging", "Visual Identity", "Online Brand Presence"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#b48356", // Luxury Warm Mocha / Leather Brown
    glowColor: "rgba(180, 131, 86, 0.22)",
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "DIGITAL MARKETING",
    category: "Top-Angle City Network & One-to-One Interconnect",
    badgeTags: ["City Network Grid", "One-to-One Interconnect", "Multi-Node Ad Targeting"],
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#3b82f6", // Sapphire Royal Blue
    glowColor: "rgba(59, 130, 246, 0.22)",
  },
  {
    id: "web-app-development",
    number: "04",
    title: "WEB & APP DEVELOPMENT",
    category: "Web Platforms, Figma Prototyping & Mobile Apps",
    badgeTags: ["Web Engineering", "Figma UI Prototyping", "iOS & Android Apps"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#06b6d4", // Ocean Teal / Electric Slate
    glowColor: "rgba(6, 182, 212, 0.22)",
  },
  {
    id: "company-crms",
    number: "05",
    title: "COMPANY CRM's",
    category: "Textile & Retail Billing, POS & Business Invoicing",
    badgeTags: ["Textile Billing Systems", "Retail POS Checkout", "Inventory & Accounting"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#60a5fa", // Corporate Steel Blue & Platinum
    glowColor: "rgba(96, 165, 250, 0.22)",
  },
  {
    id: "photography",
    number: "06",
    title: "WEDDING & COMMERCIAL PHOTOGRAPHY",
    category: "In-Camera Wedding Films, Culinary & Product Shoots",
    badgeTags: ["Cinematic Wedding Films", "Gourmet Culinary Shoots", "Studio Products in Camera"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#a3704c", // Rich Chestnut / Walnut Brown
    glowColor: "rgba(163, 112, 76, 0.22)",
  },
  {
    id: "content-production",
    number: "07",
    title: "CONTENT PRODUCTION",
    category: "Research, Concept Development & Studio Film Execution",
    badgeTags: ["Market Research & Scripting", "Concept Storyboards", "4K Video Editing"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#2dd4bf", // Nordic Marine Teal
    glowColor: "rgba(45, 212, 191, 0.22)",
  },
];

export const ServicesLevelsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const lastIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dedicated pinned scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track scroll progression and smoothly transition active service
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const total = SERVICES.length;
      const rawIndex = Math.floor(latest * total);
      const nextIndex = Math.min(total - 1, Math.max(0, rawIndex));

      if (nextIndex !== lastIndexRef.current) {
        setDirection(nextIndex > lastIndexRef.current ? 1 : -1);
        lastIndexRef.current = nextIndex;
        setCurrentIndex(nextIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentService = SERVICES[currentIndex];

  const scrollToService = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll = scrollTop + (index / (SERVICES.length - 1)) * totalScrollable;

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 0.8 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentIndex < SERVICES.length - 1) {
      scrollToService(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToService(currentIndex - 1);
    }
  };

  const handleWhatsAppInquiry = (service: ServiceItem) => {
    const text = `Hi Scale Game, I am interested in your *${service.title}* service. Please share details and pricing!`;
    const url = `https://wa.me/919360512623?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Silky smooth vertical crossfade & glide
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="services"
      ref={containerRef}
      // Pinned track height ensures all 7 services must be viewed before continuing down
      className="relative w-full bg-[#050505] text-white"
      style={{ height: `${SERVICES.length * 85}vh` }}
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-10 overflow-hidden select-none">
        {/* Subtle Ambient Radial Glow tinted with the service palette */}
        <div
          className="absolute inset-0 pointer-events-none transition-colors duration-1000"
          style={{
            background: `radial-gradient(circle 800px at 50% 50%, ${currentService.glowColor}, transparent 75%)`,
          }}
        />

        {/* Top Header Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mb-3 sm:mb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-2.5 h-2.5 rounded-full transition-colors duration-700"
                style={{ backgroundColor: currentService.themeColor }}
              />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                [SECTION 04 // OUR SERVICES]
              </span>
            </div>

            <div className="font-mono text-[11px] text-zinc-400 tracking-wider">
              SERVICE {currentIndex + 1} OF {SERVICES.length}
            </div>
          </div>
        </div>

        {/* Center Single Big Service Box: Seamless, No Bright Border, Circular Radius & Deep Inset Shadow */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#070707] shadow-[inset_0_0_100px_rgba(0,0,0,0.95),0_30px_90px_rgba(0,0,0,0.95)]">
          {/* Deep Inset Shadow Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-[2rem] sm:rounded-[2.5rem] shadow-[inset_0_0_110px_rgba(0,0,0,0.92),inset_0_0_20px_rgba(255,255,255,0.03)]" />

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentService.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 sm:p-12 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
            >
              {/* Animated Best Quality Color Photography Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  src={currentService.image}
                  alt={currentService.title}
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.72 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.08]"
                />
                {/* Cinematic Depth Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
                <div className="absolute inset-0 bg-tactical-grid opacity-10 pointer-events-none" />
              </div>

              {/* Top Bar inside Box: Dynamic Context Badges */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span
                    className="font-mono text-xs sm:text-sm font-black px-3.5 py-1 text-black rounded-full transition-colors duration-500 shadow-md"
                    style={{ backgroundColor: currentService.themeColor }}
                  >
                    {currentService.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-black/60 text-white/90 border border-white/15 backdrop-blur-md flex items-center gap-1.5">
                    {currentIndex === 0 && (
                      <svg className="w-3.5 h-3.5 fill-current text-pink-400 shrink-0" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    <span>{currentService.category}</span>
                  </span>
                </div>

                {/* Specific Engagement / Feature Pills */}
                {currentIndex === 0 && (
                  <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-white/80 bg-black/70 px-3.5 py-1 rounded-full border border-white/15 backdrop-blur-sm">
                    <span className="flex items-center gap-1.5 text-pink-400 font-bold">
                      INSTAGRAM GROWTH
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1 text-pink-400">
                      <Heart size={12} className="fill-current" /> 140K+
                    </span>
                    <span className="flex items-center gap-1 text-teal-400">
                      <MessageSquare size={12} /> 28K
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Share2 size={12} /> 65K
                    </span>
                  </div>
                )}

                {currentIndex !== 0 && (
                  <div className="hidden sm:flex items-center gap-1.5">
                    {currentService.badgeTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] text-white/70 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Center: Service Name in Balanced, Crisp Typography */}
              <div className="relative z-10 my-auto py-6">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-[0_12px_40px_rgba(0,0,0,0.98)] select-none max-w-4xl">
                  {currentService.title}
                </h3>
              </div>

              {/* Bottom Strip: Rounded Buttons & Controls */}
              <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10 bg-black/50 backdrop-blur-md -mx-6 -mb-6 sm:-mx-12 sm:-mb-12 p-6 sm:p-8">
                <button
                  type="button"
                  onClick={() => handleWhatsAppInquiry(currentService)}
                  className="px-8 py-3.5 bg-white text-black font-mono text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-2.5 rounded-full shadow-xl"
                  data-cursor="interactive"
                  style={{
                    boxShadow: `0 0 30px ${currentService.glowColor}`,
                  }}
                >
                  <MessageCircle size={16} />
                  <span>INQUIRE THIS SERVICE →</span>
                </button>

                <div className="flex items-center gap-2.5 justify-end">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="px-4 py-2.5 border border-white/15 hover:border-white/40 disabled:opacity-30 disabled:hover:border-white/15 bg-black/60 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-full"
                    title="Previous Service"
                    data-cursor="interactive"
                  >
                    <ChevronLeft size={16} />
                    <span>PREV</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentIndex === SERVICES.length - 1}
                    className="px-5 py-2.5 border border-white/20 hover:border-white disabled:opacity-30 disabled:hover:border-white/20 bg-black/60 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 rounded-full shadow-md"
                    title="Next Service"
                    data-cursor="interactive"
                  >
                    <span>NEXT</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Station Numbers Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mt-3 sm:mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3 overflow-x-auto scrollbar-none pb-1">
          <div className="flex items-center gap-2">
            {SERVICES.map((s, i) => {
              const isActive = i === currentIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToService(i)}
                  className={`px-3.5 py-1 font-mono text-xs tracking-wider transition-all rounded-full border ${
                    isActive
                      ? "text-black font-black scale-105 shadow-md"
                      : "bg-black/50 text-zinc-400 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: s.themeColor,
                          borderColor: s.themeColor,
                          boxShadow: `0 0 15px ${s.glowColor}`,
                        }
                      : {}
                  }
                  title={s.title}
                  data-cursor="interactive"
                >
                  {s.number}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-widest uppercase shrink-0">
            {currentIndex < SERVICES.length - 1 ? (
              <span>SCROLL DOWN TO ADVANCE</span>
            ) : (
              <span style={{ color: currentService.themeColor }} className="font-bold">
                ALL SERVICES VIEWED • SCROLL FOR NEXT SECTION
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
