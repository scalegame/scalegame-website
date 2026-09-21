"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  X,
  ArrowDownRight,
  Calendar,
  Rocket,
  CheckCheck,
  Users,
} from "lucide-react";
import { soundFx } from "../common/SoundController";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  animaticType:
    | "marketing"
    | "reels"
    | "web_app"
    | "ecommerce"
    | "branding"
    | "movie"
    | "influencer"
    | "product"
    | "culinary"
    | "wedding"
    | "custom";
  lifecycle: {
    meet: string;
    start: string;
    execute: string;
    end: string;
  };
  timeline: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "marketing",
    number: "01",
    title: "MARKETING & GROWTH",
    category: "Digital Strategy & Ads",
    description:
      "Comprehensive performance marketing, Meta & Google ad campaigns, and audience growth strategies.",
    capabilities: ["Meta & Google Ads", "Social Media Strategy", "Lead Funnels"],
    animaticType: "marketing",
    timeline: "14 - 30 DAYS",
    lifecycle: {
      meet: "Initial 1-on-1 strategy call to review your target market, competitors & growth goals.",
      start: "We design target buyer personas, write high-converting ad copy & build your campaign structure.",
      execute: "Launch targeted ad campaigns on Meta & Google with daily data optimization & A/B testing.",
      end: "Final performance handoff report, weekly ROAS tracking dashboard & scaled ad funnels.",
    },
  },
  {
    id: "reels",
    number: "02",
    title: "REELS & SHORT-FORM VIDEO",
    category: "Viral Visual Content",
    description:
      "High-retention video reels, TikToks, and Shorts engineered to hook viewers instantly.",
    capabilities: ["Scripting & Hooks", "High-Retention Editing", "Trending Audio FX"],
    animaticType: "reels",
    timeline: "7 - 14 DAYS",
    lifecycle: {
      meet: "Creative alignment meeting to select content themes, visual style & brand voice.",
      start: "We draft high-retention video scripts, trending hooks & visual shot lists.",
      execute: "Professional video filming or raw clip editing with motion FX, sound design & captions.",
      end: "Delivery of ready-to-post 4K video files optimized for Instagram, TikTok & YouTube Shorts.",
    },
  },
  {
    id: "web_app",
    number: "03",
    title: "WEBSITE & APP DEVELOPMENT",
    category: "Digital Flagships & Apps",
    description:
      "Custom responsive websites, landing pages, and iOS & Android mobile applications.",
    capabilities: ["Custom Web Coding", "iOS & Android Apps", "UI/UX Design"],
    animaticType: "web_app",
    timeline: "21 - 45 DAYS",
    lifecycle: {
      meet: "Technical discovery session to map your website structure, features & user journey.",
      start: "UX wireframing, high-fidelity UI design prototypes & technology stack architecture.",
      execute: "Custom front-end and back-end development with lightning-fast speed & mobile responsiveness.",
      end: "Live domain deployment, SSL setup, speed optimization, and complete source code handoff.",
    },
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-COMMERCE SETUP",
    category: "Online Stores & Funnels",
    description:
      "Shopify & custom store development, payment gateway setup, and checkout optimization.",
    capabilities: ["Shopify & Custom Stores", "Payment Gateway Setup", "Checkout CRO"],
    animaticType: "ecommerce",
    timeline: "14 - 30 DAYS",
    lifecycle: {
      meet: "Catalog & product review meeting to establish payment gateways, currencies & shipping rules.",
      start: "Store visual theme customization, product page layouts & automated checkout integration.",
      execute: "Payment gateway testing, abandoned cart email automation & catalog feed configuration.",
      end: "Turnkey live store launch ready to accept customer orders & process payments globally.",
    },
  },
  {
    id: "branding",
    number: "05",
    title: "PERSONAL BRANDING",
    category: "Executive & Founder Presence",
    description:
      "High-authority personal branding for founders, executives, and public figures.",
    capabilities: ["Executive Positioning", "LinkedIn & Instagram Growth", "Media Authority"],
    animaticType: "branding",
    timeline: "30 - 60 DAYS",
    lifecycle: {
      meet: "1-on-1 interview session to extract your core story, expertise, and leadership tone.",
      start: "Profile design makeover, bio architecture, and monthly editorial content calendar.",
      execute: "Ghostwriting high-impact thought leadership posts, carousel graphics & executive reels.",
      end: "Established personal brand authority, organic follower growth & podcast/PR media features.",
    },
  },
  {
    id: "movie",
    number: "06",
    title: "MOVIE & ENTERTAINMENT PROMO",
    category: "Film & Media Campaigns",
    description:
      "Strategic promotion, trailer release buzz, and audience hype for films and media projects.",
    capabilities: ["Trailer Release Hype", "Film PR & Promotion", "Social Media Takeovers"],
    animaticType: "movie",
    timeline: "14 - 30 DAYS",
    lifecycle: {
      meet: "Film production briefing meeting with directors/producers to align on release milestones.",
      start: "Teaser countdown calendar, viral meme strategy, and influencer trailer reaction roadmap.",
      execute: "Multi-platform ad push, trending hashtag takeover, and press distribution across media.",
      end: "Maximum premiere weekend audience turnout, high box-office hype & viral reach metrics.",
    },
  },
  {
    id: "influencer",
    number: "07",
    title: "INFLUENCER MARKETING",
    category: "Creator Networks",
    description:
      "High-impact creator collaborations, vernacular influencer networks, and UGC whitelisting.",
    capabilities: ["Creator Campaign Setup", "Micro & Macro Networks", "UGC Whitelisting"],
    animaticType: "influencer",
    timeline: "14 - 21 DAYS",
    lifecycle: {
      meet: "Creator selection meeting matching your brand with verified regional & niche influencers.",
      start: "Outreach, contract execution, script guidelines, and product sample distribution to creators.",
      execute: "Coordinated influencer posting schedule with tracked promo codes & paid ad whitelisting.",
      end: "Delivery of high-performing UGC video assets, campaign reach report & customer trust boost.",
    },
  },
  {
    id: "product",
    number: "08",
    title: "PRODUCT SHOOTS",
    category: "Commercial Photography",
    description:
      "High-definition commercial studio and lifestyle product photography for physical items.",
    capabilities: ["Studio Product Photos", "360° Commercial Video", "Set & Prop Styling"],
    animaticType: "product",
    timeline: "7 - 14 DAYS",
    lifecycle: {
      meet: "Sample delivery & moodboard review to finalize background colors, props & lighting style.",
      start: "Studio set build, professional lighting arrangement & camera angle positioning.",
      execute: "High-resolution commercial photography & 360° video recording under studio lights.",
      end: "Retouched, color-graded, high-res web & print product images ready for your store.",
    },
  },
  {
    id: "culinary",
    number: "09",
    title: "CULINARY SHOOTS",
    category: "Food & Restaurant Visuals",
    description:
      "Mouth-watering food photography, restaurant promo reels, and chef spotlight videography.",
    capabilities: ["Gourmet Food Styling", "Restaurant Promo Reels", "Chef Spotlight Stories"],
    animaticType: "culinary",
    timeline: "5 - 10 DAYS",
    lifecycle: {
      meet: "On-site restaurant consultation to select signature dishes & shoot timing.",
      start: "Gourmet food styling, kitchen lighting setup & table arrangement.",
      execute: "Capturing sizzling action videos, cinematic dish close-ups & kitchen prep reels.",
      end: "Delivery of edited promotional food reels & high-res digital menu images.",
    },
  },
  {
    id: "wedding",
    number: "10",
    title: "WEDDING & EVENT SHOOTS",
    category: "Cinematic Film & Photo",
    description:
      "Cinematic wedding highlight films, pre-wedding storytelling, and celebration photography.",
    capabilities: ["Cinematic Wedding Films", "Pre-Wedding Shoots", "Drone Aerial Video"],
    animaticType: "wedding",
    timeline: "14 - 21 DAYS",
    lifecycle: {
      meet: "Pre-event meeting with the couple/hosts to map out the schedule, locations & key moments.",
      start: "Multi-camera setup, aerial drone prep & lighting check before event commencement.",
      execute: "Discreet cinematic filming, candid portraiture & high-definition ceremony capture.",
      end: "Cinematic 4K wedding trailer film, full event video & color-corrected photo gallery.",
    },
  },
  {
    id: "custom",
    number: "11",
    title: "CUSTOM COMMERCIAL SHOOTS",
    category: "Bespoke Visual Production",
    description:
      "Tailored photography & videography for fashion, real estate, and commercial brand projects.",
    capabilities: ["Fashion Lookbooks", "Real Estate Video", "Corporate Coverage"],
    animaticType: "custom",
    timeline: "7 - 21 DAYS",
    lifecycle: {
      meet: "Bespoke production call to review your script, location scout requirements & team size.",
      start: "Talent casting, equipment prep, call sheet distribution & director planning.",
      execute: "Professional multi-member crew shoot with 4K cinema cameras, audio & lighting.",
      end: "Master commercial video edit, sound design, social media cuts & full commercial licensing.",
    },
  },
];

// Vector Animatic Graphics
const AnimaticIllustration: React.FC<{ type: ServiceItem["animaticType"] }> = ({ type }) => {
  return (
    <div className="w-full h-28 bg-black/60 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-colors">
      <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />

      {type === "marketing" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <path d="M 20 80 L 60 50 L 100 65 L 140 30 L 180 15" strokeDasharray="3 3" className="opacity-40" />
          <path d="M 20 80 L 60 50 L 100 65 L 140 30 L 180 15" />
          <circle cx="60" cy="50" r="3" fill="white" />
          <circle cx="100" cy="65" r="3" fill="white" />
          <circle cx="140" cy="30" r="3" fill="white" />
          <circle cx="180" cy="15" r="4" fill="white" />
          <circle cx="180" cy="15" r="8" className="animate-ping opacity-60" />
        </svg>
      )}

      {type === "reels" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <rect x="75" y="10" width="50" height="80" rx="6" />
          <polygon points="95,43 112,50 95,57" fill="white" />
          <line x1="83" y1="80" x2="117" y2="80" strokeWidth="2" opacity="0.4" />
        </svg>
      )}

      {type === "web_app" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <rect x="30" y="15" width="90" height="60" rx="3" />
          <line x1="30" y1="28" x2="120" y2="28" opacity="0.3" />
          <circle cx="38" cy="21" r="1.5" fill="white" />
          <circle cx="44" cy="21" r="1.5" fill="white" />
          <rect x="110" y="30" width="45" height="60" rx="4" fill="#090909" />
          <rect x="110" y="30" width="45" height="60" rx="4" />
        </svg>
      )}

      {type === "ecommerce" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <path d="M 45 25 L 65 25 L 80 70 L 140 70 L 155 40 L 70 40" />
          <circle cx="85" cy="82" r="5" fill="white" />
          <circle cx="135" cy="82" r="5" fill="white" />
        </svg>
      )}

      {type === "branding" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <circle cx="100" cy="50" r="24" />
          <path d="M 92 50 L 98 56 L 110 44" strokeWidth="2" />
          <path d="M 85 22 L 92 28 L 100 20 L 108 28 L 115 22 L 112 32 L 88 32 Z" fill="white" opacity="0.8" />
        </svg>
      )}

      {type === "movie" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <circle cx="70" cy="50" r="22" />
          <circle cx="70" cy="50" r="8" fill="white" />
          <polygon points="105,35 165,20 165,80 105,65" opacity="0.3" fill="white" />
          <line x1="105" y1="35" x2="165" y2="20" strokeDasharray="3 3" />
          <line x1="105" y1="65" x2="165" y2="80" strokeDasharray="3 3" />
        </svg>
      )}

      {type === "influencer" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <path d="M 50 40 L 80 30 L 80 70 L 50 60 Z" fill="white" opacity="0.2" />
          <path d="M 50 40 L 80 30 L 80 70 L 50 60 Z" />
          <path d="M 90 35 Q 110 50 90 65" opacity="0.6" />
          <path d="M 100 25 Q 130 50 100 75" opacity="0.4" />
          <circle cx="145" cy="40" r="3" fill="white" />
          <circle cx="160" cy="60" r="2" fill="white" />
        </svg>
      )}

      {type === "product" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <rect x="55" y="20" width="90" height="55" rx="5" />
          <circle cx="100" cy="47" r="16" />
          <circle cx="100" cy="47" r="5" fill="white" />
          <circle cx="130" cy="30" r="3" fill="white" />
        </svg>
      )}

      {type === "culinary" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <path d="M 50 70 Q 100 20 150 70 Z" />
          <circle cx="100" cy="20" r="4" fill="white" />
          <line x1="40" y1="75" x2="160" y2="75" strokeWidth="2" />
        </svg>
      )}

      {type === "wedding" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <circle cx="85" cy="50" r="20" />
          <circle cx="115" cy="50" r="20" />
          <path d="M 100 24 L 102 30 L 108 32 L 102 34 L 100 40 L 98 34 L 92 32 L 98 30 Z" fill="white" />
        </svg>
      )}

      {type === "custom" && (
        <svg viewBox="0 0 200 100" className="w-32 h-20 text-white stroke-current fill-none stroke-[1.5]">
          <rect x="50" y="35" width="100" height="55" rx="3" />
          <path d="M 50 35 L 150 35 L 140 20 L 40 20 Z" />
          <circle cx="100" cy="62" r="10" strokeDasharray="3 3" opacity="0.6" />
        </svg>
      )}
    </div>
  );
};

export const ServicesLevelsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  // Form State for Direct Custom Service Entry
  const [customServiceText, setCustomServiceText] = useState("");
  const [customName, setCustomName] = useState("");
  const [formError, setFormError] = useState("");
  const [formSent, setFormSent] = useState(false);

  // Duplicated list for infinite seamless horizontal marquee loop
  const marqueeList = [...SERVICES, ...SERVICES];

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    soundFx.playClick();
    const scrollAmount = direction === "left" ? -350 : 350;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleOpenDashboard = (service: ServiceItem) => {
    soundFx.playClick();
    setSelectedService(service);
    setTimeout(() => {
      if (dashboardRef.current) {
        dashboardRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 100);
  };

  const handleCloseDashboard = () => {
    soundFx.playClick();
    setSelectedService(null);
  };

  const handleWhatsAppInquiry = (service: ServiceItem) => {
    soundFx.playClick();
    const messageLines = [
      `🚀 *SERVICE INQUIRY — SCALE GAME*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `📋 *Selected Service:* ${service.title}`,
      `🏷️ *Category:* ${service.category}`,
      `⏱️ *Estimated Timeline:* ${service.timeline}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `Hi Scale Game team, I am interested in starting with your *${service.title}* service. Please share next steps and onboarding details!`,
    ];
    const url = `https://wa.me/919360512623?text=${encodeURIComponent(messageLines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSendCustomService = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    if (!customServiceText.trim()) {
      setFormError("Please enter the service or requirement you need.");
      return;
    }

    setFormError("");
    setFormSent(true);

    const messageLines = [
      `📩 *CUSTOM SERVICE INQUIRY — SCALE GAME*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      customName.trim() ? `👤 *Client Name / Brand:* ${customName.trim()}` : null,
      `📋 *Required Service Details:*`,
      customServiceText.trim(),
      `━━━━━━━━━━━━━━━━━━━━`,
      `Hi Scale Game, I would like to inquire about this service and get a custom proposal!`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/919360512623?text=${encodeURIComponent(messageLines.join("\n"))}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setFormSent(false);
      setCustomServiceText("");
      setCustomName("");
    }, 4000);
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#050505] text-white py-12 sm:py-16 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-5">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                [SECTION 04 // OUR SERVICES]
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              OUR SERVICES
            </h2>
          </div>

          {/* Manual Control Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleManualScroll("left")}
              onMouseEnter={() => soundFx.playHover()}
              className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center bg-black/40 text-white transition-all"
              data-cursor="interactive"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              onMouseEnter={() => soundFx.playHover()}
              className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center bg-black/40 text-white transition-all"
              data-cursor="interactive"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Elevator / Smooth Infinite Auto-Scroll Track */}
      <div
        className="relative w-full overflow-x-auto scrollbar-none py-2"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Shadows */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#050505] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#050505] to-transparent z-20" />

        <motion.div
          className="flex gap-4 w-max px-6 sm:px-12"
          animate={isPaused || selectedService !== null ? {} : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {marqueeList.map((service, index) => {
            const isSelected = selectedService?.id === service.id;
            return (
              <div
                key={`${service.id}-${index}`}
                className={`group w-[290px] sm:w-[320px] h-[350px] bg-[#090909] border p-4 flex flex-col justify-between shrink-0 transition-all duration-300 relative ${
                  isSelected
                    ? "border-white bg-[#121212] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    : "border-white/10 hover:border-white/50"
                }`}
              >
                <div>
                  {/* Animatic Vector Graphic */}
                  <AnimaticIllustration type={service.animaticType} />

                  {/* Service Category & Title */}
                  <div className="flex items-center justify-between mt-3 mb-1">
                    <span className="font-mono text-[10px] text-white/40 tracking-wider">
                      {service.number}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-white/60 bg-white/5 px-2 py-0.5 border border-white/10">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-tight mb-1 truncate">
                    {service.title}
                  </h3>

                  <p className="font-sans text-[11px] text-white/70 leading-snug line-clamp-2 mb-3">
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-1 pt-2 border-t border-white/10">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-white rounded-full shrink-0 opacity-50" />
                        <span className="font-sans text-[10px] text-white/80 truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2 border-t border-white/10">
                  <button
                    onClick={() => handleOpenDashboard(service)}
                    onMouseEnter={() => soundFx.playHover()}
                    data-cursor="interactive"
                    className={`w-full py-2 font-mono text-[10px] font-bold tracking-wider uppercase border transition-all text-center flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? "bg-white text-black border-white"
                        : "bg-white/5 hover:bg-white text-white/80 hover:text-black border-white/20"
                    }`}
                  >
                    <span>INQUIRE SERVICE</span>
                    <ArrowDownRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Service Execution Dashboard Drawer */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            ref={dashboardRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden max-w-7xl mx-auto px-6 sm:px-12 mt-8"
          >
            <div className="bg-[#0b0b0b] border-2 border-white/30 p-6 sm:p-10 relative">
              {/* Close Button */}
              <button
                onClick={handleCloseDashboard}
                onMouseEnter={() => soundFx.playHover()}
                className="absolute top-4 right-4 p-2 border border-white/20 hover:border-white text-white/60 hover:text-white bg-black/50 transition-colors"
                title="Close Dashboard"
              >
                <X size={18} />
              </button>

              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5 mb-8 pr-12">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      SERVICE DASHBOARD // {selectedService.number}
                    </span>
                    <span className="font-mono text-[9px] bg-white/10 text-white px-2 py-0.5 border border-white/20 uppercase">
                      {selectedService.category}
                    </span>
                  </div>
                  <h3 className="font-mono text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    {selectedService.title}
                  </h3>
                </div>

                <div className="font-mono text-xs text-white/60 border border-white/10 bg-black/40 px-4 py-2">
                  ESTIMATED TIMELINE: <span className="text-white font-bold">{selectedService.timeline}</span>
                </div>
              </div>

              {/* 4-Step Execution Lifecycle */}
              <div className="mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-4">
                  EXECUTION LIFECYCLE // HOW WE MEET, START & DELIVER
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Step 1: Meet */}
                  <div className="p-4 border border-white/15 bg-black/60 relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] text-white/40 font-bold">01 // INITIAL MEET</span>
                      <Users size={16} className="text-white/70" />
                    </div>
                    <h4 className="font-mono text-xs font-bold uppercase text-white mb-2">
                      DISCOVERY & ALIGNMENT
                    </h4>
                    <p className="font-sans text-xs text-white/70 leading-relaxed">
                      {selectedService.lifecycle.meet}
                    </p>
                  </div>

                  {/* Step 2: Start */}
                  <div className="p-4 border border-white/15 bg-black/60 relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] text-white/40 font-bold">02 // HOW WE START</span>
                      <Calendar size={16} className="text-white/70" />
                    </div>
                    <h4 className="font-mono text-xs font-bold uppercase text-white mb-2">
                      STRATEGY & SCOPE PLAN
                    </h4>
                    <p className="font-sans text-xs text-white/70 leading-relaxed">
                      {selectedService.lifecycle.start}
                    </p>
                  </div>

                  {/* Step 3: Execute */}
                  <div className="p-4 border border-white/15 bg-black/60 relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] text-white/40 font-bold">03 // THE WORK</span>
                      <Rocket size={16} className="text-white/70" />
                    </div>
                    <h4 className="font-mono text-xs font-bold uppercase text-white mb-2">
                      HIGH-SPEED PRODUCTION
                    </h4>
                    <p className="font-sans text-xs text-white/70 leading-relaxed">
                      {selectedService.lifecycle.execute}
                    </p>
                  </div>

                  {/* Step 4: End */}
                  <div className="p-4 border border-white/15 bg-black/60 relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] text-white/40 font-bold">04 // HOW WE END</span>
                      <CheckCheck size={16} className="text-white/70" />
                    </div>
                    <h4 className="font-mono text-xs font-bold uppercase text-white mb-2">
                      DELIVERY & SCALE
                    </h4>
                    <p className="font-sans text-xs text-white/70 leading-relaxed">
                      {selectedService.lifecycle.end}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action Bottom Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/15 bg-black/40 p-4">
                <div className="font-mono text-xs text-white/70">
                  Ready to launch <span className="text-white font-bold">{selectedService.title}</span> for your business?
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleWhatsAppInquiry(selectedService)}
                    onMouseEnter={() => soundFx.playHover()}
                    className="flex-1 sm:flex-none px-6 py-3 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  >
                    <MessageCircle size={15} />
                    START WITH THIS SERVICE VIA WHATSAPP →
                  </button>
                  <button
                    onClick={handleCloseDashboard}
                    className="px-4 py-3 border border-white/20 hover:border-white text-white/70 hover:text-white font-mono text-xs uppercase transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Direct Custom Service Text Form */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-8 pt-6 border-t border-white/10">
        <div className="bg-[#0c0c0c] border border-white/15 p-5 sm:p-7 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle size={16} className="text-white shrink-0" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                DIRECT SERVICE INQUIRY
              </span>
            </div>
            <h3 className="font-mono text-xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
              TELL US WHAT SERVICE YOU NEED
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/60 mb-6">
              Enter the specific service, shoot, or custom requirement you need. Click send to chat directly with our team on WhatsApp.
            </p>

            <form onSubmit={handleSendCustomService} className="space-y-4">
              {formError && (
                <div className="p-3 bg-red-950/60 border border-red-500/50 text-red-200 font-mono text-xs flex items-center gap-2">
                  <AlertCircle size={14} className="shrink-0 text-red-400" />
                  <span>{formError}</span>
                </div>
              )}

              {formSent && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 font-mono text-xs flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
                  <span>Opening WhatsApp chat with your requested service...</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-1">
                    YOUR NAME / BRAND (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex / Apex Brands"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 px-3.5 py-3 font-mono text-xs text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-1">
                    REQUIRED SERVICE DETAILS <span className="text-white font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. I need Website Development, Culinary Shoot & Reels..."
                    value={customServiceText}
                    onChange={(e) => {
                      setCustomServiceText(e.target.value);
                      if (formError) setFormError("");
                    }}
                    className="w-full bg-black/60 border border-white/15 px-3.5 py-3 font-mono text-xs text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                  <MessageCircle size={15} />
                  SEND SERVICE REQUEST VIA WHATSAPP →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
