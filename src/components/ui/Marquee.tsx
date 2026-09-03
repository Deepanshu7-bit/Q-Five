import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items?: string[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
  reverse?: boolean;
}

export function Marquee({
  items = [
    "Digital Marketing",
    "Custom Software",
    "Video Production",
    "AI Automations",
    "Brand Architecture",
    "Mobile Applications",
    "Performance Media",
    "Full-Stack Engineering",
    "Cinematic Editing",
  ],
  speed = "normal",
  className,
  reverse = false,
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_45s_linear_infinite]",
    normal: "animate-[marquee_28s_linear_infinite]",
    fast: "animate-[marquee_18s_linear_infinite]",
  }[speed];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 sm:py-5 border-y border-border-subtle bg-surface select-none",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "flex whitespace-nowrap gap-8 items-center",
          speedClass,
          reverse && "[animation-direction:reverse]"
        )}
      >
        {/* Quadrupled items array for perfectly infinite loop */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 flex-shrink-0">
            <span className="text-sm sm:text-base font-display font-black uppercase tracking-wider text-foreground">
              {item}
            </span>
            <span className="text-accent-crimson text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
