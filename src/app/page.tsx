"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ChooseGameSection } from "@/components/sections/ChooseGameSection";
import { ServicesLevelsSection } from "@/components/sections/ServicesLevelsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { GameBriefingModal } from "@/components/common/GameBriefingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedObjective, setSelectedObjective] = useState<string>("BUILD A BRAND");

  const handleOpenModalWithObjective = (obj: string) => {
    setSelectedObjective(obj);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col">
      {/* Floating Tactical Navigation */}
      <Navbar onOpenGameModal={() => setModalOpen(true)} />

      {/* SECTION 01 — HERO */}
      <HeroSection onOpenGameModal={() => setModalOpen(true)} />

      {/* SECTION 02 — THE GAME (PHILOSOPHY) */}
      <PhilosophySection />

      {/* SECTION 03 — WHAT WE ACTUALLY DO (CHOOSE YOUR GAME) */}
      <ChooseGameSection onSelectObjective={handleOpenModalWithObjective} />

      {/* SECTION 04 — SERVICES / 9-LEVEL PROGRESSION SYSTEM */}
      <ServicesLevelsSection />

      {/* SECTION 05 — HOW WE THINK (PROCESS LOOP) */}
      <ProcessSection />

      {/* SECTION 06 — WHO WE WORK WITH (INDUSTRY TYPOGRAPHIC CLOUD) */}
      <IndustriesSection />

      {/* SECTION 07 — FINAL EXPERIENCE (GET STARTED CTA) */}
      <FinalCtaSection onOpenGameModal={() => setModalOpen(true)} />

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE GAME BRIEFING / CONSULTATION SIMULATOR MODAL */}
      <GameBriefingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultObjective={selectedObjective}
      />
    </main>
  );
}
