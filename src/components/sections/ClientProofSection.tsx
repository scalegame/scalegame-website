"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { soundFx } from "../common/SoundController";

const CLIENTS = [
  {
    id: "angel-insurance",
    name: "ANGEL INSURANCE",
    category: "FINANCIAL SERVICES & INSURANCE",
    location: "TAMIL NADU",
    logoSrc: "/clients/angel-insurance-clean.png",
    logoBg: "bg-[#0A0D14]",
    logoPadding: "p-3 sm:p-4",
  },
  {
    id: "blueray-international",
    name: "BLUERAY INTERNATIONAL",
    category: "GLOBAL SERVICES & LOGISTICS",
    location: "GLOBAL & REGIONAL",
    logoSrc: "/clients/blueray-clean.png",
    logoBg: "bg-white",
    logoPadding: "p-3 sm:p-5",
  },
  {
    id: "v-decor",
    name: "V DECOR & PAINTING CONTRACTS",
    category: "HOME IMPROVEMENT & DECOR",
    location: "TAMIL NADU",
    logoSrc: "/clients/v-decor-transparent.png",
    logoBg: "bg-gradient-to-b from-zinc-50 to-white",
    logoPadding: "p-2 sm:p-3",
  },
  {
    id: "skr-aqua-life",
    name: "SKR AQUA LIFE RO",
    category: "WATER PURIFICATION & APPLIANCES",
    location: "TAMIL NADU",
    logoSrc: "/clients/skr-aqua-life-transparent.png",
    logoBg: "bg-gradient-to-b from-blue-50/50 to-white",
    logoPadding: "p-2 sm:p-3",
  },
];

export const ClientProofSection: React.FC = () => {
  return (
    <section
      id="clients"
      className="relative w-full bg-white text-zinc-900 py-8 sm:py-12 px-6 sm:px-12 border-b border-zinc-200/80 overflow-hidden select-none"
    >
      {/* Subtle Ambient Tactical Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* LOGO QUICK-TICKER / TRUSTED CLIENTS STRIP */}
        <div className="p-5 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-xs">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200/80 mb-5">
            <div className="flex items-center gap-2.5">
              <Award size={17} className="text-zinc-950" />
              <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-zinc-950 font-black">
                TRUSTED CLIENTS
              </h2>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>ACTIVE PERFORMANCE PARTNERS • TAMIL NADU & BEYOND</span>
            </div>
          </div>

          {/* 4 Client Logo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {CLIENTS.map((client) => (
              <div
                key={client.id}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative flex flex-col justify-between p-5 rounded-xl bg-white hover:bg-white border border-zinc-200/90 hover:border-zinc-950 hover:shadow-md transition-all duration-300"
              >
                {/* Logo Area */}
                <div
                  className={`w-full h-28 sm:h-32 rounded-lg flex items-center justify-center relative overflow-hidden mb-4 border border-zinc-200/70 shadow-2xs ${client.logoBg} ${client.logoPadding}`}
                >
                  <Image
                    src={client.logoSrc}
                    alt={`${client.name} official client logo`}
                    width={260}
                    height={130}
                    className="max-h-20 sm:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Brand Meta */}
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-black tracking-tight text-zinc-950 uppercase line-clamp-1">
                      {client.name}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded-full shrink-0">
                      <CheckCircle2 size={9} className="text-emerald-600" />
                      VERIFIED
                    </span>
                  </div>

                  <span className="font-sans text-[11px] text-zinc-500 uppercase tracking-wide font-medium">
                    {client.category}
                  </span>

                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest pt-1">
                    {client.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
