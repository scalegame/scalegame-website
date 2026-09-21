"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-capable non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[data-cursor='interactive']") ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA"
        );
        setIsHovering(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden transition-opacity duration-300">
      {/* Precision Center Crosshair Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-white"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: isClicking ? 0.6 : isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer Tactical Reticle / Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/40"
        animate={{
          x: pos.x - (isHovering ? 24 : 14),
          y: pos.y - (isHovering ? 24 : 14),
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          borderColor: isHovering ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.25)",
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.2 }}
      />

      {/* Tiny Tactical Coordinate readout on hover */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: pos.x + 20, y: pos.y + 12 }}
          className="fixed top-0 left-0 font-mono text-[9px] uppercase tracking-widest text-white/50"
        >
          [TARGET // ACQUIRED]
        </motion.div>
      )}
    </div>
  );
};
