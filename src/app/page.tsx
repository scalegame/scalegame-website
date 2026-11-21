"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientProofSection } from "@/components/sections/ClientProofSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ChooseGameSection } from "@/components/sections/ChooseGameSection";
import { ServicesLevelsSection } from "@/components/sections/ServicesLevelsSection";
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
    <main className="relative min-h-screen w-full bg-white text-zinc-900 flex flex-col">
      {/* Floating Tactical Navigation */}
      <Navbar onOpenGameModal={() => setModalOpen(true)} />

      {/* SECTION 01 — HERO */}
      <HeroSection onOpenGameModal={() => setModalOpen(true)} />

      {/* SECTION 02 — SERVICES / PROGRESSION SYSTEM */}
      <ServicesLevelsSection />

      {/* SECTION 03 — WHAT WE ACTUALLY DO (CHOOSE YOUR GAME / GOALS) */}
      <ChooseGameSection onSelectObjective={handleOpenModalWithObjective} />

      {/* SECTION 04 — GROWTH METHODOLOGY (PHILOSOPHY) */}
      <PhilosophySection />

      {/* SECTION 05 — WHO WE WORK WITH (INDUSTRY CLOUD / BUILT FOR EVERY MARKET) */}
      <IndustriesSection />

      {/* SECTION 06 — TRUSTED CLIENTS */}
      <ClientProofSection />

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
