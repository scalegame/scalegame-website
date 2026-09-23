"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { soundFx } from "./common/SoundController";
import { MagneticButton } from "./common/MagneticButton";

interface NavbarProps {
  onOpenGameModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGameModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "METHODOLOGY", href: "#philosophy" },
    { name: "SERVICES", href: "#services" },
    { name: "PROCESS", href: "#process" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -60, duration: 0.8 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#050505]/85 backdrop-blur-md border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            onClick={() => {
              soundFx.playClick();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 select-none"
            data-cursor="interactive"
          >
            <div className="relative w-8 h-8 flex items-center justify-center border border-white/20 bg-black/60 group-hover:border-white transition-colors duration-300">
              <span className="font-mono text-xs font-black tracking-tighter text-white">SG</span>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-widest font-black uppercase text-white group-hover:text-white/80 transition-colors">
                SCALE GAME
              </span>
              <span className="font-mono text-[9px] text-white/40 tracking-wider">
                AGENCY // V.2.6
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 border border-white/10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => soundFx.playHover()}
                className="font-mono text-xs text-white/60 hover:text-white px-3 py-1.5 rounded-full transition-colors duration-200 tracking-wider"
                data-cursor="interactive"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Zone: Socials + Audio Toggle + CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct WhatsApp Quick Link */}
            <a
              href="https://wa.me/919360512623"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 border border-white/10 hover:border-emerald-400/80 bg-black/50 text-white/70 hover:text-emerald-400 transition-all rounded"
              title="Chat on WhatsApp (+91 93605 12623)"
              data-cursor="interactive"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.129z"/>
              </svg>
            </a>

            {/* Direct Instagram Quick Link */}
            <a
              href="https://www.instagram.com/scale.game/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 border border-white/10 hover:border-pink-400/80 bg-black/50 text-white/70 hover:text-pink-400 transition-all rounded"
              title="Follow on Instagram (@scale.game)"
              data-cursor="interactive"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Magnetic CTA Button */}
            <MagneticButton
              onClick={onOpenGameModal}
              className="px-5 py-2 border border-white bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white hover:border-white transition-all duration-300"
            >
              <span className="flex items-center gap-1.5">
                LET&apos;S WORK
                <ArrowUpRight size={14} />
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 border border-white/20 bg-black text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col pt-24 px-8 sm:hidden border-b border-white/10"
          >
            <div className="flex flex-col gap-6 my-auto">
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 pb-2 border-b border-white/10">
                NAVIGATION MATRIX
              </div>
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-baseline justify-between font-mono text-2xl font-bold tracking-tight text-white/80 hover:text-white border-b border-white/5 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="mt-auto pb-10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGameModal();
                }}
                className="w-full py-3.5 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2"
              >
                LET&apos;S WORK
                <ArrowUpRight size={16} />
              </button>
              <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>SCALE GAME AGENCY</span>
                <span>SYS.READY // 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
