"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Share2,
  BarChart3,
  Search,
  Layout,
  Palette,
  Video,
  Zap,
} from "lucide-react";
import { soundFx } from "../common/SoundController";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  category: "growth" | "performance" | "creative";
  tags: string[];
  icon: React.ElementType;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "DIGITAL MARKETING STRATEGY",
    description:
      "Business research, competitor analysis, audience targeting and strategic marketing plans designed to create sustainable business growth.",
    category: "growth",
    tags: ["Market Research", "Growth Blueprint"],
    icon: Compass,
  },
  {
    number: "02",
    title: "SOCIAL MEDIA MARKETING",
    description:
      "Strategic social media management, content planning, Instagram and Facebook growth, audience engagement and brand communication.",
    category: "growth",
    tags: ["Reels & Viral Reach", "Community Growth"],
    icon: Share2,
  },
  {
    number: "03",
    title: "PERFORMANCE MARKETING",
    description:
      "Data-driven Meta Ads and Google Ads campaigns focused on audience targeting, lead generation, campaign optimization and measurable results.",
    category: "performance",
    tags: ["Meta & Google Ads", "ROAS Focus"],
    icon: BarChart3,
  },
  {
    number: "04",
    title: "SEARCH ENGINE OPTIMIZATION (SEO)",
    description:
      "Technical SEO, keyword research, on-page optimization, local SEO and organic search strategies to improve Google visibility.",
    category: "performance",
    tags: ["Technical SEO", "Google Rankings"],
    icon: Search,
  },
  {
    number: "05",
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description:
      "Modern, responsive and conversion-focused websites designed to strengthen brand credibility and turn visitors into potential customers.",
    category: "creative",
    tags: ["Next.js Speed", "High-Converting UI"],
    icon: Layout,
  },
  {
    number: "06",
    title: "BRANDING & CREATIVE DESIGN",
    description:
      "Brand identity, logo design, visual communication, marketing creatives and consistent brand experiences that make businesses stand out.",
    category: "creative",
    tags: ["Brand Identity", "Visual Direction"],
    icon: Palette,
  },
  {
    number: "07",
    title: "VIDEO MARKETING & CONTENT PRODUCTION",
    description:
      "Creative reels, promotional videos, advertising videos, video editing and storytelling designed to capture attention and communicate brand value.",
    category: "creative",
    tags: ["Cinema Reels", "Studio Storytelling"],
    icon: Video,
  },
  {
    number: "08",
    title: "LEAD GENERATION & CONVERSION OPTIMIZATION",
    description:
      "Lead generation funnels, landing page optimization, WhatsApp enquiry systems and conversion strategies designed to turn prospects into customers.",
    category: "performance",
    tags: ["Lead Funnels", "WhatsApp Leads"],
    icon: Zap,
  },
];

const CATEGORIES = [
  { id: "all", label: "ALL SERVICES" },
  { id: "growth", label: "STRATEGY & SOCIAL" },
  { id: "performance", label: "PERFORMANCE & ADS" },
  { id: "creative", label: "CREATIVE & TECH" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 1. Digital Marketing Strategy Visual
const StrategyVisual = () => (
  <div className="relative w-full h-full bg-[#080D1A] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-blue-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-[9px] font-bold">
        <span>📍 TAMIL NADU &amp; PAN-INDIA BLUEPRINT</span>
      </div>
      <div className="flex items-center justify-between w-full px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/90">
        <span>CAC vs LTV Sprint</span>
        <span className="text-emerald-400 font-bold">₹10L - ₹1Cr+ Scale</span>
      </div>
    </div>
  </div>
);

// 2. Social Media Marketing Visual
const SocialVisual = () => (
  <div className="relative w-full h-full bg-[#0E0B1A] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-purple-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-xs">
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <div className="w-6 h-6 rounded-lg bg-[#1877F2] flex items-center justify-center shadow-xs">
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        <span className="font-mono text-[10px] text-white font-bold tracking-tight">Reels &amp; Viral Reach</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[9px] font-mono text-zinc-300">
        <span>❤️ 120K+ Views</span>
        <span className="text-zinc-500">•</span>
        <span>💬 Active Tamil Community</span>
      </div>
    </div>
  </div>
);

// 3. Performance Marketing Visual (Meta & Google Ads - ₹ INR Spend vs Revenue)
const PerformanceVisual = () => (
  <div className="relative w-full h-full bg-[#06141A] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-emerald-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="flex items-center justify-between w-full px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-[9px] font-mono">
        <span className="text-zinc-300">₹ Spend: ₹45K</span>
        <span className="text-emerald-400 font-black">₹ Revenue: ₹2.16L</span>
      </div>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[9px] font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>4.8X BLENDED ROAS • META &amp; GOOGLE</span>
      </div>
    </div>
  </div>
);

// 4. SEO Visual (Google Search & GMB Local Pack)
const SeoVisual = () => (
  <div className="relative w-full h-full bg-[#08101E] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-blue-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="w-full flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 border border-white/15 text-[9px] font-mono text-zinc-300">
        <span className="text-blue-400 font-bold">G</span>
        <span className="truncate">&quot;best marketing agency tamil nadu&quot;</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[9px] font-bold">
          🥇 Rank #1 Position
        </span>
        <span className="font-mono text-[9px] text-zinc-400">
          5.0 ★ GMB Pack
        </span>
      </div>
    </div>
  </div>
);

// 5. Website Design Visual (Next.js Speed & WhatsApp Integration)
const WebDevVisual = () => (
  <div className="relative w-full h-full bg-[#0A121A] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-cyan-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="flex items-center justify-between w-full px-2 py-1 rounded bg-white/10 border border-white/15 text-[9px] font-mono text-white">
        <span>⚡ 99/100 PageSpeed</span>
        <span className="text-cyan-400 font-bold">Next.js 14</span>
      </div>
      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-mono text-[9px] font-bold">
        <span>1-Click WhatsApp Lead Funnel Ready</span>
      </div>
    </div>
  </div>
);

// 6. Branding Visual (High-Stopping-Power Creatives)
const BrandingVisual = () => (
  <div className="relative w-full h-full bg-[#120D1A] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-pink-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-2">
        <span className="font-sans text-xs font-black text-white tracking-tighter">SCALE GAME</span>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
        </div>
      </div>
      <div className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[9px] font-mono text-zinc-300">
        High-Stopping-Power Ad Creatives &amp; Logo Kits
      </div>
    </div>
  </div>
);

// 7. Video Marketing Visual (Cinematic 4K Reels & Hooks)
const VideoVisual = () => (
  <div className="relative w-full h-full bg-[#140A0F] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-rose-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/20 border border-red-400/40 text-red-300 font-mono text-[9px] font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span>REC 4K • 3-SEC HOOK RETENTION: 84%</span>
      </div>
      <div className="text-[9px] font-mono text-zinc-400">
        Cinema Ad Scripts • Tamil &amp; English Reels
      </div>
    </div>
  </div>
);

// 8. Lead Generation Visual (Direct WhatsApp Lead Flow)
const LeadGenVisual = () => (
  <div className="relative w-full h-full bg-[#051510] flex flex-col justify-center items-center p-3 select-none overflow-hidden">
    <div className="absolute inset-0 bg-tactical-grid opacity-25" />
    <div className="absolute w-32 h-32 rounded-full bg-emerald-500/15 blur-xl pointer-events-none" />

    <div className="relative z-10 w-full flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-mono text-[9px] font-bold">
        <span>💬 +91 93605... &quot;Interested in your services!&quot;</span>
      </div>
      <div className="flex items-center gap-2 font-mono text-[9px] text-emerald-300">
        <span>✅ Inbound Lead Captured</span>
        <span className="text-zinc-500">•</span>
        <span>91% Quality Rate</span>
      </div>
    </div>
  </div>
);

const renderServiceVisual = (number: string) => {
  switch (number) {
    case "01":
      return <StrategyVisual />;
    case "02":
      return <SocialVisual />;
    case "03":
      return <PerformanceVisual />;
    case "04":
      return <SeoVisual />;
    case "05":
      return <WebDevVisual />;
    case "06":
      return <BrandingVisual />;
    case "07":
      return <VideoVisual />;
    case "08":
      return <LeadGenVisual />;
    default:
      return null;
  }
};

// Compact, Apple-Grade Interactive Spotlight Card
const ServiceCard: React.FC<{
  service: ServiceItem;
  onInquire: (title: string) => void;
}> = ({ service, onInquire }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        soundFx.playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onInquire(service.title)}
      data-cursor="interactive"
      className="group relative h-full flex flex-col justify-between rounded-2xl bg-white border border-[#D2D2D7] p-4 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#86868B]/70 hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer select-none overflow-hidden"
    >
      {/* Subtle Silver Spotlight effect on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-0"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 247, 0.3) 50%, transparent 80%)`,
          }}
        />
      )}

      {/* Top Graphic Picture Frame (Hyper-Relevant Visual Engine) */}
      <div className="relative w-full h-28 sm:h-32 rounded-xl overflow-hidden mb-3 border border-[#D2D2D7]/70 bg-zinc-900 z-10">
        {renderServiceVisual(service.number)}

        {/* Floating Number Badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs font-mono text-[11px] font-bold text-[#1D1D1F] z-20">
          {service.number}
        </div>

        {/* Floating Minimal Monochrome Line Icon */}
        <div className="absolute top-2 right-2 w-7 h-7 rounded-md bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-center text-[#1D1D1F] shadow-2xs group-hover:scale-110 group-hover:bg-white transition-all duration-300 z-20">
          <Icon size={14} strokeWidth={1.8} />
        </div>

        {/* Deliverables Mini Tag Pills */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 overflow-hidden z-20">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-mono text-[9px] tracking-wider uppercase font-medium border border-white/10 truncate"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Service Info */}
      <div className="flex-1 flex flex-col z-10">
        <h3 className="font-mono text-xs sm:text-sm font-bold tracking-tight text-[#1D1D1F] uppercase leading-snug group-hover:text-black transition-colors">
          {service.title}
        </h3>
        <p className="mt-1.5 font-sans text-xs text-[#86868B] leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Bottom Action UX: Apple Tactile Pill Button */}
      <div className="pt-3 mt-3 border-t border-[#E8E8ED] flex items-center justify-between z-10">
        <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F] tracking-widest uppercase flex items-center gap-1.5 transition-all duration-200 group-hover:bg-[#1D1D1F] group-hover:text-white group-hover:px-2.5 group-hover:py-1 group-hover:rounded-full group-hover:shadow-2xs">
          <span>EXPLORE SERVICE</span>
          <span className="text-[#86868B] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </span>
      </div>
    </motion.div>
  );
};

export const ServicesLevelsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleServiceInquiry = (title: string) => {
    soundFx.playClick();
    const text = `Hi Scale Game, I am interested in your *${title}* service. Please share details and pricing!`;
    const url = `https://wa.me/919360512623?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] py-8 sm:py-12 px-6 sm:px-12 border-b border-[#D2D2D7]/80 overflow-hidden"
    >
      {/* Background Architectural Subtle Grid & Silver Luminous Gradient */}
      <div className="absolute inset-0 bg-tactical-grid opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 247, 0) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 mb-2.5 px-3 py-1 rounded-full bg-white border border-[#D2D2D7] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] font-semibold">
              WHAT WE DO
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1D1D1F] leading-[1.1]">
                Digital Solutions.
                <br />
                <span className="text-[#86868B]">Designed for Growth.</span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#86868B] max-w-md leading-relaxed border-l-2 border-[#D2D2D7] pl-3.5 sm:pl-4">
              Comprehensive growth and performance capabilities engineered for consumer brands, enterprise ecosystems, and ambitious businesses across Tamil Nadu and India.
            </p>
          </div>

          {/* Minimal Apple-Style Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  data-cursor="interactive"
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#1D1D1F] text-white shadow-xs"
                      : "bg-white text-[#86868B] hover:text-[#1D1D1F] border border-[#D2D2D7] hover:border-[#86868B]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Bento-Style Spotlight Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
                onInquire={handleServiceInquiry}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
