"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
  size?: number;
}

export function AnimatedLogo({ className, size = 320 }: AnimatedLogoProps) {
  return (
    <div
      className={cn("relative flex items-center justify-center select-none", className)}
      style={{ width: size, height: size }}
    >
      {/* Ambient glowing radial backdrop plate */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-surface-muted via-surface to-background border border-border-strong/40 shadow-2xl backdrop-blur-sm"
      >
        {/* Subtle grid and crosshair markings */}
        <div className="absolute inset-0 rounded-full bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border-subtle/60" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-subtle/60" />

        {/* Orbiting pulse accent ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-dashed border-accent-crimson/25"
        />

        {/* Studio Coordinate Badges on circumference */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-muted uppercase bg-surface/80 px-2 py-0.5 rounded border border-border-subtle">
          30.7046° N · CHD
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-muted uppercase bg-surface/80 px-2 py-0.5 rounded border border-border-subtle">
          EST. 2011 · IN-HOUSE
        </div>
      </motion.div>

      {/* Floating vector emblem container */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-3/4 h-3/4 flex items-center justify-center"
      >
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full relative flex items-center justify-center drop-shadow-[0_20px_35px_rgba(179,28,42,0.18)]"
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Animated drawing outer Q path */}
            <motion.path
              d="M50 14C30.1177 14 14 30.1177 14 50C14 69.8823 30.1177 86 50 86C59.8 86 68.6 82.1 75 75.7L86 86.7L91.5 81.2L80.5 70.2C85.1 64.4 86 57.3 86 50C86 30.1177 69.8823 14 50 14Z"
              stroke="var(--foreground)"
              strokeWidth="2.5"
              fill="currentColor"
              className="text-surface-elevated/80"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Inner loop ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="24"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 1 }}
            />

            {/* Glowing red '5' / core symbol */}
            <motion.path
              d="M42 36H60V44H46L47.5 52C49 51.3 51 50.8 53.5 50.8C58.5 50.8 62.5 54.4 62.5 59.2C62.5 64.2 58.2 68 53 68C48.2 68 44.5 64.8 43.8 60.2L51.2 59C51.5 60.5 52.3 61.5 53.5 61.5C55 61.5 56 60.4 56 59.2C56 58 54.8 56.8 53.2 56.8C51.5 56.8 50.4 57.8 49.6 59L42 57.5L42 36Z"
              fill="var(--accent-crimson)"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Dynamic red diagonal anchor strike */}
            <motion.path
              d="M62 62L85 85"
              stroke="var(--accent-crimson)"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            />

            {/* Micro coordinate dots */}
            <motion.circle
              cx="50"
              cy="14"
              r="2.5"
              fill="var(--accent-crimson)"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
