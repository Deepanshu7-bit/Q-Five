"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";

export function CustomCursor() {
  const { cursorVariant, cursorText } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch / mobile devices or prefers-reduced-motion
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible || cursorVariant === "hidden") return null;

  const variants = {
    default: {
      width: 14,
      height: 14,
      x: mousePosition.x - 7,
      y: mousePosition.y - 7,
      backgroundColor: "var(--accent-crimson)",
      borderColor: "transparent",
      opacity: 0.85,
    },
    pointer: {
      width: 38,
      height: 38,
      x: mousePosition.x - 19,
      y: mousePosition.y - 19,
      backgroundColor: "transparent",
      borderColor: "var(--accent-crimson)",
      borderWidth: 2,
      opacity: 1,
    },
    view: {
      width: 76,
      height: 76,
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      backgroundColor: "var(--foreground)",
      borderColor: "var(--foreground)",
      opacity: 1,
    },
    play: {
      width: 76,
      height: 76,
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      backgroundColor: "var(--accent-crimson)",
      borderColor: "transparent",
      opacity: 1,
    },
    drag: {
      width: 70,
      height: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      backgroundColor: "var(--surface-elevated)",
      borderColor: "var(--border-strong)",
      opacity: 1,
    },
    explore: {
      width: 80,
      height: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "var(--accent)",
      borderColor: "transparent",
      opacity: 1,
    },
  };

  const isLarge = ["view", "play", "drag", "explore"].includes(cursorVariant);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-mono font-bold tracking-wider text-[11px] uppercase mix-blend-difference"
      animate={cursorVariant}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
        mass: 0.1,
      }}
    >
      {isLarge && (
        <span
          className={
            cursorVariant === "view"
              ? "text-background font-bold text-[10px]"
              : "text-accent-foreground font-bold text-[10px]"
          }
        >
          {cursorText || cursorVariant}
        </span>
      )}
    </motion.div>
  );
}
