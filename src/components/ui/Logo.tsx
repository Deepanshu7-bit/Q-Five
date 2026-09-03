"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      aria-hidden="true"
    >
      {/* Outer geometric Q-loop */}
      <path
        d="M50 12C29.0132 12 12 29.0132 12 50C12 70.9868 29.0132 88 50 88C60.25 88 69.58 83.92 76.4 77.29L88 88.89L94 82.89L82.16 71.05C86.43 64.91 88 57.73 88 50C88 29.0132 70.9868 12 50 12ZM50 20C66.5685 20 80 33.4315 80 50C80 56.46 77.96 62.45 74.49 67.36L66.72 59.59C68.78 56.84 70 53.47 70 50C70 38.9543 61.0457 30 50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70C53.47 70 56.84 68.78 59.59 66.72L67.36 74.49C62.45 77.96 56.46 80 50 80C33.4315 80 20 66.5685 20 50C20 33.4315 33.4315 20 50 20Z"
        fill="currentColor"
        className="text-foreground transition-colors duration-300"
      />
      {/* Inner vibrant 5-angle ruby core */}
      <path
        d="M44 38H58V45H47L48.5 52C49.8 51.4 51.5 51 53.5 51C57.6 51 61 54.2 61 58.5C61 63 57.5 66.5 53 66.5C49 66.5 45.8 63.8 45.2 60L51.8 58.8C52 60 52.8 60.8 53.8 60.8C54.8 60.8 55.6 59.8 55.6 58.6C55.6 57.4 54.7 56.5 53.5 56.5C52 56.5 51 57.2 50.4 58.2L44 56.8L44 38Z"
        fill="var(--accent-crimson)"
        className="transition-colors duration-300"
      />
      {/* Dynamic diagonal kick */}
      <path
        d="M62 62L82 82"
        stroke="var(--accent-crimson)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, showTagline = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textMap = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3 select-none", className)}
      aria-label="Qfive — Digital & Creative Agency"
    >
      <div className={cn(sizeMap[size], "relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105")}>
        <LogoMark />
      </div>
      <div className="flex flex-col">
        <div className={cn(textMap[size], "font-black tracking-tight leading-none font-display text-foreground")}>
          Q<span className="text-accent-crimson transition-colors duration-300">FIVE</span>
        </div>
        {showTagline && (
          <span className="text-[9.5px] uppercase tracking-widest font-mono text-muted-foreground mt-1 leading-none">
            Digital &amp; Creative Studio
          </span>
        )}
      </div>
    </Link>
  );
}
