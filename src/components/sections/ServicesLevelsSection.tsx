"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Palette,
  Globe,
  Database,
  Camera,
  Video,
} from "lucide-react";
import { soundFx } from "../common/SoundController";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  badgeTags: string[];
  image: string;
  themeColor: string;
  bgColor: string;
  glowColor: string;
  icon: React.ElementType;
  statLabel: string;
  statValue: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "social-media-growth",
    number: "01",
    title: "SOCIAL MEDIA GROWTH",
    category: "Instagram Growth, Meta, WhatsApp, X & Viral Reach",
    description:
      "We engineer viral social media ecosystems through high-retention video content, algorithmic Reels strategies, and organic audience engagement funnels that build loyal brand followers.",
    badgeTags: ["Instagram Reels", "Viral Scripts", "Audience Growth", "Community Management"],
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#E11D48", // Vibrant Rose
    bgColor: "#FFF1F2",
    glowColor: "rgba(225, 29, 72, 0.28)",
    icon: TrendingUp,
    statLabel: "AUDIENCE REACH",
    statValue: "140K+ Monthly",
  },
  {
    id: "branding",
    number: "02",
    title: "BRANDING & VISUAL IDENTITY",
    category: "Luxury Identity, Fragrance & Online Brand Presence",
    description:
      "We design distinctive, premium brand identities that command instant respect. From luxury typography and bespoke color palettes to packaging and digital design systems.",
    badgeTags: ["Visual Identity", "Luxury Packaging", "Brand Guidelines", "Design Systems"],
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#D97706", // Amber Gold
    bgColor: "#FFFBEB",
    glowColor: "rgba(217, 119, 6, 0.28)",
    icon: Palette,
    statLabel: "BRAND VALUE",
    statValue: "100% Bespoke",
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "PERFORMANCE DIGITAL MARKETING",
    category: "Meta & Google Ads, Search Marketing & Lead Generation",
    description:
      "Data-backed performance ad campaigns designed for maximum return on ad spend. We rigorously test creatives, optimize target segments, and scale profitable client acquisition.",
    badgeTags: ["Meta Ads", "Google Search Ads", "Conversion Tracking", "ROAS Optimization"],
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#2563EB", // Royal Blue
    bgColor: "#EFF6FF",
    glowColor: "rgba(37, 99, 235, 0.28)",
    icon: Sparkles,
    statLabel: "AVG. ROAS",
    statValue: "4.8x Return",
  },
  {
    id: "web-app-development",
    number: "04",
    title: "WEB & APP DEVELOPMENT",
    category: "Web Platforms, Figma Prototyping & iOS/Android Apps",
    description:
      "We architect lightning-fast, conversion-focused websites and full-stack web applications. Built with modern frameworks, mobile responsiveness, and seamless user experiences.",
    badgeTags: ["Next.js & React", "Figma UI/UX", "iOS & Android", "High-Speed Hosting"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#0D9488", // Ocean Teal
    bgColor: "#F0FDFA",
    glowColor: "rgba(13, 148, 136, 0.28)",
    icon: Globe,
    statLabel: "PERFORMANCE",
    statValue: "99+ Lighthouse",
  },
  {
    id: "company-crms",
    number: "05",
    title: "COMPANY CRM & POS SYSTEMS",
    category: "Textile & Retail Billing, POS & Business Invoicing",
    description:
      "Custom business management platforms built for retail shops, hospitals, and enterprises. Streamline sales tracking, customer loyalty records, inventory, and automated GST billing.",
    badgeTags: ["Retail Billing", "POS Systems", "Inventory Control", "Customer Records"],
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#7C3AED", // Royal Violet
    bgColor: "#F5F3FF",
    glowColor: "rgba(124, 58, 237, 0.28)",
    icon: Database,
    statLabel: "TIME SAVED",
    statValue: "25+ Hrs/Wk",
  },
  {
    id: "photography",
    number: "06",
    title: "WEDDING & COMMERCIAL PHOTOGRAPHY",
    category: "In-Camera Wedding Films, Culinary & Product Shoots",
    description:
      "High-end cinematic visuals for luxury weddings, commercial brands, and culinary venues. We capture authentic emotions and product aesthetics with world-class production standards.",
    badgeTags: ["Cinematic 4K Films", "Studio Product Shoots", "Culinary Menus", "Lighting Design"],
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#B45309", // Warm Bronze
    bgColor: "#FEF3C7",
    glowColor: "rgba(180, 83, 9, 0.28)",
    icon: Camera,
    statLabel: "RESOLUTION",
    statValue: "4K Master Cinema",
  },
  {
    id: "content-production",
    number: "07",
    title: "CONTENT PRODUCTION & STUDIO EDITING",
    category: "Market Research, Concept Storyboards & Video Editing",
    description:
      "End-to-end studio content creation engineered to stop user scrolling. We write punchy scripts, direct studio shoots, and craft master edits optimized for maximum watch time.",
    badgeTags: ["Scriptwriting", "Concept Boards", "Sound Design", "Viral Hooks"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=85&w=1800&auto=format&fit=crop",
    themeColor: "#DC2626", // Studio Scarlet
    bgColor: "#FEF2F2",
    glowColor: "rgba(220, 38, 38, 0.28)",
    icon: Video,
    statLabel: "RETENTION",
    statValue: "85% Avg. Hook",
  },
];

export const ServicesLevelsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const lastIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dedicated pinned scroll track across all 7 services
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track scroll progression and smoothly transition active service sequentially
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

  // Silky smooth vertical crossfade & glide animation
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -30 : 30,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full bg-[#F8FAFC] text-zinc-900 border-b border-zinc-200/80"
      style={{ height: `${SERVICES.length * 80}vh` }}
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-tactical-grid opacity-60 pointer-events-none" />

      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 px-6 sm:px-12 overflow-hidden select-none">
        {/* Top Header Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mb-3 sm:mb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-2.5 h-2.5 rounded-full transition-colors duration-500 animate-pulse"
                style={{ backgroundColor: currentService.themeColor }}
              />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 font-semibold">
                OUR SERVICES
              </span>
              <h2 className="sr-only">
                Scale Game Digital Marketing &amp; Performance Services in Tamil Nadu
              </h2>
            </div>

            <div className="font-mono text-xs text-zinc-500 tracking-wider">
              SERVICE {currentIndex + 1} OF {SERVICES.length}
            </div>
          </div>
        </div>

        {/* Center Single Big Service Card: Luxury Obsidian Statement Box Styled like Ready to Scale */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 relative overflow-hidden rounded-3xl bg-zinc-950 text-white border border-white/10 shadow-2xl shadow-zinc-950/25">
          {/* Glowing Ambient Radial Aura inside the dark box */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-60"
            style={{ backgroundColor: currentService.glowColor }}
          />
          <div
            className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-40"
            style={{ backgroundColor: currentService.glowColor }}
          />
          <div className="absolute inset-0 bg-tactical-grid opacity-15 pointer-events-none" />

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentService.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden rounded-3xl"
            >
              {/* Top Bar inside Box: Service Number & Category Pill */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <span
                    className="font-mono text-xs font-black px-3.5 py-1 text-white rounded-full transition-colors duration-500 shadow-md"
                    style={{ backgroundColor: currentService.themeColor }}
                  >
                    SERVICE {currentService.number}
                  </span>
                  <span className="font-mono text-xs text-white/90 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm font-medium">
                    {currentService.category}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 border border-white/15 text-white/90 backdrop-blur-sm">
                  <Sparkles size={12} style={{ color: currentService.themeColor }} />
                  <span>{currentService.statLabel}: <strong className="text-white">{currentService.statValue}</strong></span>
                </div>
              </div>

              {/* Main Content Area: Split Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-3">
                {/* Left: Headline & Capabilities */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                    {currentService.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-normal max-w-xl">
                    {currentService.description}
                  </p>

                  {/* Capabilities Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {currentService.badgeTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/5 font-mono text-xs font-medium text-white/90 shadow-sm flex items-center gap-1.5"
                      >
                        <CheckCircle2
                          size={12}
                          style={{ color: currentService.themeColor }}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Cinematic Imagery with Depth Badge */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/15 bg-black/50 shadow-2xl group">
                    <motion.img
                      key={currentService.id}
                      src={currentService.image}
                      alt={`Scale Game — ${currentService.title}`}
                      initial={{ scale: 1.06, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.08]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Metric Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 shadow-md">
                      <span className="font-mono text-xs text-white/60 uppercase font-semibold">
                        {currentService.statLabel}
                      </span>
                      <span
                        className="font-mono text-sm font-black tracking-tight"
                        style={{ color: currentService.themeColor }}
                      >
                        {currentService.statValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Strip inside Box */}
              <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10 bg-black/40 backdrop-blur-md -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 lg:-mx-12 lg:-mb-12 p-5 sm:p-6 lg:p-8 rounded-b-3xl">
                <button
                  type="button"
                  onClick={() => handleWhatsAppInquiry(currentService)}
                  className="px-7 py-3.5 text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2.5 rounded-full shadow-xl hover:scale-105"
                  style={{
                    backgroundColor: currentService.themeColor,
                    boxShadow: `0 8px 30px ${currentService.glowColor}`,
                  }}
                  data-cursor="interactive"
                >
                  <MessageCircle size={16} />
                  <span>INQUIRE THIS SERVICE →</span>
                </button>

                <div className="flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="p-2.5 rounded-full border border-white/20 bg-white/5 hover:border-white text-white/80 hover:text-white disabled:opacity-30 disabled:hover:border-white/20 shadow-xs transition-all"
                    title="Previous Service"
                    data-cursor="interactive"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentIndex === SERVICES.length - 1}
                    className="p-2.5 rounded-full border border-white/20 bg-white/5 hover:border-white text-white/80 hover:text-white disabled:opacity-30 disabled:hover:border-white/20 shadow-xs transition-all"
                    title="Next Service"
                    data-cursor="interactive"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Station Numbers Strip: Interactive Quick Click */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mt-3 sm:mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none pb-1">
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
                      ? "text-white font-bold scale-105 shadow-md"
                      : "bg-white text-zinc-500 border-zinc-200 hover:text-zinc-900 hover:border-zinc-400 shadow-2xs"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: s.themeColor,
                          borderColor: s.themeColor,
                          boxShadow: `0 4px 16px ${s.glowColor}`,
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

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-zinc-500 tracking-wider uppercase shrink-0 font-medium">
            {currentIndex < SERVICES.length - 1 ? (
              <span>SCROLL DOWN TO ADVANCE • SERVICE {currentIndex + 1} OF {SERVICES.length}</span>
            ) : (
              <span style={{ color: currentService.themeColor }} className="font-bold">
                ALL SERVICES VIEWED • SCROLL TO ADVANCE
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
