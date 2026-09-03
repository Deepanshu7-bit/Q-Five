"use client";

import React from "react";
import { verifiedStats } from "@/data/clients";

export function CredibilityStats() {
  return (
    <section className="py-16 sm:py-20 bg-accent text-accent-foreground border-y border-accent-dark select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {verifiedStats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center sm:items-start text-center sm:text-left border-l-0 sm:border-l-2 border-white/20 sm:pl-6"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white">
                {stat.number}
              </span>
              <span className="text-sm font-mono font-bold uppercase tracking-wider text-white/90 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-white/70 font-sans mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
