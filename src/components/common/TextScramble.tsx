"use client";

import React, { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  triggerOnHover?: boolean;
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#*/<>[]-=";

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = "",
  as: Component = "span",
  triggerOnHover = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const animatingRef = useRef(false);

  const scramble = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText((_) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      iteration += 1 / 2;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        animatingRef.current = false;
      }
    }, 28);
  };

  useEffect(() => {
    scramble();
  }, [text]);

  return (
    <Component
      className={className}
      onMouseEnter={triggerOnHover ? scramble : undefined}
    >
      {displayText}
    </Component>
  );
};
