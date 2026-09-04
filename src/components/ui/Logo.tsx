"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center select-none aspect-square", className)}>
      {/* Light mode: authentic dark ring with red chevron */}
      <Image
        src="/logo/qmark.webp"
        alt="Q-Five Logo"
        width={120}
        height={120}
        priority
        className="w-full h-full object-contain dark:hidden transition-transform duration-300 drop-shadow-sm"
      />
      {/* Dark mode: authentic ivory/white ring with red chevron */}
      <Image
        src="/logo/qmark-light.webp"
        alt="Q-Five Logo"
        width={120}
        height={120}
        priority
        className="w-full h-full object-contain hidden dark:block transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(201,29,46,0.15)]"
      />
    </div>
  );
}

export function Logo({ className, showTagline = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textMap = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3 select-none", className)}
      aria-label="Qfive — Digital & Creative Agency"
    >
      <div className={cn(sizeMap[size], "relative flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5")}>
        {/* Soft crimson aura behind the red tail on hover */}
        <div className="absolute -bottom-1 -right-1 w-3/4 h-3/4 rounded-full bg-accent-crimson/0 group-hover:bg-accent-crimson/20 blur-md transition-all duration-300 pointer-events-none" />
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

