"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
  size?: number;
}

export function AnimatedLogo({ className, size = 320 }: AnimatedLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D dynamic tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const lightGleamX = useTransform(smoothX, [-0.5, 0.5], ["-20%", "120%"]);
  const lightGleamY = useTransform(smoothY, [-0.5, 0.5], ["-20%", "120%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative flex items-center justify-center select-none cursor-pointer perspective-[1000px]", className)}
      style={{ width: size, height: size }}
    >
      {/* ─── 01. AMBIENT BACKDROP PLATE & TELEMETRY ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-surface-muted/90 via-surface/80 to-background/90 border border-border-strong/50 shadow-2xl backdrop-blur-md overflow-hidden"
      >
        {/* Subtle studio grid pattern */}
        <div className="absolute inset-0 rounded-full bg-grid-pattern opacity-40" />

        {/* Ambient Crimson Radial Aura */}
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-radial-gradient from-accent-crimson/20 via-accent-crimson/5 to-transparent transition-opacity duration-700 pointer-events-none",
            isHovered ? "opacity-100" : "opacity-40"
          )}
        />

        {/* Studio Crosshairs */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border-subtle/50 pointer-events-none" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-subtle/50 pointer-events-none" />

        {/* Outer Orbiting Telemetry Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border border-dashed border-accent-crimson/30 pointer-events-none"
        >
          {/* Orbital Satellite Node */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-crimson shadow-[0_0_8px_rgba(201,29,46,0.8)]" />
        </motion.div>

        {/* Inner Counter-Rotating Precision Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-border-strong/40 pointer-events-none"
        />

        {/* Studio Coordinate Badges */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-muted-foreground uppercase bg-surface/90 px-2.5 py-0.5 rounded-full border border-border-subtle shadow-sm">
          30.7046° N · CHD
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-muted-foreground uppercase bg-surface/90 px-2.5 py-0.5 rounded-full border border-border-subtle shadow-sm">
          EST. 2011 · IN-HOUSE
        </div>
      </motion.div>

      {/* ─── 02. INTERACTIVE 3D LOGO EMBLEM ─── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered ? -4 : [-5, 5, -5],
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.3, ease: "easeOut" },
        }}
        className="relative z-10 w-[72%] h-[72%] flex items-center justify-center pointer-events-none"
      >
        {/* Dynamic Chevron Energy Ray / Beam */}
        <motion.div
          animate={{
            opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.45, 0.2],
            scale: isHovered ? [1, 1.15, 1] : [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-tr from-accent-crimson/50 via-accent-crimson/20 to-transparent blur-xl pointer-events-none"
        />

        {/* Authentic Q-Five Logo Mark (Light & Dark Theme adaptive) */}
        <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_16px_32px_rgba(201,29,46,0.25)]">
          {/* Light Theme: Dark metallic ring with 3D red origami chevron */}
          <Image
            src="/logo/qmark.png"
            alt="Q-Five Authentic Brand Logo"
            width={400}
            height={421}
            priority
            className="w-full h-full object-contain dark:hidden transition-transform duration-300 select-none"
          />

          {/* Dark Theme: White/ivory metallic ring with 3D red origami chevron */}
          <Image
            src="/logo/qmark-light.png"
            alt="Q-Five Authentic Brand Logo"
            width={400}
            height={421}
            priority
            className="w-full h-full object-contain hidden dark:block transition-transform duration-300 select-none"
          />

          {/* Specular Interactive Sheen Overlay */}
          <motion.div
            style={{
              left: lightGleamX,
              top: lightGleamY,
            }}
            className="absolute w-20 h-20 rounded-full bg-white/15 blur-md pointer-events-none mix-blend-overlay"
          />
        </div>

        {/* Micro Floating Ruby Sparks */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
            x: [2, -2, 2],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-accent-crimson shadow-[0_0_6px_rgba(201,29,46,0.9)]"
        />
        <motion.div
          animate={{
            y: [3, -3, 3],
            x: [-2, 2, -2],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-8 left-8 w-1.5 h-1.5 rounded-full bg-accent-crimson/70 shadow-[0_0_6px_rgba(201,29,46,0.7)]"
        />
      </motion.div>
    </div>
  );
}

